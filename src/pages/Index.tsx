import { Brain, Database, Users, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const featuredServices = [
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
    title: "Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
    slug: "web-scraping"
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
            <Link to="/book-call">
              <Button 
                size="lg" 
                className="neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Book a Call
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="neobrutalism hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Featured Services</h2>
            <Link to="/services">
              <Button 
                variant="outline"
                className="neobrutalism hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                View All Services
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;