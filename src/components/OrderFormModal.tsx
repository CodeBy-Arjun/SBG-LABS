import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectPrice: number;
  projectId?: string;
}

const OrderFormModal = ({ isOpen, onClose, projectTitle, projectPrice, projectId }: OrderFormModalProps) => {
  const [formData, setFormData] = useState({
    clientName: "",
    whatsapp: "",
    email: "",
    requirements: "",
    deliveryTime: "",
    budget: projectPrice.toString(),
    addDocumentation: false,
    addPPT: false,
    collegeRollNumber: "",
    paymentMethod: "" as "upi" | "phone_pay" | "cod" | "",
    upiId: "",
    transactionId: "",
    paymentPhone: "",
    couponCode: "",
  });
  const [collegeIdFile, setCollegeIdFile] = useState<File | null>(null);
  const [isUploadingId, setIsUploadingId] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [validatingCoupon, setValidatingCoupon] = useState(false);

  const calculateTotal = () => {
    let total = projectPrice;
    if (formData.addDocumentation) total += 500;
    if (formData.addPPT) total += 250;
    
    // Apply 10% student discount if college info provided
    if (collegeIdFile && formData.collegeRollNumber.trim()) {
      total = total * 0.9; // 10% discount
    }
    
    // Apply coupon discount
    if (couponApplied && couponDiscount > 0) {
      total = total - couponDiscount;
    }
    
    return Math.round(total);
  };

  const validateCoupon = async () => {
    if (!formData.couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setValidatingCoupon(true);
    try {
      const { data: coupon, error } = await supabase
        .from("coupons")
        .select("*")
        .eq("code", formData.couponCode.toUpperCase())
        .eq("is_active", true)
        .single();

      if (error || !coupon) {
        toast.error("Invalid or expired coupon code");
        setCouponApplied(false);
        setCouponDiscount(0);
        return;
      }

      // Check date validity
      const now = new Date();
      const startDate = new Date(coupon.start_date);
      const endDate = coupon.end_date ? new Date(coupon.end_date) : null;

      if (now < startDate || (endDate && now > endDate)) {
        toast.error("Coupon has expired or not yet valid");
        setCouponApplied(false);
        setCouponDiscount(0);
        return;
      }

      // Check usage limit
      if (coupon.usage_limit && coupon.used_count >= coupon.usage_limit) {
        toast.error("Coupon usage limit reached");
        setCouponApplied(false);
        setCouponDiscount(0);
        return;
      }

      // Check category restriction
      if (coupon.applicable_categories && coupon.applicable_categories.length > 0) {
        // Fetch project category
        if (projectId) {
          const { data: project } = await supabase
            .from("projects")
            .select("category")
            .eq("id", projectId)
            .single();

          if (project && !coupon.applicable_categories.includes(project.category)) {
            toast.error("Coupon not applicable to this project category");
            setCouponApplied(false);
            setCouponDiscount(0);
            return;
          }
        }
      }

      // Calculate subtotal before coupon
      let subtotal = projectPrice;
      if (formData.addDocumentation) subtotal += 500;
      if (formData.addPPT) subtotal += 250;
      if (collegeIdFile && formData.collegeRollNumber.trim()) {
        subtotal = subtotal * 0.9;
      }

      // Check minimum purchase
      if (coupon.min_purchase && subtotal < coupon.min_purchase) {
        toast.error(`Minimum purchase of ₹${coupon.min_purchase} required for this coupon`);
        setCouponApplied(false);
        setCouponDiscount(0);
        return;
      }

      // Calculate discount
      let discount = 0;
      if (coupon.discount_type === "percentage") {
        discount = (subtotal * coupon.discount_value) / 100;
      } else {
        discount = coupon.discount_value;
      }

      setCouponDiscount(discount);
      setCouponApplied(true);
      toast.success(`Coupon applied! You saved ₹${discount.toFixed(2)}`);
    } catch (error: any) {
      console.error("Error validating coupon:", error);
      toast.error("Failed to validate coupon");
      setCouponApplied(false);
      setCouponDiscount(0);
    } finally {
      setValidatingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
    setFormData({ ...formData, couponCode: "" });
    toast.info("Coupon removed");
  };

  const hasStudentDiscount = () => {
    return collegeIdFile && formData.collegeRollNumber.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let collegeIdUrl = null;
      const originalAmount = projectPrice + (formData.addDocumentation ? 500 : 0) + (formData.addPPT ? 250 : 0);
      const totalAmount = calculateTotal();
      const addOns = [];
      if (formData.addDocumentation) addOns.push("Documentation");
      if (formData.addPPT) addOns.push("PPT");

      // Upload college ID if provided
      if (collegeIdFile && formData.collegeRollNumber.trim()) {
        setIsUploadingId(true);
        const fileExt = collegeIdFile.name.split('.').pop();
        const fileName = `${Date.now()}-${formData.collegeRollNumber}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('college-ids')
          .upload(fileName, collegeIdFile);

        if (uploadError) {
          console.error("Error uploading college ID:", uploadError);
          toast.error("Failed to upload college ID");
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('college-ids')
            .getPublicUrl(fileName);
          collegeIdUrl = publicUrl;
        }
        setIsUploadingId(false);
      }

      // Determine payment status based on method
      const paymentStatus = formData.paymentMethod === 'cod' ? 'cod_pending' : 
                           (formData.transactionId ? 'paid' : 'pending');

      // Save to database
      const { data: orderData, error } = await (supabase as any)
        .from("project_orders")
        .insert({
          project_title: projectTitle,
          client_name: formData.clientName,
          client_email: formData.email,
          client_phone: formData.whatsapp,
          project_description: `${formData.requirements}\n\nDelivery Time: ${formData.deliveryTime}\nAdd-ons: ${addOns.join(", ") || "None"}${formData.collegeRollNumber ? `\nCollege Roll Number: ${formData.collegeRollNumber}` : ""}${couponApplied ? `\nCoupon Applied: ${formData.couponCode} (₹${couponDiscount} discount)` : ""}`,
          amount: totalAmount,
          original_amount: originalAmount,
          is_student_discount: hasStudentDiscount(),
          college_id_image_url: collegeIdUrl,
          college_roll_number: formData.collegeRollNumber || null,
          payment_method: formData.paymentMethod || null,
          payment_status: paymentStatus,
          upi_id: formData.upiId || null,
          transaction_id: formData.transactionId || null,
          payment_phone: formData.paymentPhone || null,
          payment_date: formData.transactionId ? new Date().toISOString() : null,
          status: "pending",
        })
        .select()
        .single();

      if (error) throw error;

      // Track coupon redemption if applied
      if (couponApplied && formData.couponCode && orderData) {
        const { data: coupon } = await supabase
          .from("coupons")
          .select("id, used_count")
          .eq("code", formData.couponCode.toUpperCase())
          .single();

        if (coupon) {
          // Insert redemption record
          await supabase.from("coupon_redemptions").insert({
            coupon_id: coupon.id,
            order_id: orderData.id,
            user_email: formData.email || "",
            discount_applied: couponDiscount,
          });

          // Update coupon usage count
          await supabase
            .from("coupons")
            .update({ used_count: (coupon.used_count || 0) + 1 })
            .eq("id", coupon.id);
        }
      }

      // Send confirmation emails
      try {
        await supabase.functions.invoke("send-order-confirmation", {
          body: {
            clientName: formData.clientName,
            clientEmail: formData.email,
            projectTitle,
            amount: totalAmount,
            requirements: formData.requirements,
            deliveryTime: formData.deliveryTime,
            whatsapp: formData.whatsapp,
          },
        });
      } catch (emailError) {
        console.error("Failed to send emails:", emailError);
        // Don't fail the order if email fails
      }

      // Show success animation
      setShowSuccess(true);
      toast.success("Order confirmed!");

      // Wait for animation then redirect to WhatsApp
      setTimeout(() => {
        const paymentInfo = formData.paymentMethod === 'upi' ? 
          `\n💳 Payment: UPI (${formData.upiId})${formData.transactionId ? `\n🆔 Transaction ID: ${formData.transactionId}` : ''}` :
          formData.paymentMethod === 'phone_pay' ?
          `\n💳 Payment: PhonePe (${formData.paymentPhone})${formData.transactionId ? `\n🆔 Transaction ID: ${formData.transactionId}` : ''}` :
          formData.paymentMethod === 'cod' ?
          `\n💰 Payment: Cash on Delivery` : '';
        
        const message = `Hi Arjun 👋\nI've just confirmed my project order:\n\n📋 Project: ${projectTitle}\n👤 Name: ${formData.clientName}\n📱 WhatsApp: ${formData.whatsapp}\n📧 Email: ${formData.email}\n💰 Total Amount: ₹${totalAmount}\n⏰ Delivery: ${formData.deliveryTime}${paymentInfo}\n📝 Requirements:\n${formData.requirements}\n\n${addOns.length > 0 ? `Add-ons: ${addOns.join(", ")}\n\n` : ""}Please confirm!`;
        
        window.open(`https://wa.me/8247505768?text=${encodeURIComponent(message)}`, "_blank");
        
        // Reset and close
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            clientName: "",
            whatsapp: "",
            email: "",
            requirements: "",
            deliveryTime: "",
            budget: projectPrice.toString(),
            addDocumentation: false,
            addPPT: false,
            collegeRollNumber: "",
            paymentMethod: "",
            upiId: "",
            transactionId: "",
            paymentPhone: "",
            couponCode: "",
          });
          setCollegeIdFile(null);
          setCouponApplied(false);
          setCouponDiscount(0);
          onClose();
        }, 1500);
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotateX: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl glass-card border-2 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 50px rgba(33, 150, 243, 0.3)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full glass-card hover:bg-destructive/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Animation */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center glass-card"
                  style={{ backdropFilter: "blur(30px)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-24 h-24 text-green-500" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-2xl font-bold"
                  >
                    🎉 Order Confirmed!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-2 text-muted-foreground"
                  >
                    Redirecting to WhatsApp...
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8">
              <div className="mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gradient mb-2"
                >
                  Confirm Your Order
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground"
                >
                  Fill in the details below to proceed with your project order
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 p-4 rounded-lg glass-card"
                >
                  <p className="font-semibold text-lg">{projectTitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">Base Price: ₹{projectPrice}</p>
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="clientName" className="floating-label">Full Name *</Label>
                  <Input
                    id="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="glass-card border-border/50 focus:border-primary transition-all"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="glass-card border-border/50 focus:border-primary transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-card border-border/50 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="deliveryTime">Preferred Delivery Time *</Label>
                  <Select
                    value={formData.deliveryTime}
                    onValueChange={(value) => setFormData({ ...formData, deliveryTime: value })}
                    required
                  >
                    <SelectTrigger className="glass-card border-border/50">
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                      <SelectItem value="2-3 weeks">2-3 weeks</SelectItem>
                      <SelectItem value="3-4 weeks">3-4 weeks</SelectItem>
                      <SelectItem value="1-2 months">1-2 months</SelectItem>
                      <SelectItem value="urgent">Urgent (Extra charges apply)</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="requirements">Project Requirements *</Label>
                  <Textarea
                    id="requirements"
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="glass-card border-border/50 focus:border-primary transition-all min-h-[100px]"
                    placeholder="Describe your specific requirements, features needed, and any special instructions..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  <Label>Add-ons</Label>
                  <div className="flex items-center space-x-2 p-3 rounded-lg glass-card">
                    <input
                      type="checkbox"
                      id="documentation"
                      checked={formData.addDocumentation}
                      onChange={(e) => setFormData({ ...formData, addDocumentation: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <label htmlFor="documentation" className="flex-1 cursor-pointer">
                      Documentation (+₹500)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg glass-card">
                    <input
                      type="checkbox"
                      id="ppt"
                      checked={formData.addPPT}
                      onChange={(e) => setFormData({ ...formData, addPPT: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <label htmlFor="ppt" className="flex-1 cursor-pointer">
                      PowerPoint Presentation (+₹250)
                    </label>
                  </div>
                </motion.div>

                {/* Student Discount Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Label>🎓 Student Discount (10% OFF)</Label>
                    {hasStudentDiscount() && (
                      <span className="text-sm font-semibold text-green-500">✓ Applied</span>
                    )}
                  </div>
                  <div className="p-4 rounded-lg glass-card border-2 border-dashed border-primary/30">
                    <p className="text-sm text-muted-foreground mb-3">
                      Get 10% discount by uploading your college ID and roll number
                    </p>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="collegeRollNumber" className="text-sm">College Roll Number</Label>
                        <Input
                          id="collegeRollNumber"
                          value={formData.collegeRollNumber}
                          onChange={(e) => setFormData({ ...formData, collegeRollNumber: e.target.value })}
                          className="glass-card border-border/50 focus:border-primary transition-all mt-1"
                          placeholder="Enter your roll number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="collegeId" className="text-sm">Upload College ID Card</Label>
                        <div className="mt-1">
                          <input
                            type="file"
                            id="collegeId"
                            accept="image/jpeg,image/jpg,image/png,image/webp"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                  toast.error("File size must be less than 5MB");
                                  return;
                                }
                                setCollegeIdFile(file);
                              }
                            }}
                            className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer"
                          />
                        </div>
                        {collegeIdFile && (
                          <p className="text-sm text-green-500 mt-2 flex items-center gap-1">
                            ✓ {collegeIdFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Coupon Code Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.72 }}
                  className="space-y-3"
                >
                  <Label>🎁 Have a Coupon Code?</Label>
                  <div className="flex gap-2">
                    <Input
                      value={formData.couponCode}
                      onChange={(e) => setFormData({ ...formData, couponCode: e.target.value.toUpperCase() })}
                      placeholder="Enter coupon code"
                      disabled={couponApplied}
                      className="glass-card uppercase"
                    />
                    {!couponApplied ? (
                      <Button
                        type="button"
                        onClick={validateCoupon}
                        disabled={validatingCoupon || !formData.couponCode.trim()}
                        className="whitespace-nowrap"
                      >
                        {validatingCoupon ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Validating...
                          </>
                        ) : (
                          "Apply"
                        )}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={removeCoupon}
                        className="whitespace-nowrap"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  {couponApplied && couponDiscount > 0 && (
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                        ✓ Coupon applied! You saved ₹{couponDiscount.toFixed(2)}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="space-y-3"
                >
                  <Label>Payment Method *</Label>
                  <Select value={formData.paymentMethod} onValueChange={(value: any) => setFormData({ ...formData, paymentMethod: value })}>
                    <SelectTrigger className="glass-card">
                      <SelectValue placeholder="Select payment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upi">💳 UPI</SelectItem>
                      <SelectItem value="phone_pay">📱 PhonePe</SelectItem>
                      <SelectItem value="cod">💰 COD</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.paymentMethod === 'upi' && (
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold">Pay to: 8247505768@pytes</p>
                      <Input placeholder="Your UPI ID" value={formData.upiId} onChange={(e) => setFormData({ ...formData, upiId: e.target.value })} className="mt-2" />
                    </div>
                  )}
                  {formData.paymentMethod === 'phone_pay' && (
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold">Pay to: 8247505768</p>
                      <Input placeholder="Your Phone Number" value={formData.paymentPhone} onChange={(e) => setFormData({ ...formData, paymentPhone: e.target.value })} className="mt-2" />
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4 border-t border-border/50"
                >
                  <div className="space-y-2 mb-4">
                    {hasStudentDiscount() && (
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Original Amount:</span>
                        <span className="line-through">₹{projectPrice + (formData.addDocumentation ? 500 : 0) + (formData.addPPT ? 250 : 0)}</span>
                      </div>
                    )}
                    {hasStudentDiscount() && (
                      <div className="flex items-center justify-between text-sm font-semibold text-green-500">
                        <span>🎓 Student Discount (10%):</span>
                        <span>-₹{Math.round((projectPrice + (formData.addDocumentation ? 500 : 0) + (formData.addPPT ? 250 : 0)) * 0.1)}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-xl font-bold">
                      <span>Total Amount:</span>
                      <span className="text-gradient">₹{calculateTotal()}</span>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isUploadingId}
                    className="w-full gradient-primary hover-glow text-lg py-6 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting || isUploadingId ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {isUploadingId ? "Uploading ID..." : "Processing..."}
                        </>
                      ) : (
                        "Confirm Order"
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderFormModal;
