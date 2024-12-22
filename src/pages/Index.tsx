import { Brain, Database, Users, Bot, Mic, Code, MessageSquare, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Data Extraction",
    description: "Automate the collection of structured data from any source.",
    Icon: Database,
  },
  {
    title: "Lead Generation",
    description: "AI-powered tools for smarter, faster prospecting.",
    Icon: Users,
  },
  {
    title: "AI Agents",
    description: "AI systems tailored to your business processes.",
    Icon: Brain,
  },
  {
    title: "Voice Agents",
    description: "Conversational AI for seamless customer interactions.",
    Icon: Mic,
  },
  {
    title: "RAGs",
    description: "Combine large language models with up-to-date knowledge.",
    Icon: Code,
  },
  {
    title: "Chatbots",
    description: "Custom-built chatbots for engagement and support.",
    Icon: MessageSquare,
  },
  {
    title: "Web Scraping",
    description: "Efficient, reliable web data gathering.",
    Icon: Bot,
  },
  {
    title: "LLM Fine-tuning",
    description: "Specialized models for your unique use cases.",
    Icon: Cog,
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Empowering Your Business with AI-Driven Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            From Data Extraction to LLM Fine-tuning, We Transform Ideas into Intelligent Systems
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
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
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;