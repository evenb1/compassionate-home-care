import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Qualifications from "@/components/Qualifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F4F4F0] min-h-screen font-sans selection:bg-blue-900 selection:text-white antialiased">
      {/* Fixed global navigation */}
      <Navbar />
      
      {/* Main structured content flow */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Qualifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Global footer layout */}
      <Footer />
    </div>
  );
}