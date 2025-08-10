import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "healthcare" | "transport" | "cafes" | "emergency" | "tracking";
}

const ServiceCard = ({ icon: Icon, title, description, features, buttonText, variant }: ServiceCardProps) => {
  const getCardStyles = () => {
    switch (variant) {
      case "healthcare":
        return "bg-gradient-secondary border-secondary hover:shadow-soft";
      case "transport":
        return "bg-gradient-primary border-primary hover:shadow-warm";
      case "cafes":
        return "bg-gradient-accent border-accent hover:shadow-soft";
      case "emergency":
        return "bg-gradient-to-br from-destructive/10 to-destructive/20 border-destructive/30 hover:shadow-soft";
      case "tracking":
        return "bg-gradient-hero border-primary hover:shadow-glow";
      default:
        return "bg-card hover:shadow-soft";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "healthcare":
        return "text-secondary-foreground";
      case "transport":
        return "text-primary-foreground";
      case "cafes":
        return "text-accent-foreground";
      case "emergency":
        return "text-destructive";
      case "tracking":
        return "text-primary-foreground";
      default:
        return "text-foreground";
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "healthcare":
        return "secondary";
      case "transport":
        return "default";
      case "cafes":
        return "default";
      case "emergency":
        return "destructive";
      case "tracking":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <Card className={`transition-all duration-300 hover:scale-105 ${getCardStyles()}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-full bg-white/20 ${getIconStyles()}`}>
            <Icon size={32} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button variant={getButtonVariant()} className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;