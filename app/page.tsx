import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import ExteriorSystem from "@/components/ExteriorSystem";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <Services />
        <ExteriorSystem />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
