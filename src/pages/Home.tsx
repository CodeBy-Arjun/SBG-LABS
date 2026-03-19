import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Rocket, Star, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingProjectsCarousel } from "@/components/TrendingProjectsCarousel";
import { LuckyDrawWheel } from "@/components/LuckyDrawWheel";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack websites with modern technologies",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Eye-catching designs for your brand",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile apps",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      content: "Excellent project work! Delivered my final year project on time with complete documentation.",
      rating: 5,
    },
    {
      name: "Kesava Bhalaji L",
      role: "EEE Student",
      content: "Excellent project Documentation! Delivered my final year project Document with Research on time.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content: "Professional service and great communication. Highly recommend for web development projects.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "MBA Student",
      content: "Got my marketing analytics project done perfectly. Very satisfied with the quality.",
      rating: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced with 3D Effects */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">500+ Premium Projects Available</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Ideas Into
              <span className="block text-gradient animate-gradient">Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert freelancing services and premium academic projects for students across all disciplines
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/projects">
                <Button size="lg" className="gradient-primary hover-glow text-lg px-8 animate-glow">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/8247505768" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                  Book Consultation
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Arjun, a passionate developer and designer specializing in creating exceptional digital experiences.
              With expertise across multiple domains, I help students excel in their academic projects and assist
              businesses in achieving their digital goals. From web development to 3D animation, I deliver quality
              work that exceeds expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-xl text-muted-foreground">Professional solutions for all your digital needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover-glow h-full group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary-foreground">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Projects Carousel */}
      <section className="py-20 px-4">
        <TrendingProjectsCarousel />
      </section>

      {/* Lucky Draw Wheel */}
      <LuckyDrawWheel />

      {/* Projects Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Premium academic and professional projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI-Based Power Load Forecasting",
                description: "Predicts daily and peak energy demand using machine learning models",
                price: "₹3,200",
                branch: "ECE",
                tech: ["Python", "ML", "Power Systems"]
              },
              {
                title: "E-Commerce Platform",
                description: "Full-stack online shopping platform with payment integration",
                price: "₹3,500",
                branch: "CSE",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Smart Traffic Signal System",
                description: "Adaptive traffic light control using reinforcement learning",
                price: "₹3,700",
                branch: "ECE",
                tech: ["Python", "RL", "IoT"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover-glow h-full group cursor-pointer overflow-hidden">
                  <CardContent className="p-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      {project.branch}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded bg-muted text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-primary">{project.price}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" className="gradient-primary hover-glow text-lg px-8">
                More Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Guidance */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card hover-glow overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-2xl gradient-secondary flex items-center justify-center mb-6 mx-auto animate-float">
                  <Rocket className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Project Guidance Service</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Transform your idea into a complete project with expert guidance
                </p>
                <div className="inline-block px-6 py-3 rounded-full gradient-accent text-accent-foreground font-bold text-2xl mb-8">
                  ₹2,000
                </div>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get comprehensive project planning, technical guidance, and implementation support from ideation to completion.
                </p>
                <Link to="/booking">
                  <Button size="lg" className="gradient-secondary hover-glow">
                    Book Appointment Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover-glow h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">Let's discuss your project or requirements</p>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="WhatsApp Number"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      className="min-h-32 bg-background/50"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gradient-primary hover-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
