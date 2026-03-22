import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderFormModal from "@/components/OrderFormModal";

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
  PenTool,
  Globe,
  Database,
  Bug,
  Rocket,
  Layout,
  File,
  Briefcase,
} from "lucide-react";

const Services = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const services = [
    // 🔥 CORE SERVICES
    {
      icon: <Code className="w-10 h-10" />,
      title: "Website Development",
      description: "Modern responsive websites.",
      price: 999,
      features: ["Responsive", "SEO", "Fast"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      description: "Android & iOS apps.",
      price: 1999,
      features: ["Hybrid", "API", "Play Store"],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Development",
      description: "APIs & server logic.",
      price: 1499,
      features: ["Node.js", "Database", "API"],
    },

    // 🎨 DESIGN SERVICES
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Graphic Design",
      description: "Branding & visuals.",
      price: 99,
      features: ["Logo", "Social Media", "Brand"],
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Logo Design",
      description: "Professional logos.",
      price: 299,
      features: ["Modern", "Brand Identity", "HD"],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Poster & Banner Design",
      description: "Marketing creatives.",
      price: 199,
      features: ["Ads", "Events", "Social Media"],
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Thumbnail Design",
      description: "High CTR thumbnails.",
      price: 99,
      features: ["YouTube", "Gaming", "Attractive"],
    },

    // 🎬 VIDEO SERVICES
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Editing",
      description: "Professional editing.",
      price: 999,
      features: ["Color", "Motion", "Audio"],
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Reel Editing",
      description: "Instagram & Shorts edits.",
      price: 199,
      features: ["Trending", "Fast", "Engaging"],
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Logo Animation",
      description: "Animated logos.",
      price: 399,
      features: ["Motion", "HD", "Brand"],
    },

    // 📚 STUDENT SERVICES (🔥 HIGH DEMAND)
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Documentation",
      description: "Project documentation.",
      price: 499,
      features: ["UG/PG", "Reports", "Final Projects"],
    },
    {
      icon: <File className="w-10 h-10" />,
      title: "PPT Design",
      description: "Animated presentations.",
      price: 499,
      features: ["Slides", "Animation", "Professional"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Research Paper Writing",
      description: "Scopus-level papers.",
      price: 599,
      features: ["Research", "0 Plagiarism", "Acceptance"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Conference Papers",
      description: "Peer-reviewed papers.",
      price: 699,
      features: ["Deep Research", "No AI", "0 Plagiarism"],
    },
    {
      icon: <Bug className="w-10 h-10" />,
      title: "Project Bug Fixing",
      description: "Fix coding errors.",
      price: 299,
      features: ["Debugging", "Quick Fix", "All Languages"],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Mini Projects",
      description: "Ready-to-use projects.",
      price: 999,
      features: ["Source Code", "Docs", "Support"],
    },

    // 💼 CAREER SERVICES
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "ATS Resume",
      description: "Job-ready resumes.",
      price: 199,
      features: ["ATS", "Portfolio", "LinkedIn"],
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Portfolio Website",
      description: "Personal portfolio.",
      price: 1499,
      features: ["Modern", "Responsive", "Hosting"],
    },

    // 📈 MARKETING SERVICES
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Services",
      description: "Boost rankings.",
      price: 299,
      features: ["Keywords", "On-page", "Tracking"],
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Social Media Marketing",
      description: "Grow your brand.",
      price: 499,
      features: ["Content", "Campaigns", "Analytics"],
    },

    // 🌐 EXTRA SERVICES
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Landing Page Design",
      description: "High-converting pages.",
      price: 799,
      features: ["UI", "Fast", "Conversion"],
    },
    {
      icon: <Bug className="w-10 h-10" />,
      title: "Website Bug Fixing",
      description: "Fix website issues.",
      price: 299,
      features: ["Error Fix", "Speed", "Optimization"],
    },
  ];

  const handleOrderNow = (serviceName: string, price: number) => {
    setSelectedService(serviceName);
    setSelectedPrice(price);
    setIsOrderOpen(true);
  };

  const handleContact = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service.`;
    window.open(
      `https://wa.me/8247505768?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Freelancing Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional services to grow your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card hover-glow h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 text-white">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    <p className="text-lg font-semibold mb-4">
                      ₹{service.price}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <Button
                        onClick={() =>
                          handleOrderNow(service.title, service.price)
                        }
                        className="w-full"
                      >
                        Order Now
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => handleContact(service.title)}
                        className="w-full"
                      >
                        Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <OrderFormModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        projectTitle={selectedService}
        projectPrice={selectedPrice}
      />
    </div>
  );
};

export default Services;
