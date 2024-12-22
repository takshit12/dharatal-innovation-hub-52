import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Data Extraction",
    description: "Automate the collection of structured data from any source.",
    Icon: Database,
    slug: "data-extraction"
  },
  {
    title: "Lead Generation",
    description: "AI-powered tools for smarter, faster prospecting.",
    Icon: Users,
    slug: "lead-generation"
  },
  {
    title: "AI Agents",
    description: "AI systems tailored to your business processes.",
    Icon: Brain,
    slug: "ai-agents"
  },
  {
    title: "Voice Agents",
    description: "Conversational AI for seamless customer interactions.",
    Icon: Mic,
    slug: "voice-agents"
  },
  {
    title: "RAGs",
    description: "Combine large language models with up-to-date knowledge.",
    Icon: Code,
    slug: "rags"
  },
  {
    title: "Chatbots",
    description: "Custom-built chatbots for engagement and support.",
    Icon: MessageSquare,
    slug: "chatbots"
  },
  {
    title: "Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
    slug: "web-scraping"
  },
  {
    title: "LLM Fine-tuning",
    description: "Specialized models for your unique use cases.",
    Icon: Cog,
    slug: "llm-fine-tuning"
  },
];

const steps = [
  {
    title: "Discuss Your Needs",
    description: "We start by understanding your business requirements and challenges.",
  },
  {
    title: "Design a Solution",
    description: "Our experts design a tailored AI solution for your specific needs.",
  },
  {
    title: "Develop & Test",
    description: "We build and rigorously test your solution to ensure quality.",
  },
  {
    title: "Deploy & Support",
    description: "Launch your solution with ongoing support and maintenance.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in tracking-tight">
            Empowering Your Business with AI-Driven Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            From Data Extraction to LLM Fine-tuning, We Transform Ideas into Intelligent Systems
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button 
              size="lg" 
              className="neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="neobrutalism hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="neobrutalism bg-white p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="w-12 h-12 rounded-none bg-[#FF90E8] border-2 border-black flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;