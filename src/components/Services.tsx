import { MessageSquare, PenTool, Headphones, BookOpen, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: MessageSquare,
    title: "Speaking Confidence",
    description: "Build fluency and confidence through structured conversation practice and pronunciation coaching.",
  },
  {
    icon: PenTool,
    title: "Writing Skills",
    description: "Develop clear, effective writing abilities from essays to creative pieces with personalized feedback.",
  },
  {
    icon: Headphones,
    title: "Listening & Reading",
    description: "Strengthen comprehension skills through engaging materials tailored to your level and interests.",
  },
  {
    icon: BookOpen,
    title: "Grammar & Vocabulary",
    description: "Master the building blocks of English with systematic grammar and vocabulary development.",
  },
  {
    icon: FileText,
    title: "Academic & Exam Support",
    description: "Targeted preparation for school assignments, standardized tests, and academic success.",
  },
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className={`inline-block font-display text-sm font-semibold text-accent uppercase tracking-wider mb-3 md:mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            What I Offer
          </span>
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            English Tutoring Services
          </h2>
          <p className={`text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Structured, results-oriented English language support designed for children and students of all levels.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-card rounded-xl p-5 md:p-6 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-smooth">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-accent transition-smooth" />
                </div>
                
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
