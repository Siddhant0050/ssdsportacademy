import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "../images/Websitelogo.png";

export default function Navbar({ onEnroll }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Coaches", href: "#coaches" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleEnroll = () => {
    setMenuOpen(false);

    if (onEnroll) {
      onEnroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-[2px] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ==================== LOGO ==================== */}
          <a
            href="#home"
            aria-label="SSD Sports Academy Home"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src={logo}
              alt="SSD Sports Academy Logo"
              onError={(e) => {
                e.currentTarget.onerror = null;

                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23ef4444'/%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='36' fill='white'%3ESSD%3C/text%3E%3C/svg%3E";
              }}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* ==================== DESKTOP NAVIGATION ==================== */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 ${
                  isScrolled
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}

                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* ==================== DESKTOP ENROLL BUTTON ==================== */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={handleEnroll}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <PhoneCall size={16} className="animate-pulse" />

              <span>Enroll Now</span>
            </button>
          </div>

          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            className={`lg:hidden p-2.5 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              isScrolled
                ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-md"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ==================== MOBILE DRAWER ==================== */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-4">
          <div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-3 sm:p-4 space-y-1 overflow-y-auto touch-pan-y max-h-[calc(100vh-6rem)]"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50/60 active:bg-red-50 transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Enroll Button */}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={handleEnroll}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-150"
              >
                <PhoneCall size={18} />

                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
