import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black text-slate-300 overflow-hidden border-t border-slate-900">
      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="SSD Sport Academy Logo"
                className="w-10 h-10 object-contain shrink-0"
              />
              <div>
                <h2 className="text-2xl font-light tracking-[0.15em] text-white leading-tight">
                  SSD <span className="font-bold text-red-600">SPORT</span>
                </h2>
                <p className="text-[10px] text-red-500 font-semibold uppercase tracking-widest">
                  Gymnastics Academy
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
              Building confidence, discipline, and athletic excellence through
              professional gymnastics training in a safe and supportive
              environment.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://www.instagram.com/ssdsportacademy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-800 text-slate-300 hover:border-red-600 hover:text-white transition-all duration-300 text-xs font-medium"
              >
                <FaInstagram size={16} />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/919325017557"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-xs font-medium shadow-md shadow-red-950"
              >
                <FaWhatsapp size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              Explore
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <ChevronRight
                      size={14}
                      className="text-slate-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-200"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="text-red-500 shrink-0 mt-0.5"
                />
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Pruthvi Sports Zone,
                  <br />
                  Behind Dhanori MSEB Office,
                  <br />
                  Pune, Maharashtra 411015
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-red-500 shrink-0" />
                <a
                  href="tel:+919325017557"
                  className="text-sm text-slate-400 hover:text-white transition-colors font-light whitespace-nowrap"
                >
                  +91 93250 17557
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-red-500 shrink-0" />
                <a
                  href="mailto:ssdsportacademy27@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors font-light whitespace-nowrap"
                >
                  ssdsportacademy27@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Academy Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              Academy Hours
            </h3>

            <div className="flex gap-3 items-start">
              <Clock size={18} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-medium">
                  Saturday – Thursday
                </p>
                <p className="text-slate-400 text-xs mt-1 font-light">
                  11:00 AM – 8:00 PM
                </p>
                <p className="text-red-500 text-xs mt-2 font-medium">
                  Friday Closed
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Free trial classes available. Give your child the right platform
                to grow stronger and confident.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 bg-black/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} SSD Sport Academy. All Rights Reserved.
          </p>

          <p className="text-center md:text-right">
            Designed & Developed with ❤️ for SSD Sport Academy
          </p>
        </div>
      </div>
    </footer>
  );
}