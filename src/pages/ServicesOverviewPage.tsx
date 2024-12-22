import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Brain, Bot, MessageSquare, Cog, Mic, Workflow } from "lucide-react";
import { ChatInterface } from "@/components/ChatInterface";

const services = [
  {
    title: "01 AI WebApps",
    description: "Custom AI-powered web applications tailored to your business needs.",
    Icon: Brain,
    slug: "ai-webapps"
  },
  {
    title: "02 AI Agents",
    description: "Intelligent AI agents that automate complex business processes.",
    Icon: Bot,
    slug: "ai-agents"
  },
  {
    title: "03 AI Chatbots",
    description: "Advanced conversational AI for customer support and engagement.",
    Icon: MessageSquare,
    slug: "ai-chatbots"
  },
  {
    title: "04 AI Automations",
    description: "Streamline workflows with intelligent automation solutions.",
    Icon: Workflow,
    slug: "ai-automations"
  },
  {
    title: "05 LLM Fine-tuning",
    description: "Optimize language models for your specific use case.",
    Icon: Cog,
    slug: "llm-fine-tuning"
  },
  {
    title: "06 Voice Agents",
    description: "Natural voice interactions powered by advanced AI technology.",
    Icon: Mic,
    slug: "voice-agents"
  }
];

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-[#D3E4FD]">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight font-mono">
            Our <span className="text-[#0000FF]">Services</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 tracking-tight font-mono">
              Talk to <span className="text-[#0000FF]">Dharatal AI</span>
            </h2>
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverviewPage;