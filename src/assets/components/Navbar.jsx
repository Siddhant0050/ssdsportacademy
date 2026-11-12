
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "../images/Websitelogo.png";

export default function Navbar({
  onEnroll,
  onNavigate,
  isCareersPage = false,
  isContactPage = false,
  isBlogPage = false,
  isAchievementsPage = false,
}) {
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

  const isSecondaryPage =
    isCareersPage ||
    isContactPage ||
    isBlogPage ||
    isAchievementsPage;

  const navItems = isSecondaryPage
    ? [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Coaches", href: "/#coaches" },
        { name: "Programs", href: "/#programs" },
        { name: "Gallery", href: "/#gallery" },
        { name: "Achievements", href: "/achievements" },
        { name: "Reviews", href: "/#testimonials" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
      ]
    : [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Coaches", href: "#coaches" },
        { name: "Programs", href: "#programs" },
        { name: "Gallery", href: "#gallery" },
        { name: "Achievements", href: "#achievements" },
        { name: "Reviews", href: "#testimonials" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
      ];

  const lightHeader = isScrolled || isSecondaryPage;

  const isActivePage = (name) =>
    (name === "Careers" && isCareersPage) ||
    (name === "Contact" && isContactPage) ||
    (name === "Blog" && isBlogPage) ||
    (name === "Achievements" && isAchievementsPage);

  const handleNavigation = (event, href) => {
    if (
      !onNavigate ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  const handleEnroll = () => {
    setMenuOpen(false);
    onEnroll?.();
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        lightHeader
          ? "border-b border-gray-100 bg-white/95 py-3.5 shadow-md backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a
            href={isSecondaryPage ? "/" : "#home"}
            aria-label="SSD Sports Academy Home"
            onClick={(event) => {
              setMenuOpen(false);
              if (isSecondaryPage) {
                handleNavigation(event, "/");
              }
            }}
            className="shrink-0"
          >
            <img
              src={logo}
              alt="SSD Sports Academy Logo"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23ef4444'/%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='36' fill='white'%3ESSD%3C/text%3E%3C/svg%3E";
              }}
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-14 lg:h-16"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                aria-current={
                  isActivePage(item.name) ? "page" : undefined
                }
                className={`group relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  lightHeader
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-red-600 transition-transform duration-300 ${
                    isActivePage(item.name)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* DESKTOP ENROLL BUTTON */}
          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={handleEnroll}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg active:bg-red-800"
            >
              <PhoneCall size={16} className="animate-pulse" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            className={`rounded-xl p-2.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 lg:hidden ${
              lightHeader
                ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                : "bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[calc(100dvh-5rem)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6">
          <div
            className="max-h-[calc(100dvh-6rem)] space-y-1 overflow-y-auto rounded-2xl border border-gray-100 bg-white/95 p-3 shadow-2xl backdrop-blur-md sm:p-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                aria-current={
                  isActivePage(item.name) ? "page" : undefined
                }
                className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                  isActivePage(item.name)
                    ? "bg-red-50 text-red-600"
                    : "text-gray-700 hover:bg-red-50/60 hover:text-red-600 active:bg-red-50"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* MOBILE ENROLL BUTTON */}
            <div className="mt-2 border-t border-gray-100 pt-2">
              <button
                type="button"
                onClick={handleEnroll}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 active:bg-red-800"
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
