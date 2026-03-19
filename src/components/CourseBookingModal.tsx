import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Course } from "@/data/coursesData";
import { Loader2 } from "lucide-react";
import { z } from "zod";

interface CourseBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: Course | null;
}

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\+?[\d\s-]{10,15}$/, "Invalid phone number format"),
  timePreference: z.string().min(1, "Please select a time preference"),
});

const CourseBookingModal = ({ open, onOpenChange, course }: CourseBookingModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timePreference: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      bookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!course) return;
    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("course_bookings").insert({
        user_name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        course_id: course.id,
        course_name: course.name,
        time_preference: formData.timePreference,
        status: "pending",
      });

      if (error) throw error;

      toast.success("Course booking submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", timePreference: "" });
      setErrors({});
      onOpenChange(false);
    } catch (error: any) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Book Course: {course?.name}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Price: ₹{course?.price} | Duration: {course?.duration}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              maxLength={100}
              required
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              maxLength={255}
              required
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+91 9876543210"
              maxLength={15}
              required
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timePreference">Preferred Time Slot *</Label>
            <Select
              value={formData.timePreference}
              onValueChange={(value) => handleInputChange("timePreference", value)}
              required
            >
              <SelectTrigger className={errors.timePreference ? "border-destructive" : ""}>
                <SelectValue placeholder="Select your preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                <SelectItem value="weekend">Weekend Only</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
            {errors.timePreference && <p className="text-xs text-destructive">{errors.timePreference}</p>}
          </div>

          <div className="pt-4 space-y-2">
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Book Course"
              )}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              * Payment details will be shared after confirmation
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CourseBookingModal;
