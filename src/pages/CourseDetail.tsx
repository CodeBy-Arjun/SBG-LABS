import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Clock, Award, BookOpen, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseBookingModal from "@/components/CourseBookingModal";
import ReviewsSection from "@/components/ReviewsSection";

interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tech_tags: string[];
  instructor: string;
  is_featured: boolean;
  thumbnail_url?: string;
}

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCourseAndTrackView();
  }, [id]);

  const fetchCourseAndTrackView = async () => {
    try {
      setLoading(true);

      // Fetch course details
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setCourse(data as Course);

      // Track page view in website analytics
      await supabase.from('website_analytics').insert({
        page_path: `/courses/${id}`,
        page_title: `Course: ${data.name}`,
        device_type: /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent.split(' ').pop()?.split('/')[0] || 'Unknown'
      });

    } catch (error: any) {
      console.error('Error fetching course:', error);
      toast.error('Failed to load course details');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (platform?: 'whatsapp') => {
    const url = window.location.href;
    
    if (platform === 'whatsapp') {
      const message = `Check out this course: ${course?.name} - ₹${course?.price}\n${url}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
      } catch (err) {
        toast.error('Failed to copy link');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/courses')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {course.thumbnail_url && (
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6 group">
                    <motion.img
                      src={course.thumbnail_url}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {course.is_featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent">
                        Featured Course
                      </Badge>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-4xl font-bold text-foreground mb-2">{course.name}</h1>
                    <p className="text-muted-foreground text-lg">{course.description}</p>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {course.difficulty}
                    </Badge>
                  </motion.div>

                  <Separator className="my-6" />

                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card className="hover-glow">
                      <CardContent className="pt-6 text-center">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-bold">{course.duration}</p>
                      </CardContent>
                    </Card>

                    <Card className="hover-glow">
                      <CardContent className="pt-6 text-center">
                        <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Level</p>
                        <p className="font-bold">{course.difficulty}</p>
                      </CardContent>
                    </Card>

                    <Card className="hover-glow">
                      <CardContent className="pt-6 text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Instructor</p>
                        <p className="font-bold text-sm">{course.instructor}</p>
                      </CardContent>
                    </Card>

                    <Card className="hover-glow">
                      <CardContent className="pt-6 text-center">
                        <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="font-bold">4.8/5</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <Separator className="my-6" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        This comprehensive course covers all aspects of {course.name.toLowerCase()}. 
                        You'll gain hands-on experience with industry-standard tools and techniques.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl font-bold mb-3">Technologies Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.tech_tags.map((tag, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          <Badge variant="secondary" className="text-sm px-3 py-1">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="sticky top-24 shadow-lg border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <p className="text-sm text-muted-foreground mb-2">Course Price</p>
                      <p className="text-4xl font-bold text-gradient mb-1">
                        ₹{course.price.toLocaleString()}
                      </p>
                    </motion.div>
                  </div>

                  <Separator />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="w-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Book This Course
                    </Button>
                  </motion.div>

                  <Separator />

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-center text-muted-foreground">Share this course</p>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => handleShare()}
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Copy Link
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A] border-0"
                          onClick={() => handleShare('whatsapp')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        {/* Reviews Section */}
        {course && (
          <div className="mt-12 container mx-auto max-w-6xl px-4">
            <ReviewsSection itemId={course.id} itemType="course" />
          </div>
        )}
      </div>

      <Footer />

      {course && (
        <CourseBookingModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          course={course}
        />
      )}
    </div>
  );
}