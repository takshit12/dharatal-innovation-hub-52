import { Navbar } from "@/components/Navbar";
import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Data Extraction",
    description: "Automate the collection of structured data from any source with our advanced AI-powered extraction tools.",
    Icon: Database,
    slug: "data-extraction",
    features: ["Multiple source support", "Real-time processing", "Custom extraction rules"],
  },
  {
    title: "Lead Generation",
    description: "AI-powered tools for smarter, faster prospecting that help you find and connect with qualified leads.",
    Icon: Users,
    slug: "lead-generation",
    features: ["AI-driven scoring", "Automated research", "Email verification"],
  },
  {
    title: "AI Agents",
    description: "Custom AI systems tailored to your business processes for maximum efficiency and automation.",
    Icon: Brain,
    slug: "ai-agents",
    features: ["Process automation", "Custom workflows", "24/7 operation"],
  },
  {
    title: "Voice Agents",
    description: "Advanced conversational AI for seamless customer interactions and support.",
    Icon: Mic,
    slug: "voice-agents",
    features: ["Natural language", "Multi-language", "Custom voices"],
  },
  {
    title: "RAGs",
    description: "Combine large language models with your business knowledge for enhanced AI capabilities.",
    Icon: Code,
    slug: "rags",
    features: ["Knowledge integration", "Real-time updates", "Custom training"],
  },
  {
    title: "Chatbots",
    description: "Intelligent chatbots that understand context and provide meaningful responses.",
    Icon: MessageSquare,
    slug: "chatbots",
    features: ["24/7 support", "Multi-channel", "Custom flows"],
  },
  {
    title: "Web Scraping",
    description: "Efficient and reliable web data gathering solutions for your business needs.",
    Icon: Bot,
    slug: "web-scraping",
    features: ["Automated collection", "Custom rules", "Data cleaning"],
  },
  {
    title: "LLM Fine-tuning",
    description: "Customize large language models for your specific use cases and requirements.",
    Icon: Cog,
    slug: "llm-fine-tuning",
    features: ["Custom training", "Performance optimization", "Ongoing updates"],
  },
];

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 tracking-tight">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                to={`/services/${service.slug}`}
                className="block"
              >
                <div className="neobrutalism bg-white p-8 h-full hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  <div className="w-12 h-12 rounded-none bg-[#FF90E8] border-2 border-black flex items-center justify-center mb-4">
                    <service.Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <span className="w-2 h-2 bg-[#FF90E8] border border-black mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverviewPage;