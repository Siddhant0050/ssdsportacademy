import heroImage from "../images/hero.jpeg";
import { ArrowRight, PhoneCall, Star, Trophy, Users } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-slate-50 pt-24 pb-10 md:pt-32 md:pb-16 flex items-center overflow-hidden"
    >
      {/* Premium Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-gradient-to-tr from-red-50/30 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: STRATEGIC MARKETING CONTENT (Columns: 7) */}
          <div className="lg:col-span-7 text-left space-y-4 order-2 lg:order-1">
            
            {/* Premium Trust Pill */}
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80 px-3 py-1 rounded-full shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                Pune's Top-Rated Gymnastics Center
              </span>
            </div>
            
            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Strength</span>,<br /> 
              Balance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Confidence</span>.
            </h1>

            {/* Strategic Value Proposition */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
              Professional gymnastics coaching for children in Dhanori. Equipped with premium safety setups, certified instructors, and structured programs tailored to your child's physical growth.
            </p>

            {/* High-Converting Call to Actions */}
            <div className="flex items-center flex-wrap gap-3 pt-2">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 font-bold shadow-lg shadow-blue-600/15 hover:shadow-blue-600/25 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm"
              >
                Book Free Trial
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              
              <a 
                href="tel:+911234567890" /* Replace with your absolute contact registry link */
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 font-bold shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm"
              >
                <PhoneCall size={13} className="text-blue-600" />
                Talk to Coach
              </a>
            </div>

            {/* Micro Trust Dashboard Indicators */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-3 mt-6 grid grid-cols-3 divide-x divide-slate-100 shadow-sm max-w-lg">
              {/* Stat Card 1 */}
              <div className="flex items-center gap-2 px-2 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Users size={15} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-none">150+</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">Active Kids</p>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="flex items-center gap-2 px-2 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Trophy size={15} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-none">Certified</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">Coaching</p>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="flex items-center gap-2 px-2 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-none">5.0/5</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">Google Star</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: PREMIUM ARENA IMAGE WRAPPER (Columns: 5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <div className="relative p-1.5 bg-gradient-to-tr from-slate-200 via-white to-blue-200 rounded-[22px] shadow-xl">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={heroImage}
                  alt="SSD Sports Academy Premium Gymnastics Arena Setup"
                  className="w-full object-cover aspect-[4/3] transform hover:scale-102 transition-transform duration-500 ease-out"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80" }}
                />
              </div>

              {/* Floating Real-Time Google Rating Badge */}
              <a 
                href="https://www.google.com/maps/place/SSD+SPORTS+ACADEMY/"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg shadow-lg font-bold text-[10px] sm:text-xs flex items-center gap-1 hover:bg-slate-900 transition-colors border border-slate-700/50"
              >
                <span className="text-amber-400 font-bold">★</span> 
                <span>5.0 Verified</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}