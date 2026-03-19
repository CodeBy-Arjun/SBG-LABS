import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface TrendingProject {
  title: string;
  description: string;
  price: string;
  branch: string;
  tech: string[];
  badge?: string;
}

const trendingProjects: TrendingProject[] = [
  {
    title: "AI Resume Analyzer",
    description: "Uses NLP to rate resumes and provide feedback",
    price: "₹3,800",
    branch: "CSE",
    tech: ["Python", "NLP", "Flask"],
    badge: "🔥 Bestseller"
  },
  {
    title: "AI-Based Power Load Forecasting",
    description: "Predicts daily and peak energy demand using ML models",
    price: "₹3,200",
    branch: "ECE",
    tech: ["Python", "ML", "Power Systems"],
    badge: "⭐ Most Popular"
  },
  {
    title: "Smart Traffic Signal System",
    description: "Adaptive traffic light control using reinforcement learning",
    price: "₹3,700",
    branch: "ECE",
    tech: ["Python", "RL", "IoT"],
    badge: "🏆 Top Rated"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN site with payment gateway",
    price: "₹3,900",
    branch: "CSE",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    badge: "🔥 Trending"
  },
  {
    title: "Face Mask Detection",
    description: "CNN + OpenCV real-time detection",
    price: "₹3,900",
    branch: "CSE",
    tech: ["Python", "TensorFlow", "OpenCV"],
    badge: "⚡ Premium"
  }
];

export function TrendingProjectsCarousel() {
  return (
    <div className="w-full px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Trending Projects</h2>
          </div>
          <p className="text-xl text-muted-foreground">Most popular projects this month</p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {trendingProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-1"
                >
                  <Card className="glass-card hover-glow h-full group cursor-pointer">
                    <CardContent className="p-6">
                      {project.badge && (
                        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {project.badge}
                        </Badge>
                      )}
                      <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-3">
                        {project.branch}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </div>
  );
}
