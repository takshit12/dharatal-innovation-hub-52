import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
            Dharatal AI
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Services
            </Link>
            <Link to="/team" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/book-call">
              <Button 
                variant="default" 
                className="neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};