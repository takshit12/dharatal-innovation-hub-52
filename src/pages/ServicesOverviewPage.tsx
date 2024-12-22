import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Database, Users, Bot, Cog } from "lucide-react";

const services = [
  {
    title: "01 Data Extraction",
    description: "Automate the collection of structured data from any source.",
    Icon: Database,
    slug: "data-extraction"
  },
  {
    title: "02 Lead Generation",
    description: "AI-powered tools for smarter, faster prospecting.",
    Icon: Users,
    slug: "lead-generation"
  },
  {
    title: "03 AI Agents",
    description: "AI systems tailored to your business processes.",
    Icon: Brain,
    slug: "ai-agents"
  },
  {
    title: "04 Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
    slug: "web-scraping"
  },
  {
    title: "05 LLM Fine-tuning",
    description: "Optimize language models for your specific use case.",
    Icon: Cog,
    slug: "llm-fine-tuning"
  }
];

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight font-mono">
            Our <span className="text-[#0000FF]">Services</span>
          </h1>
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