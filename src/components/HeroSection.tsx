import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-black text-5xl md:text-6xl font-bold mb-6 font-mono">
        Empowering Your Business with{" "}
        <span className="text-[#ff6b00]">AI-Driven Solutions</span>
      </h1>
      <p className="text-xl mb-8">
        From Data Extraction to LLM Fine-tuning, We Transform Ideas into
        Intelligent Systems
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/book-call">
          <Button className="neobrutalism bg-[#ff6b00] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Book a Call
          </Button>
        </Link>
        <Link to="/services">
          <Button variant="outline" className="neobrutalism hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Explore Services
          </Button>
        </Link>
      </div>
    </div>
  );
};