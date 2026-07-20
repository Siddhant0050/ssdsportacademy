import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const timings = [
    { day: "Monday", hours: "11:00 AM – 8:00 PM", isClosed: false },
    { day: "Tuesday", hours: "11:00 AM – 8:00 PM", isClosed: false },
    { day: "Wednesday", hours: "11:00 AM – 8:00 PM", isClosed: false },
    { day: "Thursday", hours: "11:00 AM – 8:00 PM", isClosed: false },
    { day: "Friday", hours: "Closed", isClosed: true },
    { day: "Saturday", hours: "11:00 AM – 8:00 PM", isClosed: false },
    { day: "Sunday", hours: "11:00 AM – 8:00 PM", isClosed: false },
  ];

  return (
    <section
      id="contact"
      className="pt-16 pb-20 lg:pt-10 lg:pb-24 bg-white border-b border-slate-200/60 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-left lg:text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          <div className="lg:mx-auto w-fit">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-xs">
              Contact Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Visit
            <span className="text-blue-600"> SSD Sport Academy</span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl lg:mx-auto">
            We'd love to welcome you for a free trial class. Visit our academy,
            meet our experienced coaches, and discover a safe, fun, and
            professional gymnastics environment.
          </p>
        </div>

        {/* Contact Layout Grid Wrapper */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Info Box */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-7">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 mb-1 tracking-tight">Address</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    S. No.19, Road No.11, Kamal Park, M.S.E.B Office,
                    <br />
                    Pruthvi Sports Zone, Behind Dhanori,
                    <br />
                    Pune, Maharashtra - 411015
                  </p>
                </div>
              </div>

              {/* Communication Channel Flex Track */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/10">
                    <Phone size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-sm font-black text-slate-900 mb-0.5 tracking-tight">Phone</h3>
                    <a
                      href="tel:+919325017557"
                      className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition truncate block"
                    >
                      +91 93250 17557
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FaInstagram size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-sm font-black text-slate-900 mb-0.5 tracking-tight">Instagram</h3>
                    <a
                      href="https://instagram.com/ssdsportacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition truncate block"
                    >
                      @ssdsportacademy
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-rose-600/10">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-sm font-black text-slate-900 mb-0.5 tracking-tight">Email</h3>
                  <a
                    href="mailto:ssdsportacademy27@gmail.com"
                    className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition break-all block"
                  >
                    ssdsportacademy27@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Structured Timings Block */}
            <div className="flex gap-4 border-t border-slate-200/60 pt-6">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock3 size={18} />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-black text-slate-900 mb-3 tracking-tight">
                  Opening Hours
                </h3>

                <div className="space-y-2">
                  {timings.map((time, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-slate-200/50 last:border-0 pb-2 last:pb-0 text-xs sm:text-sm align-middle"
                    >
                      <span className="text-slate-500 font-semibold">{time.day}</span>
                      <span
                        className={`text-sm tracking-tight ${
                          time.isClosed
                            ? "text-rose-600 font-black uppercase tracking-wider text-xs bg-rose-50 px-2 py-0.5 rounded border border-rose-100"
                            : "font-bold text-slate-800"
                        }`}
                      >
                        {time.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Side: Embedded Google Map Canvas */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs h-[520px] lg:h-auto min-h-[450px]">
            <iframe
              title="SSD Sport Academy Location Map"
              src="https://www.google.com/maps?q=SSD+Sport+Academy,+Dhanori,+Pune&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full min-h-full block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}