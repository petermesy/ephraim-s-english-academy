import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ephraim Messay | Professional English Tutor</title>
        <meta 
          name="description" 
          content="Professional English tutoring for children and students. Build speaking confidence, writing skills, and reading comprehension with Ephraim Messay at British International School." 
        />
        <meta name="keywords" content="English tutor, English tutoring, language learning, speaking confidence, writing skills, grammar, vocabulary, academic support" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Qualifications />
        <Services />
        <Availability />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
