import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  slug: string;
}

export const ServiceCard = ({ title, description, Icon, slug }: ServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`} className="block">
      <div className="group bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
        <div className="p-6">
          <div className="w-12 h-12 bg-[#0000FF] border-2 border-black flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-mono">{title}</h3>
          <p className="text-black font-sans">{description}</p>
        </div>
      </div>
    </Link>
  );
};