import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ServiceHeaderProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const ServiceHeader = ({ title, description, Icon }: ServiceHeaderProps) => {
  return (
    <div className="neobrutalism bg-white p-8 mb-8">
      <div className="w-16 h-16 bg-[#FF90E8] border-2 border-black flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-800 mb-8">{description}</p>
      
      <Link to={`/book-call?service=${encodeURIComponent(title)}`}>
        <Button className="neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          Get Started
        </Button>
      </Link>
    </div>
  );
};