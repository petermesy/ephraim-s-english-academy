import { MessageSquare, PenTool, Headphones, BookOpen, FileText } from "lucide-react";

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
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            What I Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            English Tutoring Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured, results-oriented English language support designed for children and students of all levels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-smooth">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-smooth" />
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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
