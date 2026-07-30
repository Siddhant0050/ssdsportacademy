import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Programs from "./assets/components/Programs";
import Coaches from "./assets/components/Coaches";
import Gallery from "./assets/components/Gallery";
import WhyChooseUs from "./assets/components/WhyChooseUs";
import Testimonials from "./assets/components/Testimonials";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Coaches />
        <Programs />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
