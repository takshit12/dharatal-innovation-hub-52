import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: string[];
  benefits: string[];
}

export const ServiceDetail = ({ title, description, Icon, features, benefits }: ServiceDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="neobrutalism mb-8 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="neobrutalism bg-white p-8 mb-8">
          <div className="w-16 h-16 rounded-none bg-[#FF90E8] border-2 border-black flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-800 mb-8">{description}</p>
          
          <Button className="neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="neobrutalism bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="neobrutalism bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#FF90E8] border border-black" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};