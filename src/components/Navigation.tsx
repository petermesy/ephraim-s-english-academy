import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-smooth ${
              isScrolled ? "bg-primary" : "bg-accent/20"
            }`}>
              <GraduationCap className={`w-5 h-5 transition-smooth ${
                isScrolled ? "text-primary-foreground" : "text-accent"
              }`} />
            </div>
            <span className={`font-display font-bold hidden sm:block transition-smooth ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Ephraim Messay
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("services")}
              className={`font-display text-sm font-medium transition-smooth hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`font-display text-sm font-medium transition-smooth hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contact
            </button>
            <Button 
              variant={isScrolled ? "gold" : "hero"} 
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-smooth ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection("services")}
              className="font-display text-sm font-medium text-foreground py-2 text-left hover:text-accent transition-smooth"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="font-display text-sm font-medium text-foreground py-2 text-left hover:text-accent transition-smooth"
            >
              Contact
            </button>
            <Button 
              variant="gold" 
              size="default"
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
