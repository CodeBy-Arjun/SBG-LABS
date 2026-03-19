import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  // Check booked slots when date changes
  const checkAvailability = async (selectedDate: Date) => {
    try {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      const { data, error } = await supabase
        .from("appointments")
        .select("time_slot")
        .eq("date", formattedDate)
        .neq("status", "cancelled");

      if (error) throw error;

      const bookedTimes = data?.map(appointment => appointment.time_slot) || [];
      setBookedSlots(bookedTimes);
    } catch (error) {
      console.error("Error checking availability:", error);
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedTimeSlot("");
    if (selectedDate) {
      checkAvailability(selectedDate);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !selectedTimeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time slot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedDate = format(date, "yyyy-MM-dd");

      // Insert appointment
      const { error } = await supabase
        .from("appointments")
        .insert({
          name,
          email,
          phone,
          date: formattedDate,
          time_slot: selectedTimeSlot,
          message,
          status: "pending"
        });

      if (error) {
        if (error.code === "23505") { // Unique constraint violation
          toast({
            title: "Slot Already Booked",
            description: "This time slot has just been booked. Please choose another time.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      setIsSuccess(true);
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setDate(undefined);
      setSelectedTimeSlot("");

      toast({
        title: "Booking Confirmed!",
        description: "Your appointment has been scheduled successfully.",
      });

    } catch (error) {
      console.error("Error booking appointment:", error);
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <Card className="glass-card">
                <CardContent className="p-12">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-glow">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your project guidance appointment has been successfully scheduled.
                    You'll receive a confirmation message on WhatsApp shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="gradient-primary hover-glow"
                    >
                      Book Another Appointment
                    </Button>
                    <a href="/">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        Back to Home
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-gradient">Book Project Guidance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a one-on-one consultation session for your project. Get expert guidance from idea to implementation.
            </p>
            <div className="inline-block mt-6 px-8 py-4 rounded-2xl gradient-accent text-accent-foreground">
              <p className="text-sm font-semibold mb-1">Service Fee</p>
              <p className="text-4xl font-bold">₹2,000</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Select Date</h2>
                      <p className="text-sm text-muted-foreground">Choose a convenient date</p>
                    </div>
                  </div>

                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                    className={cn("rounded-md border p-3 pointer-events-auto mx-auto")}
                  />

                  {date && (
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                          <Clock className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Available Time Slots</h3>
                          <p className="text-sm text-muted-foreground">
                            {format(date, "EEEE, MMMM d, yyyy")}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          return (
                            <Button
                              key={slot}
                              onClick={() => !isBooked && setSelectedTimeSlot(slot)}
                              disabled={isBooked}
                              variant={selectedTimeSlot === slot ? "default" : "outline"}
                              className={cn(
                                "h-12",
                                selectedTimeSlot === slot && "gradient-primary",
                                isBooked && "opacity-50 cursor-not-allowed"
                              )}
                            >
                              {slot}
                              {isBooked && " (Booked)"}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                      <User className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Your Details</h2>
                      <p className="text-sm text-muted-foreground">Fill in your information</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="pl-10 bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">WhatsApp Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="pl-10 bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Details (Optional)</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Textarea
                          placeholder="Brief description of your project idea..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="min-h-32 pl-10 bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Selected:</strong>
                      </p>
                      <p className="text-sm">
                        {date ? format(date, "MMMM d, yyyy") : "No date selected"} 
                        {selectedTimeSlot && ` at ${selectedTimeSlot}`}
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !date || !selectedTimeSlot}
                      className="w-full gradient-primary hover-glow text-lg"
                    >
                      {isSubmitting ? "Booking..." : "Confirm Booking (₹200)"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold mb-2">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">
                      One-on-one consultation with experienced developer
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-bold mb-2">Project Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed roadmap from concept to completion
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold mb-2">Tech Stack Advice</h4>
                    <p className="text-sm text-muted-foreground">
                      Best technologies and tools for your project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
