import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Dharatal AI</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </a>
            <Button variant="default">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};