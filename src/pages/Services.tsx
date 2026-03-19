import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code,
  Smartphone,
  Palette,
  Video,
  Image,
  FileText,
  Box,
  Layers,
  FileCheck,
  Search,
  Share2,
} from "lucide-react";
import { Description } from "@radix-ui/react-toast";
import { features } from "process";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies. From landing pages to complex web applications.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX","Basic = 999","MultiPages = 1499-1999"],
      
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["Native & Hybrid Apps", "Cross-platform", "API Integration", "App Store Publishing","Basic = 1999","Advanced = 2499-2999"],
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Graphic Design",
      description: "Eye-catching visual designs for branding, marketing materials, and digital content.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics","Basic = 99","MultiPages = 499-999"],
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Editing",
      description: "Professional video editing for promotional content, tutorials, and social media videos.",
      features: ["Color Grading", "Motion Graphics", "Audio Enhancement", "Multiple Formats","Basic = 999","Pro = 1499-1999"],
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Thumbnail Design",
      description: "Attention-grabbing thumbnails for YouTube, courses, and digital content that boost click-through rates.",
      features: ["Eye-catching Design", "Brand Consistency", "A/B Testing Options", "Quick Turnaround","Basic = 99","Special pack = 199-499"],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Content Writing",
      description: "Engaging, SEO-friendly content for websites, blogs, and marketing campaigns.",
      features: ["SEO Optimized", "Research-based", "Multiple Niches", "Copywriting","Basic = 199","Pro = 499-999"],
    },
    {
      icon: <Box className="w-10 h-10" />,
      title: "3D & Animation Design",
      description: "Stunning 3D models and animations for games, product visualization, and marketing.",
      features: ["3D Modeling", "Character Animation", "Product Visualization", "Motion Design","Basic = 1999","Pro = 2499-2999"],
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and delightful digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing","Basic = 499","pro = 699-999"],
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "ATS Resume & Portfolio",
      description: "Professional resumes optimized for Applicant Tracking Systems and impressive portfolio websites.",
      features: ["ATS Optimized", "Modern Templates", "Portfolio Websites", "LinkedIn Optimization","Basic = 199","Pro = 499-999"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Services",
      description: "Comprehensive SEO strategies to improve your website's visibility and organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Tracking","Basic = 299","pro = 499-999"],
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to grow your brand presence and engagement.",
      features: ["Content Strategy", "Campaign Management", "Analytics & Reporting", "Community Management","Basic = 99","pro = 499-999"],
    },
  ];

  const handleContact = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more details?`;
    window.open(`https://wa.me/8247505768?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 text-gradient">Freelancing Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional digital services to bring your ideas to life. Quality work, delivered on time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card hover-glow h-full group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary-foreground">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleContact(service.title)}
                      className="w-full gradient-primary hover-glow"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Card className="glass-card max-w-3xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss your requirements and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/8247505768" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gradient-primary hover-glow">
                      Contact on WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:bunnykristipatidhanu123@gmail.com">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Send Email
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
};

export default Services;
