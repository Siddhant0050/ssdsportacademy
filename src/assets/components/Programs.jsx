import { ArrowRight, Clock, Award, Move } from "lucide-react";

import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Programs() {
  const programs = [
    {
      title: "Toddlers Gymnastics",
      age: "Age: 4 - 6 Years",
      duration: "60 Mins / Session",
      focus: "Basic motor skills, balance mechanics, and safe play-based flexibility routines.",
      badge: "Beginner",
      badgeBg: "bg-emerald-500 text-white",
      image: image1,
      icon: <Move size={14} className="text-emerald-600" />
    },
    {
      title: "Foundational Class",
      age: "Age: 7 - 10 Years",
      duration: "60 Mins / Session",
      focus: "Tumbling tracks, posture control adjustments, and introductory cartwheels.",
      badge: "Most Popular",
      badgeBg: "bg-blue-600 text-white",
      image: image2,
      icon: <Award size={14} className="text-blue-600" />
    },
    {
      title: "Advanced / Competitive",
      age: "Age: 11 - 15 Years",
      duration: "60 Mins / Session",
      focus: "Intense core conditioning, routine mastery, layout flips, and agility drills.",
      badge: "Elite Track",
      badgeBg: "bg-red-600 text-white",
      image: image3,
      icon: <Clock size={14} className="text-red-600" />
    }
  ];

  return (
    <section
      id="programs"
      className="pt-12 pb-12 lg:pt-6 lg:pb-16 bg-slate-50 border-b border-slate-200/60 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-left lg:text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="lg:mx-auto w-fit">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              Our Training Tracks
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            High-Performance 
            <span className="text-blue-600"> Gymnastics </span>
            Batches
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-xl lg:mx-auto leading-relaxed">
            Carefully curated age groups designed to safely accelerate physical
            confidence under strict professional instruction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image & Content Wrapper */}
              <div>
                <div className="relative overflow-hidden aspect-video bg-slate-100 border-b border-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span
                    className={`absolute top-3 right-3 text-[9px] font-black uppercase px-3 py-1 rounded-md shadow-md backdrop-blur-xs ${prog.badgeBg}`}
                  >
                    {prog.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0">
                      {prog.icon}
                    </div>
                    <h3 className="text-sm font-black text-slate-900 tracking-tight">
                      {prog.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-200/40">
                      {prog.age}
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-md border border-blue-100/30">
                      {prog.duration}
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {prog.focus}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/40 group-hover:bg-white transition-colors">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-between bg-white border border-slate-200 text-slate-800 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white px-3 py-2 rounded-xl text-xs font-black transition-all duration-200 shadow-xs"
                >
                  <span>Book Free Trial Batch</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}