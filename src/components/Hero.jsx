// import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Truck } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Journeying{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Beyond
              </span>{" "}
              Tourism
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Revolutionizing travel experiences while driving efficient logistics solutions across India. 
              Where unforgettable journeys meet seamless transportation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              {/* <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                Logistics Solutions <Truck className="ml-2 h-5 w-5" />
              </Button> */}
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-gray-200">Direct Jobs Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-2">22%</div>
                <div className="text-sm text-gray-200">Faster Deliveries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;