import { useState } from "react";
import ErrorBoundary from "./assets/components/ErrorBoundary";
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
import EnrollForm from "./assets/components/EnrollForm";

function App() {
  const [showEnroll, setShowEnroll] = useState(false);

  const openEnroll = () => setShowEnroll(true);
  const closeEnroll = () => setShowEnroll(false);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <ErrorBoundary componentName="Navigation">
        <Navbar onEnroll={openEnroll} />
      </ErrorBoundary>
      <main id="main-content">
        <ErrorBoundary componentName="Hero section">
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary componentName="About section">
          <About />
        </ErrorBoundary>
        <ErrorBoundary componentName="Coaches section">
          <Coaches />
        </ErrorBoundary>
        <ErrorBoundary componentName="Programs section">
          <Programs />
        </ErrorBoundary>
        <ErrorBoundary componentName="Gallery section">
          <Gallery />
        </ErrorBoundary>
        <ErrorBoundary componentName="Why Choose Us section">
          <WhyChooseUs />
        </ErrorBoundary>
        <ErrorBoundary componentName="Testimonials section">
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary componentName="Contact section">
          <Contact />
        </ErrorBoundary>
      </main>
      {showEnroll && (
        <ErrorBoundary componentName="Enrollment form">
          <EnrollForm onClose={closeEnroll} />
        </ErrorBoundary>
      )}
      <ErrorBoundary componentName="Footer">
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;