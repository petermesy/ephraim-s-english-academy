import { Clock, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Availability = () => {
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {/* Location Card */}
            <div className={`bg-background rounded-xl p-6 md:p-8 shadow-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                    Tutoring Location
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Where lessons take place
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-accent pl-3 md:pl-4">
                <p className="font-display text-base md:text-lg font-semibold text-foreground">
                  British International School
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  (BIS)
                </p>
              </div>
            </div>
            
            {/* Availability Card */}
            <div className={`bg-background rounded-xl p-6 md:p-8 shadow-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                    Availability
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Daily tutoring hours
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-3 md:pl-4">
                <p className="font-display text-base md:text-lg font-semibold text-foreground">
                  4:00 PM – 12:00 AM
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Available every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
