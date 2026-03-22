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
} from "lucide-react";

const Services = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies.",
      price: 999,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      description: "Mobile applications for Android & iOS.",
      price: 1999,
      features: ["Cross-platform", "API Integration", "Publishing"],
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Graphic Design",
      description: "Creative designs for branding & marketing.",
      price: 99,
      features: ["Logo Design", "Brand Identity", "Social Media"],
    },

    {
      icon: <Document className="w-10 h-10" />,
      title: "Documentation",
      description: "Project Documentation For Major and Minor Projects.",
      price: 499,
      features: ["UG,PG", "Final projects", "Documents"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Research Paper Writing",
      description: "reasearch paper.",
      price: 599,
      features: ["Research", "0 Plagarism", "More Acceptance Rate"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "PPT",
      description: "Animated Presentation for your topics.",
      price: 499,
      features: ["PPT", "ANIMATED", "MORE PROFFESIONAL"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Conference paper writing",
      description: "Conference paper writing for peer reviews.",
      price: 699,
      features: ["Deep Research", "NO AI TOOLS USAGE", "0 PLAGARISM"],
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Editing",
      description: "Professional video editing services.",
      price: 999,
      features: ["Color Grading", "Motion Graphics", "Audio"],
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Thumbnail Design",
      description: "High CTR thumbnails for YouTube.",
      price: 99,
      features: ["Eye-catching", "Fast Delivery", "Brand Consistency"],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Content Writing",
      description: "SEO-friendly content writing.",
      price: 199,
      features: ["SEO Optimized", "Research-based", "Copywriting"],
    },
    {
      icon: <Box className="w-10 h-10" />,
      title: "3D & Animation",
      description: "3D models and animations.",
      price: 1999,
      features: ["3D Modeling", "Animation", "Rendering"],
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Modern UI/UX design solutions.",
      price: 499,
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "ATS Resume",
      description: "ATS-friendly resumes & portfolios.",
      price: 199,
      features: ["ATS Optimized", "Portfolio", "LinkedIn"],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Services",
      description: "Boost website ranking.",
      price: 299,
      features: ["Keyword Research", "On-page SEO", "Tracking"],
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Social Media Marketing",
      description: "Grow your brand online.",
      price: 99,
      features: ["Content Strategy", "Campaigns", "Analytics"],
    },
  ];

  const handleOrderNow = (serviceName: string, price: number) => {
    setSelectedService(serviceName);
    setSelectedPrice(price);
    setIsOrderOpen(true);
  };

  const handleContact = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service.`;
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
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Freelancing Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional services to bring your ideas to life.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      Starting from ₹{service.price}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm">
                          • {feature}
                        </li>
                      ))}
                    </ul>

                    {/* BUTTONS */}
                    <div className="flex gap-2">
                      <Button
                        className="w-full gradient-primary"
                        onClick={() =>
                          handleOrderNow(service.title, service.price)
                        }
                      >
                        Order Now
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleContact(service.title)}
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

      {/* ORDER MODAL */}
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
