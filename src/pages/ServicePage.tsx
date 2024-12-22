import { useParams } from "react-router-dom";
import { ServiceDetail } from "@/components/ServiceDetail";
import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const services = {
  "data-extraction": {
    title: "Data Extraction",
    description: "Transform unstructured data into actionable insights with our advanced AI-powered extraction tools.",
    Icon: Database,
    features: [
      "Automated data extraction from any source",
      "Support for PDFs, images, and web content",
      "Real-time processing capabilities",
      "Custom extraction rules and templates",
      "Data validation and cleaning"
    ],
    benefits: [
      "Reduce manual data entry costs by 80%",
      "Achieve 99% accuracy in data extraction",
      "Process thousands of documents in minutes",
      "Seamless integration with existing systems",
      "Scale operations without adding headcount"
    ]
  },
  "lead-generation": {
    title: "Lead Generation",
    description: "Generate high-quality leads at scale with AI-powered prospecting tools.",
    Icon: Users,
    features: [
      "AI-driven lead scoring and qualification",
      "Multi-channel lead capture",
      "Automated email verification",
      "Social media integration",
      "Custom targeting criteria"
    ],
    benefits: [
      "Generate 3x more qualified leads",
      "Reduce cost per lead by 60%",
      "Automate 90% of prospecting tasks",
      "Improve conversion rates by 40%",
      "Scale your sales pipeline efficiently"
    ]
  },
  "ai-agents": {
    title: "AI Agents",
    description: "Deploy intelligent AI agents that automate complex business processes.",
    Icon: Brain,
    features: [
      "Custom AI agent development",
      "Natural language processing",
      "Task automation capabilities",
      "Integration with existing tools",
      "24/7 operation capability"
    ],
    benefits: [
      "Automate repetitive tasks",
      "Reduce operational costs",
      "Improve customer response times",
      "Scale operations efficiently",
      "Free up human resources"
    ]
  },
  "web-scraping": {
    title: "Web Scraping",
    description: "Extract valuable data from websites with our reliable scraping solutions.",
    Icon: Bot,
    features: [
      "Automated data collection",
      "Real-time scraping capabilities",
      "Custom scraping rules",
      "Anti-detection mechanisms",
      "Data cleaning and formatting"
    ],
    benefits: [
      "Access real-time market data",
      "Monitor competitor pricing",
      "Gather customer insights",
      "Track market trends",
      "Make data-driven decisions"
    ]
  },
  "llm-fine-tuning": {
    title: "LLM Fine-tuning",
    description: "Optimize language models for your specific use case with efficient fine-tuning.",
    Icon: Cog,
    features: [
      "Custom model training",
      "Efficient fine-tuning process",
      "Self-hosting options",
      "Cost optimization",
      "Performance monitoring"
    ],
    benefits: [
      "Reduce inference costs by 70%",
      "Improve model accuracy",
      "Deploy on your infrastructure",
      "Scale efficiently",
      "Maintain data privacy"
    ]
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-highlight-yellow">
      <Navbar />
      <ServiceDetail {...service} />
    </div>
  );
};

export default ServicePage;