import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowDown } from "lucide-react";

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
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-8 animate-scale-in">
            <GraduationCap className="w-10 h-10 text-accent" />
          </div>
          
          {/* Name */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ephraim Messay
          </h1>
          
          {/* Title */}
          <p className="font-display text-xl md:text-2xl text-accent font-semibold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional English Tutor
          </p>
          
          {/* Mission statement */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Helping students speak, write, and understand English fluently and confidently.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Book a Consultation
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToServices}>
              View Services
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
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
