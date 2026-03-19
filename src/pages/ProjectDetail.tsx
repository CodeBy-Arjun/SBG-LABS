import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderFormModal from "@/components/OrderFormModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReviewsSection from "@/components/ReviewsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Eye, 
  Share2, 
  IndianRupee,
  Clock,
  BarChart3,
  FileText,
  Video,
  Tag
} from "lucide-react";
import { toast } from "sonner";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  domain: string;
  price: number;
  difficulty: string;
  is_active: boolean;
  has_discount: boolean;
  discount_percentage: number;
  view_count: number;
  purchase_count: number;
  preview_video_url?: string;
  documentation_url?: string;
  thumbnail_url?: string;
  tags?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProjectAndIncrementViews();
    }
  }, [id]);

  const fetchProjectAndIncrementViews = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      
      setProject(data);

      // Increment view count
      await supabase
        .from("projects")
        .update({ view_count: (data.view_count || 0) + 1 })
        .eq("id", id);

      // Track analytics
      await supabase
        .from("project_analytics")
        .insert({
          project_id: id,
          event_type: "view",
        });
    } catch (error: any) {
      console.error("Error fetching project:", error);
      toast.error("Failed to load project details");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (platform: "link" | "whatsapp") => {
    const url = window.location.href;
    
    if (platform === "link") {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } else {
      const message = encodeURIComponent(
        `Check out this project: ${project?.title}\n${url}`
      );
      window.open(`https://wa.me/?text=${message}`, "_blank");
    }
  };

  const calculateFinalPrice = () => {
    if (!project) return 0;
    if (project.has_discount) {
      return project.price * (1 - project.discount_percentage / 100);
    }
    return project.price;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Button onClick={() => navigate("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    {/* Title and Badges */}
                    <div className="mb-6">
                      <h1 className="text-4xl font-bold mb-4 text-gradient">
                        {project.title}
                      </h1>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline">{project.domain}</Badge>
                        <Badge 
                          variant={
                            project.difficulty === "Beginner" ? "default" :
                            project.difficulty === "Intermediate" ? "secondary" :
                            "destructive"
                          }
                        >
                          {project.difficulty}
                        </Badge>
                        {project.has_discount && (
                          <Badge className="bg-green-500">
                            {project.discount_percentage}% OFF
                          </Badge>
                        )}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.view_count || 0} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ShoppingCart className="h-4 w-4" />
                          <span>{project.purchase_count || 0} purchases</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Description */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold mb-4">Description</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <>
                        <Separator className="my-6" />
                        <div>
                          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <Tag className="h-5 w-5" />
                            Technologies
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Resources */}
                    {(project.preview_video_url || project.documentation_url) && (
                      <>
                        <Separator className="my-6" />
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
                          <div className="flex flex-col gap-3">
                            {project.preview_video_url && (
                              <Button
                                variant="outline"
                                className="justify-start"
                                onClick={() => window.open(project.preview_video_url, "_blank")}
                              >
                                <Video className="mr-2 h-4 w-4" />
                                Preview Video
                              </Button>
                            )}
                            {project.documentation_url && (
                              <Button
                                variant="outline"
                                className="justify-start"
                                onClick={() => window.open(project.documentation_url, "_blank")}
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                Documentation
                              </Button>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-32"
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold flex items-center">
                          <IndianRupee className="h-8 w-8" />
                          {calculateFinalPrice().toLocaleString()}
                        </span>
                        {project.has_discount && (
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{project.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {project.has_discount && (
                        <p className="text-sm text-green-600 font-medium">
                          Save ₹{(project.price - calculateFinalPrice()).toLocaleString()} 
                          ({project.discount_percentage}% off)
                        </p>
                      )}
                    </div>

                    <Separator className="my-4" />

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Order Now
                      </Button>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleShare("link")}
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Copy Link
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleShare("whatsapp")}
                          className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-0"
                        >
                          <svg
                            className="mr-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          {/* Reviews Section */}
          <div className="mt-12">
            <ReviewsSection itemId={project.id} itemType="project" />
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle={project.title}
        projectPrice={calculateFinalPrice()}
        projectId={project.id}
      />
    </div>
  );
};

export default ProjectDetail;
