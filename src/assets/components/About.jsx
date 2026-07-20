import aboutImage from "../images/about.jpeg";
import {
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const coreFeatures = [
    {
      icon: <ShieldCheck className="text-blue-600" size={14} />,
      bg: "bg-blue-50 border border-blue-100",
      title: "Safe Environment",
      desc: "Child-friendly equipment with proper professional supervision."
    },
    {
      icon: <GraduationCap className="text-red-600" size={14} />,
      bg: "bg-red-50 border border-red-100",
      title: "Expert Coaches",
      desc: "Certified athletic trainers with years of real hands-on experience."
    },
    {
      icon: <HeartHandshake className="text-amber-600" size={14} />,
      bg: "bg-amber-50 border border-amber-100",
      title: "Personal Attention",
      desc: "Strictly limited student batches to focus closely on individual growth."
    },
    {
      icon: <CheckCircle2 className="text-emerald-600" size={14} />,
      bg: "bg-emerald-50 border border-emerald-100",
      title: "Skill Development",
      desc: "Structured paths across balance, posture, flexibility, and physical power."
    }
  ];

  return (
    /* Increased top padding (pt-28 dynamically scaling to lg:pt-36) creates 
       clear layout separation between the sticky navbar and the badge below it */
    <section 
      id="about" 
      className="pt-28 pb-12 lg:pt-20 lg:pb-16 bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading Area */}
        <div className="text-left lg:text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="lg:mx-auto w-fit">
            <span className="bg-red-50 text-red-600 border border-red-100 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              About SSD Sports Academy
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight pt-0.5">
            Where Every Child Discovers Their <span className="text-blue-600">Potential</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium max-w-2xl lg:mx-auto">
            We believe gymnastics is more than just a physical activity. It serves as a foundational ecosystem that develops lifelong confidence, operational discipline, robust muscle mechanics, and healthy functional habits.
          </p>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: VISUAL TRUST BRANDING */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <div className="relative p-1 bg-gradient-to-tr from-slate-100 via-white to-blue-50 rounded-2xl shadow-md border border-slate-100/80">
              <div className="overflow-hidden rounded-xl bg-slate-50">
                <img
                  src={aboutImage}
                  alt="Gymnastics arena infrastructure details inside SSD Sports Academy Pune"
                  className="w-full object-cover aspect-[4/3] sm:aspect-video lg:aspect-[4/5]"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" }}
                />
              </div>

              {/* Floating Content Analytics Badge */}
              <div className="absolute -bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-sm border border-slate-100 flex items-center gap-2 max-w-[140px]">
                <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 text-[10px] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-blue-600 leading-none">150+ Kids</h4>
                  <p className="text-[9px] text-slate-400 font-bold mt-0.5 leading-none">Enrolled & Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INSTITUTION INFORMATION */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                Helping Children Become <span className="text-red-600">Stronger Every Day</span>
              </h3>
              <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                SSD Sports Academy offers professional gymnastics coaching in a modern, highly controlled, and motivating environment. Our experienced instruction group focuses heavily on expanding youth athletic mechanics while reinforcing active spatial awareness, structural safety, and steady peer progression.
              </p>
            </div>

            {/* Tight Operational Feature Matrix Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {coreFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start p-2 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className={`w-7 h-7 rounded-lg ${feat.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    {feat.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800 tracking-tight leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Call Anchor button */}
            <div className="pt-1.5">
              <a
                href="#programs"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-sm active:scale-95"
              >
                Explore Batches & Timings
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}