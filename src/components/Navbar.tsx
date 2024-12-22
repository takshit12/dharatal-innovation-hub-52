import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine button color based on current route
  const getButtonColor = () => {
    if (location.pathname === '/') return 'bg-[#ff6b00]';
    if (location.pathname.startsWith('/services')) return 'bg-[#0000FF]';
    return 'bg-[#FF90E8]';
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#ff6b00] tracking-tight">
            Dharatal AI
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#ff6b00] hover:text-[#ff6b00]/80 transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="text-[#ff6b00] hover:text-[#ff6b00]/80 transition-colors font-medium">
              Services
            </Link>
            <Link to="/team" className="text-[#ff6b00] hover:text-[#ff6b00]/80 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-[#ff6b00] hover:text-[#ff6b00]/80 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/book-call">
              <Button 
                variant="default" 
                className={`neobrutalism ${getButtonColor()} hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
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