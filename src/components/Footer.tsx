import { Link } from "react-router-dom";
import { Code2, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">SBG LABS</span>
            </div>
            <p className="text-muted-foreground">
              Empowering students and clients with exceptional projects and freelancing services.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/track-order" className="block text-muted-foreground hover:text-primary transition-colors">
                Track Order
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:bunnykristipatidhanu123@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">bunnykristipatidhanu123@gmail.com</span>
              </a>
              <a
                href="https://wa.me/8247505768"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8247505768</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 SBG LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
