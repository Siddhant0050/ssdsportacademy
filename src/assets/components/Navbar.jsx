import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || menuOpen
          ? "bg-white/70 backdrop-blur-2xl shadow-lg border-b border-white/30 py-3"
          : "bg-white/20 backdrop-blur-xl py-4"
      }`}
    >
      {/* Glass Reflection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-24 left-0 w-full h-40 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl opacity-70 animate-pulse" />

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex flex-col group">

            <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-blue-600 via-blue-500 to-red-500 bg-clip-text text-transparent">

              SSD SPORTS

            </h1>

            <span className="text-[10px] uppercase tracking-[3px] font-bold text-slate-500 group-hover:text-blue-600 transition">

              Gymnastics Academy

            </span>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-sm
                  font-bold
                  tracking-wide
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-blue-600
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-gradient-to-r
                  after:from-blue-600
                  after:to-red-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">

            <a
              href="#contact"
              className="
                relative
                overflow-hidden
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-blue-500
                to-red-500
                px-6
                py-2.5
                font-bold
                text-white
                shadow-lg
                shadow-blue-600/25
                hover:scale-105
                transition-all
                duration-300
                group
              "
            >

              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-full">

                <span className="absolute left-[-120%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 group-hover:left-[150%] transition-all duration-1000" />

              </span>

              <PhoneCall size={16} />

              Enroll Now

            </a>

          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/40 backdrop-blur-xl border border-white/40 text-slate-700 hover:bg-white transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-2xl border-t border-slate-200 mt-3 shadow-xl">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-8
                py-4
                font-semibold
                text-slate-700
                border-b
                border-slate-100
                hover:bg-blue-50
                hover:text-blue-600
                transition-all
              "
            >
              {link.name}
            </a>
          ))}

          <div className="p-5 bg-slate-50">

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-red-500
                py-3.5
                text-white
                font-bold
                shadow-lg
                hover:scale-[1.02]
                transition
              "
            >
              <PhoneCall size={16} />

              Enroll Now

            </a>

          </div>

        </div>
      </div>
    </header>
  );
}