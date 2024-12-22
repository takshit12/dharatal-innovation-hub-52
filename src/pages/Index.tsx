import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#E5DEFF]">
      <Navbar />
      <div className="container mx-auto px-6">
        <HeroSection />
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 tracking-tight font-mono">
            Talk to <span className="text-[#0000FF]">Dharatal AI</span>
          </h2>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default Index;