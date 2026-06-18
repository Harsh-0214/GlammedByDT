import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloralBackground from "@/components/FloralBackground";
import SparkleEffect from "@/components/SparkleEffect";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#080608" }}>
      <FloralBackground />
      <SparkleEffect />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
