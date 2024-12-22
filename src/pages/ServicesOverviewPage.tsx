import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Bot, MessageSquare, Workflow, Cog, Mic } from "lucide-react";

const services = [
  {
    title: "AI WebApps",
    description: "Custom AI-powered web applications tailored to your business needs.",
    Icon: Brain,
    slug: "ai-webapps",
    number: "01"
  },
  {
    title: "AI Agents",
    description: "Intelligent AI agents that automate complex business processes.",
    Icon: Bot,
    slug: "ai-agents",
    number: "02"
  },
  {
    title: "AI Chatbots",
    description: "Advanced conversational AI for customer support and engagement.",
    Icon: MessageSquare,
    slug: "ai-chatbots",
    number: "03"
  },
  {
    title: "AI Automations",
    description: "Streamline workflows with intelligent automation solutions.",
    Icon: Workflow,
    slug: "ai-automations",
    number: "04"
  },
  {
    title: "LLM Fine-tuning",
    description: "Optimize language models for your specific use case.",
    Icon: Cog,
    slug: "llm-fine-tuning",
    number: "05"
  },
  {
    title: "Voice Agents",
    description: "Natural voice interactions powered by advanced AI technology.",
    Icon: Mic,
    slug: "voice-agents",
    number: "06"
  }
];

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-[#D3E4FD]">
      <Navbar />
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-4xl font-bold mb-12 tracking-tight font-mono text-black">
          Our <span className="text-[#0EA5E9]">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverviewPage;