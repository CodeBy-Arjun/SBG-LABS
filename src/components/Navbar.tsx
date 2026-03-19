import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Home",
    path: "/home"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Book Slot",
    path: "/booking"
  }, {
    name: "Track Order",
    path: "/track-order"
  }];
  const adminNavItem = {
    name: "Admin",
    path: "/admin/login"
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">SBG LABS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="text-foreground hover:text-primary transition-colors font-medium">
                {link.name}
              </Link>)}
            <Link to={adminNavItem.path} className="text-foreground hover:text-primary transition-colors font-medium">
              {adminNavItem.name}
            </Link>
            <ThemeToggle />
            <Link to="/projects">
              <Button className="gradient-primary hover-glow">Order Project</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
                {link.name}
              </Link>)}
            <Link to={adminNavItem.path} onClick={() => setIsOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
              {adminNavItem.name}
            </Link>
            <Link to="/projects" className="block" onClick={() => setIsOpen(false)}>
              <Button className="w-full gradient-primary">Order Project</Button>
            </Link>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;