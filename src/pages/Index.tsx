import { Heart, Car, Coffee, Ambulance, MapPin, Stethoscope } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import LocationTracker from "@/components/LocationTracker";
import heroImage from "@/assets/pet-hero.jpg";

const Index = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare & Medical Records",
      description: "Complete veterinary care and digital health records",
      features: [
        "Find nearby qualified veterinarians",
        "Digital medical record storage",
        "Vaccination tracking and reminders",
        "Emergency health consultations"
      ],
      buttonText: "Find Vets Nearby",
      variant: "healthcare" as const
    },
    {
      icon: Car,
      title: "Pet-Friendly Transport",
      description: "Safe and comfortable rides for you and your pets",
      features: [
        "Pet-friendly certified drivers",
        "Special pet safety equipment",
        "Climate-controlled vehicles",
        "Real-time ride tracking"
      ],
      buttonText: "Book a Ride",
      variant: "transport" as const
    },
    {
      icon: Coffee,
      title: "Pet-Friendly Cafes",
      description: "Discover welcoming spaces for you and your pet",
      features: [
        "Location-based cafe discovery",
        "Pet amenities and facilities",
        "Customer reviews and ratings",
        "Special pet menu items"
      ],
      buttonText: "Find Cafes",
      variant: "cafes" as const
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "24/7 emergency support when every second counts",
      features: [
        "24/7 emergency veterinary hotline",
        "Rapid response ambulance service",
        "Emergency location sharing",
        "Critical care coordination"
      ],
      buttonText: "Emergency Contact",
      variant: "emergency" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Pet Express
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Your complete pet care companion - healthcare, transport, dining, and safety all in one app
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-8">
              <MapPin size={20} />
              <span>Location-based services • Real-time tracking • 24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Tracking Feature */}
      <section className="py-16 container mx-auto px-4">
        <LocationTracker />
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Pet Care Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to transportation, we've got everything your pet needs in one convenient platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Verified Vets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Pet-Friendly Drivers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Partner Cafes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-primary" size={24} />
            <span className="text-xl font-semibold">Pet Express</span>
          </div>
          <p className="text-background/70">
            Made with love for pets and their families
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;