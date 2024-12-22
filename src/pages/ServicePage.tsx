import { useParams } from "react-router-dom";
import { ServiceDetail } from "@/components/ServiceDetail";
import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const services = {
  "data-extraction": {
    title: "Data Extraction",
    description: "Automate the collection of structured data from any source with our advanced AI-powered extraction tools.",
    Icon: Database,
    features: [
      "Automated data extraction from various sources",
      "Support for multiple file formats",
      "Real-time processing capabilities",
      "Custom extraction rules",
      "Data validation and cleaning"
    ],
    benefits: [
      "Save time and resources on manual data entry",
      "Reduce errors and improve accuracy",
      "Scale your data processing operations",
      "Faster decision-making with quick data access",
      "Integrate with existing systems seamlessly"
    ]
  },
  "lead-generation": {
    title: "Lead Generation",
    description: "AI-powered tools for smarter, faster prospecting that help you find and connect with qualified leads.",
    Icon: Users,
    features: [
      "AI-driven lead scoring",
      "Automated prospect research",
      "Email verification",
      "Social media integration",
      "Custom targeting criteria"
    ],
    benefits: [
      "Higher quality leads",
      "Increased conversion rates",
      "Reduced prospecting time",
      "Better ROI on marketing efforts",
      "Scalable lead generation process"
    ]
  },
  "ai-agents": {
    title: "AI Agents",
    description: "AI systems tailored to your business processes.",
    Icon: Brain,
    features: [
      "Customizable AI solutions",
      "Integration with existing workflows",
      "Real-time analytics and reporting",
      "Scalable architecture",
      "Ongoing support and updates"
    ],
    benefits: [
      "Enhance operational efficiency",
      "Reduce manual workload",
      "Gain insights from data",
      "Adapt to changing business needs",
      "Stay ahead of the competition"
    ]
  },
  "voice-agents": {
    title: "Voice Agents",
    description: "Conversational AI for seamless customer interactions.",
    Icon: Mic,
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Customizable voice profiles",
      "Integration with CRM systems",
      "Analytics and performance tracking"
    ],
    benefits: [
      "Improve customer satisfaction",
      "Reduce response times",
      "Enhance brand engagement",
      "Gather valuable customer insights",
      "Scale customer support operations"
    ]
  },
  "rags": {
    title: "RAGs",
    description: "Combine large language models with up-to-date knowledge.",
    Icon: Code,
    features: [
      "Integration with various data sources",
      "Real-time knowledge updates",
      "Customizable model training",
      "User-friendly interface",
      "Robust security measures"
    ],
    benefits: [
      "Stay informed with the latest data",
      "Enhance decision-making capabilities",
      "Improve content generation",
      "Adapt to industry changes quickly",
      "Leverage AI for competitive advantage"
    ]
  },
  "chatbots": {
    title: "Chatbots",
    description: "Custom-built chatbots for engagement and support.",
    Icon: MessageSquare,
    features: [
      "24/7 customer support",
      "Multi-language support",
      "Integration with messaging platforms",
      "Customizable conversation flows",
      "Analytics and reporting"
    ],
    benefits: [
      "Reduce operational costs",
      "Enhance customer engagement",
      "Gather customer feedback",
      "Improve response accuracy",
      "Scale support without additional resources"
    ]
  },
  "web-scraping": {
    title: "Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
    features: [
      "Automated data collection",
      "Support for various websites",
      "Data cleaning and formatting",
      "Real-time data updates",
      "Custom scraping solutions"
    ],
    benefits: [
      "Access to valuable market insights",
      "Save time on manual data collection",
      "Enhance data-driven decision making",
      "Stay ahead of competitors",
      "Integrate data into existing systems"
    ]
  },
  "llm-fine-tuning": {
    title: "LLM Fine-tuning",
    description: "Specialized models for your unique use cases.",
    Icon: Cog,
    features: [
      "Custom model training",
      "Integration with existing datasets",
      "Performance optimization",
      "User-friendly interface",
      "Ongoing support and updates"
    ],
    benefits: [
      "Tailored solutions for specific needs",
      "Improve model accuracy",
      "Adapt to changing requirements",
      "Leverage AI for unique applications",
      "Gain a competitive edge"
    ]
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Navbar />
      <ServiceDetail {...service} />
    </>
  );
};

export default ServicePage;
