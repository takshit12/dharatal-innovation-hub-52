import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";

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
    title: "Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
    slug: "web-scraping"
  },
  {
    title: "LLM Fine-tuning",
    description: "Optimize language models for your specific use case.",
    Icon: Cog,
    slug: "llm-fine-tuning"
  }
];

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-highlight-blue">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverviewPage;