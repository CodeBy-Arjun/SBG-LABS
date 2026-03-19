import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Award, Clock, TrendingUp, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CourseBookingModal from "@/components/CourseBookingModal";
import {
  coursesData,
  Course,
  getCategories,
  getFeaturedCourses,
  getAICourses,
  get4_0Courses,
} from "@/data/coursesData";

const Courses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const categories = getCategories();
  const featuredCourses = getFeaturedCourses();
  const aiCourses = getAICourses();
  const tech4_0Courses = get4_0Courses();

  const filterCourses = () => {
    let filtered = coursesData;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.tech_tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((course) => course.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter((course) => course.difficulty === selectedDifficulty);
    }

    // Price filter
    if (priceRange !== "all") {
      if (priceRange === "under1000") {
        filtered = filtered.filter((course) => course.price < 1000);
      } else if (priceRange === "1000-2000") {
        filtered = filtered.filter((course) => course.price >= 1000 && course.price <= 2000);
      } else if (priceRange === "above2000") {
        filtered = filtered.filter((course) => course.price > 2000);
      }
    }

    return filtered;
  };

  const filteredCourses = filterCourses();

  const handleBookCourse = (course: Course) => {
    setSelectedCourse(course);
    setBookingModalOpen(true);
  };

  const CourseCard = ({ course }: { course: Course }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      {course.is_featured && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent">
          Featured
        </Badge>
      )}
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {course.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {course.tech_tags.slice(0, 3).map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{course.difficulty}</span>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-2xl font-bold text-primary">₹{course.price}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button
            className="flex-1 gradient-primary text-white"
            onClick={() => handleBookCourse(course)}
          >
            <Award className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Learn 50+ Programming Languages <br />& 30+ Professional Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master AI, Industry 4.0, and hands-on project development with live practicals, assignments, and real-life project integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-primary" />
                <span>Certificate on Completion</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5 text-accent" />
                <span>Live Practicals</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Affordable Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-xl border border-primary/30"
            >
              <Sparkles className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">{aiCourses.length}+ AI-powered courses</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-xl border border-accent/30"
            >
              <TrendingUp className="w-10 h-10 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-2">Industry 4.0</h3>
              <p className="text-muted-foreground text-sm">{tech4_0Courses.length}+ 4.0 technology courses</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary/20 to-accent/10 p-6 rounded-xl border border-primary/20"
            >
              <Award className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Certified Learning</h3>
              <p className="text-muted-foreground text-sm">Industry-recognized certificates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-0 z-40 border-b border-border/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, technologies, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under1000">Under ₹1,000</SelectItem>
                <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
                <SelectItem value="above2000">Above ₹2,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredCourses.length} courses
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      <CourseBookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        course={selectedCourse}
      />

      <Footer />
    </div>
  );
};

export default Courses;
