import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/1photo_2025-09-25_19-23-44.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      
      <div className="container relative z-10 px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 opacity-0 animate-scale-in">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-accent shadow-elevated">
                  <img 
                    src={profileImage} 
                    alt="Ephraim Messay - Professional English Tutor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left flex-1">
              {/* Name */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 md:mb-4 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                Ephraim Messay
              </h1>
              
              {/* Title */}
              <p className="font-display text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-4 md:mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                Professional English Tutor
              </p>
              
              {/* Mission statement */}
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed opacity-0 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
                Helping students speak, write, and understand English fluently and confidently.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={scrollToContact}>
                  Book a Consultation
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" onClick={scrollToServices}>
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <button 
            onClick={scrollToServices}
            className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
            aria-label="Scroll to learn more"
          >
            <span className="text-sm mb-2 font-display">Learn More</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
