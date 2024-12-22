import { useParams } from "react-router-dom";
import { Brain, Bot, MessageSquare, Workflow, Cog, Mic } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServiceHeader } from "@/components/ServiceHeader";
import { ServiceFeatureGrid } from "@/components/ServiceFeatureGrid";
import { services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#D3E4FD]">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <ServiceHeader {...service} />
          <ServiceFeatureGrid {...service} />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;