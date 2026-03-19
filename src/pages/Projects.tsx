import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderFormModal from "@/components/OrderFormModal";
import { FileCode, Clock, IndianRupee, Search, Filter, TrendingUp } from "lucide-react";
import { getBranches, getSpecializations, getProjects, searchProjects, filterByDifficulty, type Project } from "@/data/projectsData";

const Projects = () => {
  const navigate = useNavigate();
  const branches = getBranches();
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const specializations = getSpecializations(selectedBranch);
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<{ title: string; price: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on all criteria
  const filteredProjects = useMemo(() => {
    let filtered = selectedBranch === "ECE" || selectedBranch === "EEE" 
      ? getProjects(selectedBranch, "All") // Get all projects for ECE/EEE
      : getProjects(selectedBranch, selectedSpecialization);

    // Apply search
    if (searchQuery) {
      const searchResults = searchProjects(searchQuery);
      filtered = filtered.filter(p => searchResults.some(sr => sr.id === p.id));
    }

    // Apply difficulty filter
    if (difficultyFilter !== "all") {
      filtered = filterByDifficulty(difficultyFilter).filter(p => 
        filtered.some(fp => fp.id === p.id)
      );
    }

    // Apply price filter
    if (priceFilter !== "all") {
      if (priceFilter === "under-2000") {
        filtered = filtered.filter(p => p.price < 2000);
      } else if (priceFilter === "2000-3000") {
        filtered = filtered.filter(p => p.price >= 2000 && p.price <= 3000);
      } else if (priceFilter === "above-3000") {
        filtered = filtered.filter(p => p.price > 3000);
      }
    }

    return filtered;
  }, [selectedBranch, selectedSpecialization, searchQuery, difficultyFilter, priceFilter]);

  const handleOrder = (projectTitle: string, price: number) => {
    setSelectedProject({ title: projectTitle, price });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-gradient">Academic Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium projects for UG & PG students across all disciplines. Choose your branch and specialization.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search projects by title, tech, or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-2000">Under ₹2,000</SelectItem>
                      <SelectItem value="2000-3000">₹2,000 - ₹3,000</SelectItem>
                      <SelectItem value="above-3000">Above ₹3,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Branch Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Select Branch
            </h2>
            <div className="flex flex-wrap gap-3">
              {branches.map((branch) => (
                <Button
                  key={branch}
                  onClick={() => {
                    setSelectedBranch(branch);
                    const newSpecs = getSpecializations(branch);
                    setSelectedSpecialization(newSpecs[0]);
                  }}
                  variant={selectedBranch === branch ? "default" : "outline"}
                  className={selectedBranch === branch ? "gradient-primary" : ""}
                >
                  {branch}
                </Button>
              ))}
            </div>
          </div>

          {/* Specialization Selection - Hidden for ECE and EEE */}
          {selectedBranch !== "ECE" && selectedBranch !== "EEE" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Filter className="w-6 h-6 text-secondary" />
                Select Specialization
              </h2>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec) => (
                  <Button
                    key={spec}
                    onClick={() => setSelectedSpecialization(spec)}
                    variant={selectedSpecialization === spec ? "default" : "outline"}
                    className={selectedSpecialization === spec ? "gradient-secondary" : ""}
                  >
                    {spec}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {selectedBranch === "ECE" || selectedBranch === "EEE" 
                ? `${selectedBranch} Projects` 
                : `${selectedSpecialization} Projects`}
            </h2>
            <p className="text-muted-foreground mb-6 flex items-center gap-2">
              <Badge variant="outline" className="text-lg px-3 py-1">
                {filteredProjects.length} projects available
              </Badge>
              {searchQuery && <span className="text-sm">• Filtered by search</span>}
              {difficultyFilter !== "all" && <span className="text-sm">• {difficultyFilter} level</span>}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover-glow h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <FileCode className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-primary text-primary-foreground">
                          ₹{project.price}
                        </Badge>
                        <Badge variant="outline" className={
                          project.difficulty === "Basic" ? "border-green-500 text-green-500" :
                          project.difficulty === "Intermediate" ? "border-yellow-500 text-yellow-500" :
                          "border-red-500 text-red-500"
                        }>
                          {project.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3 flex-grow">{project.description}</p>
                    <Badge variant="secondary" className="mb-4">{project.category}</Badge>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center justify-between">
                        <span>+ Documentation</span>
                        <span className="font-semibold">₹500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>+ PPT</span>
                        <span className="font-semibold">₹250</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      variant="outline"
                      className="w-full mb-2"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleOrder(project.title, project.price)}
                      className="w-full gradient-primary hover-glow"
                    >
                      <IndianRupee className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Projects for this specialization are coming soon!
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      
      {/* Order Form Modal */}
      {selectedProject && (
        <OrderFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          projectTitle={selectedProject.title}
          projectPrice={selectedProject.price}
        />
      )}
    </div>
  );
};

export default Projects;
