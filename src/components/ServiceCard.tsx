import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  slug: string;
  number: string;
}

export const ServiceCard = ({ title, description, Icon, slug, number }: ServiceCardProps) => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const accentColor = isServicesPage ? '#0EA5E9' : '#FF90E8';

  return (
    <div className="group bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`w-12 h-12 border-2 border-black flex items-center justify-center`} style={{ backgroundColor: accentColor }}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span style={{ color: accentColor }} className="font-mono">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-mono text-black">{title}</h3>
        <p className="text-black font-sans mb-4">{description}</p>
        <Link to={`/services/${slug}`}>
          <Button 
            className="w-full neobrutalism hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: accentColor }}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};