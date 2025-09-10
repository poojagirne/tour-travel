import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Darunga Tours & Travels
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            {/* <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a> */}
            <a href="#tourism" className="text-foreground hover:text-primary transition-colors">Tourism</a>
            <a href="#logistics" className="text-foreground hover:text-primary transition-colors">Logistics</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg p-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary">Home</a>
            {/* <a href="#services" className="block text-foreground hover:text-primary">Services</a> */}
            <a href="#tourism" className="block text-foreground hover:text-primary">Tourism</a>
            <a href="#logistics" className="block text-foreground hover:text-primary">Logistics</a>
            <a href="#impact" className="block text-foreground hover:text-primary">Impact</a>
            <a href="#contact" className="block text-foreground hover:text-primary">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
