import { Clock, MapPin } from "lucide-react";

const Availability = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-background rounded-xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Tutoring Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Where lessons take place
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <p className="font-display text-lg font-semibold text-foreground">
                  British International School
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  (BIS)
                </p>
              </div>
            </div>
            
            {/* Availability Card */}
            <div className="bg-background rounded-xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Availability
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Daily tutoring hours
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <p className="font-display text-lg font-semibold text-foreground">
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
