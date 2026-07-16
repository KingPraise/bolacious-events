import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Stats />
      <FAQ />
      <Testimonials />
      <Contact />
      <WhatsAppFAB />
    </>
  );
}
