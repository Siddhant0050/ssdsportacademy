
import { useCallback, useEffect, useState } from "react";

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
import PopupEnroll from "./assets/components/PopupEnroll";
import Careers from "./assets/components/Careers";
import BlogSection from "./assets/components/Blog/BlogSection";
import Achievements from "./assets/components/Achievements";

// Extract blog slug from the URL
function getBlogSlug(pathname) {
  if (!pathname.startsWith("/blog/")) return undefined;

  const slug = pathname.slice("/blog/".length);

  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

function App() {
  const [showEnroll, setShowEnroll] = useState(false);

  const [pathname, setPathname] = useState(
    window.location.pathname.replace(/\/+$/, "") || "/"
  );

  const [hash, setHash] = useState(window.location.hash);

  // Enrollment modal
  const openEnroll = () => setShowEnroll(true);
  const closeEnroll = () => setShowEnroll(false);

  // Application navigation
  const navigate = useCallback((href) => {
    const destination = new URL(href, window.location.origin);

    // Prevent navigation to external websites through this handler
    if (destination.origin !== window.location.origin) return;

    window.history.pushState({}, "", destination);

    setPathname(destination.pathname.replace(/\/+$/, "") || "/");
    setHash(destination.hash);
  }, []);

  // Handle page scrolling after navigation
  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      if (hash) {
        const sectionId = decodeURIComponent(hash.slice(1));

        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname, hash]);

  // Handle browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPathname(
        window.location.pathname.replace(/\/+$/, "") || "/"
      );

      setHash(window.location.hash);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Page conditions
  const isCareersPage = pathname === "/careers";
  const isContactPage = pathname === "/contact";

  const isBlogPage =
    pathname === "/blog" || pathname.startsWith("/blog/");

  const isAchievementsPage = pathname === "/achievements";

  const blogSlug = getBlogSlug(pathname);

  const isHomePage =
    !isCareersPage &&
    !isContactPage &&
    !isBlogPage &&
    !isAchievementsPage;

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      {/* NAVBAR */}
      <ErrorBoundary componentName="Navigation">
        <Navbar
          onEnroll={openEnroll}
          onNavigate={navigate}
          isCareersPage={isCareersPage}
          isContactPage={isContactPage}
          isBlogPage={isBlogPage}
          isAchievementsPage={isAchievementsPage}
        />
      </ErrorBoundary>

      {/* MAIN CONTENT */}
      <main id="main-content">

        {/* CAREERS PAGE */}
        {isCareersPage ? (
          <ErrorBoundary componentName="Careers page">
            <Careers />
          </ErrorBoundary>

        ) : isContactPage ? (
          /* CONTACT PAGE */
          <ErrorBoundary componentName="Contact section">
            <Contact />
          </ErrorBoundary>

        ) : isBlogPage ? (
          /* BLOG PAGE */
          <ErrorBoundary componentName="Blog page">
            <BlogSection
              slug={blogSlug}
              onNavigate={navigate}
            />
          </ErrorBoundary>

        ) : isAchievementsPage ? (
          /* FULL ACHIEVEMENTS PAGE */
          <ErrorBoundary componentName="Achievements page">
            <Achievements onNavigate={navigate} />
          </ErrorBoundary>

        ) : (
          /* HOMEPAGE */
          <>
            <ErrorBoundary componentName="Hero section">
              <Hero onEnroll={openEnroll} />
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

            {/* HOMEPAGE ACHIEVEMENTS PREVIEW */}
            <ErrorBoundary componentName="Achievements section">
              <Achievements
                preview
                onNavigate={navigate}
              />
            </ErrorBoundary>

            <ErrorBoundary componentName="Blog section">
              <BlogSection onNavigate={navigate} />
            </ErrorBoundary>

            <ErrorBoundary componentName="Contact section">
              <Contact />
            </ErrorBoundary>
          </>
        )}
      </main>

      {/* ENROLLMENT FORM */}
      {showEnroll && (
        <ErrorBoundary componentName="Enrollment form">
          <EnrollForm onClose={closeEnroll} />
        </ErrorBoundary>
      )}

      {/* HOMEPAGE POPUP */}
      {isHomePage && <PopupEnroll />}

      {/* FOOTER */}
      <ErrorBoundary componentName="Footer">
        <Footer
          isCareersPage={isCareersPage}
          isContactPage={isContactPage}
          isBlogPage={isBlogPage}
          onNavigate={navigate}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;
