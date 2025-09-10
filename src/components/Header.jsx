import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Darunga Tours & Travels
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#tourism" className="text-foreground hover:text-primary transition-colors">Tourism</a>
            <a href="#logistics" className="text-foreground hover:text-primary transition-colors">Logistics</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 12345 67890</span>
            </div>
            {/* <Button variant="hero" size="sm"> */}
              Get Quote
            {/* </Button> */}
          </div>

          <Menu className="h-5 w-5" />
          {/* <Button variant="ghost" size="sm" className="md:hidden">
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;