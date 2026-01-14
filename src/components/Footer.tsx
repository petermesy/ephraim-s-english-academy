import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-10">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <span className="font-display text-lg font-bold text-primary-foreground">
              Ephraim Messay
            </span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm max-w-md">
            Professional English Tutoring for Children & Students
          </p>

          <div className="mt-4 text-primary-foreground/60 text-sm max-w-md">
            <p className="font-semibold">Bank Accounts (Ephraim Messay CBE)</p>
            <p>Commercial Bank of Ethiopia (CBE): 1000068560668</p>
            <p>Abyssinia Bank: 85032879</p>
            <p>Dashen Bank: 5068107460011</p>
          </div>
          
          <div className="w-16 h-px bg-primary-foreground/20 my-6" />
          
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} Ephraim Messay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
