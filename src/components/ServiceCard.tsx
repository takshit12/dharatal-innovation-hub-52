import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};