import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const qualifications = [
  {
    icon: GraduationCap,
    title: "BSc in Electrical & Computer Engineering",
    institution: "",
  },
  {
    icon: Award,
    title: "Diploma",
    institution: "Lucerne University of Applied Sciences & Arts",
  },
  {
    icon: BookOpen,
    title: "MBA (In Progress)",
    institution: "The Catholic University of America",
  },
];

const Qualifications = () => {
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
        <div className="text-center mb-10 md:mb-16">
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            Academic Qualifications
          </h2>
          <p className={`text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            A strong academic foundation combined with real-world experience ensures quality instruction.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {qualifications.map((qual, index) => (
            <div 
              key={index}
              className={`group relative bg-background rounded-xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Gold accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent/10 transition-smooth">
                  <qual.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-accent transition-smooth" />
                </div>
                
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">
                  {qual.title}
                </h3>
                
                {qual.institution && (
                  <p className="text-muted-foreground text-sm">
                    {qual.institution}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
