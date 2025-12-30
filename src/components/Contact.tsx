import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-20 bg-hero-gradient">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className={`inline-block font-display text-sm font-semibold text-accent uppercase tracking-wider mb-3 md:mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Get Started
          </span>
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Ready to Improve Your English?
          </h2>
          <p className={`text-primary-foreground/80 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto px-2 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Contact me today to schedule a consultation and discuss how I can help your child succeed.
          </p>
          
          {/* Contact Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <a 
              href="tel:+1234567890" 
              className="group flex items-center gap-3 md:gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-4 md:p-6 transition-smooth"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/60 text-xs md:text-sm mb-0.5 md:mb-1">Call or Text</p>
                <p className="font-display text-base md:text-lg font-semibold text-primary-foreground">
                  [Phone Number]
                </p>
              </div>
            </a>
            
            <a 
              href="mailto:contact@example.com" 
              className="group flex items-center gap-3 md:gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-4 md:p-6 transition-smooth"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/60 text-xs md:text-sm mb-0.5 md:mb-1">Email</p>
                <p className="font-display text-base md:text-lg font-semibold text-primary-foreground">
                  [Email Address]
                </p>
              </div>
            </a>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="gap-3 w-full sm:w-auto">
              <Send className="w-5 h-5" />
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
