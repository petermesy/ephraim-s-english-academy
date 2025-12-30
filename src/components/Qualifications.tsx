import { GraduationCap, Award, BookOpen } from "lucide-react";

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
  return (
    <section className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic Qualifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A strong academic foundation combined with real-world experience ensures quality instruction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {qualifications.map((qual, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-xl p-8 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1"
            >
              {/* Gold accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-smooth">
                  <qual.icon className="w-8 h-8 text-primary group-hover:text-accent transition-smooth" />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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
