import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
    <footer className="bg-slate-950 text-slate-300">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-white tracking-wide">
              SSD SPORT
            </h2>

            <p className="text-blue-400 font-semibold mt-1 text-sm">
              Gymnastics Academy
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Helping children develop confidence, discipline,
              flexibility and strength through professional gymnastics
              coaching in a safe, fun and motivating environment.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">

              <a
                href="https://www.instagram.com/ssdsportacademy/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-white hover:text-slate-900 transition"
              >
                <FaInstagram size={18} />
                <span className="text-sm font-semibold">
                  Instagram
                </span>
              </a>

              <a
                href="https://wa.me/919325017557"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
              >
                <FaWhatsapp size={18} />
                <span className="text-sm font-semibold">
                  WhatsApp
                </span>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                  >
                    <ChevronRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 shrink-0"
                />

                <p className="leading-6 text-slate-400">
                  Pruthvi Sports Zone,
                  Behind Dhanori MSEB Office,
                  Pune, Maharashtra 411015
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-400 shrink-0"
                />

                <a
                  href="tel:+919325017557"
                  className="hover:text-white transition"
                >
                  +91 93250 17557
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-400 shrink-0"
                />

                <a
                  href="mailto:ssdsportacademy27@gmail.com"
                  className="hover:text-white transition text-[13px] whitespace-nowrap"
                >
                  ssdsportacademy27@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Academy Hours
            </h3>

            <div className="flex gap-3 mb-5">

              <Clock
                size={18}
                className="text-blue-400 mt-1 shrink-0"
              />

              <div>
                <p className="font-semibold text-white text-sm">
                  Monday - Sunday
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  11:00 AM - 8:00 PM
                </p>
              </div>

            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400 leading-6">
                Free Trial Classes Available.
                Contact us today and begin your child's gymnastics
                journey with experienced coaches.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} SSD Sport Academy. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500 text-center">
            Designed & Developed with ❤️ for SSD Sport Academy
          </p>

        </div>

      </div>

    </footer>
  );
}