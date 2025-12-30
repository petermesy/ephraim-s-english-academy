import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block font-display text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Get Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Improve Your English?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto">
            Contact me today to schedule a consultation and discuss how I can help your child succeed.
          </p>
          
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <a 
              href="tel:+1234567890" 
              className="group flex items-center gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-6 transition-smooth"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/60 text-sm mb-1">Call or Text</p>
                <p className="font-display text-lg font-semibold text-primary-foreground">
                  [Phone Number]
                </p>
              </div>
            </a>
            
            <a 
              href="mailto:contact@example.com" 
              className="group flex items-center gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-6 transition-smooth"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-smooth">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/60 text-sm mb-1">Email</p>
                <p className="font-display text-lg font-semibold text-primary-foreground">
                  [Email Address]
                </p>
              </div>
            </a>
          </div>
          
          <Button variant="hero" size="xl" className="gap-3">
            <Send className="w-5 h-5" />
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
