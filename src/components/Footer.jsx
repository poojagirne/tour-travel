import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Darunga Tours & Travels LLP
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Revolutionizing travel experiences while driving efficient logistics solutions across India.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#tourism" className="hover:text-primary transition-colors">Cultural Heritage Tours</a></li>
              <li><a href="#tourism" className="hover:text-primary transition-colors">Nature Expeditions</a></li>
              <li><a href="#tourism" className="hover:text-primary transition-colors">Festival Tours</a></li>
              <li><a href="#logistics" className="hover:text-primary transition-colors">Goods Transportation</a></li>
              <li><a href="#logistics" className="hover:text-primary transition-colors">Logistics Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#services" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Our Impact</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Partnership</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Investors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-secondary-foreground/80">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@darungatours.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Darunga Tours & Travels LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;