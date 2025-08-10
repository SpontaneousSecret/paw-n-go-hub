import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Smartphone, Shield, Clock } from "lucide-react";

const LocationTracker = () => {
  return (
    <Card className="bg-gradient-hero border-primary shadow-glow">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
            <MapPin size={40} className="text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">
            Pet Location Tracking
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Never lose sight of your furry family members
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
              <Smartphone size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Real-time GPS</h3>
            <p className="text-sm text-primary-foreground/70">Live location updates every 30 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
              <Shield size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Safe Zones</h3>
            <p className="text-sm text-primary-foreground/70">Get alerts when pets leave safe areas</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
              <Clock size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">History</h3>
            <p className="text-sm text-primary-foreground/70">Track activity patterns and routes</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Tracking
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-primary-foreground hover:bg-white/10">
            View Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationTracker;