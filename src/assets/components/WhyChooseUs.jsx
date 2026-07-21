import {
  ShieldCheck,
  Users,
  Trophy,
  HeartHandshake,
  Clock3,
  Dumbbell,
  Award,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe Training Environment",
    description:
      "Certified safety mats, child-friendly equipment, and closely supervised sessions for every gymnast.",
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description:
      "Limited students per batch ensure personal attention and faster skill development.",
  },
  {
    icon: Trophy,
    title: "Experienced Coaches",
    description:
      "Qualified gymnastics coaches dedicated to building technique, discipline, and confidence.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Professional gymnastics apparatus designed for safe and progressive learning.",
  },
  {
    icon: HeartHandshake,
    title: "Confidence & Discipline",
    description:
      "We help children improve self-confidence, focus, teamwork, and physical fitness.",
  },
  {
    icon: Clock3,
    title: "Flexible Timings",
    description:
      "Convenient weekday and weekend batches suitable for school-going children.",
  },
  {
    icon: Award,
    title: "Competition Preparation",
    description:
      "Specialized coaching for district, state, and national-level gymnastics competitions.",
  },
  {
    icon: BadgeCheck,
    title: "Progress Tracking",
    description:
      "Regular performance assessments help parents monitor every child's improvement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-100 scroll-mt-16"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
            Building{" "}
            <span className="font-bold text-red-600">
              future champions
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            A professional gymnastics environment where children develop
            strength, confidence, discipline, and a winning mindset.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-xl hover:border-red-100 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 shrink-0">
                  <Icon
                    size={22}
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 font-light leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12 sm:mt-16">
          {[
            ["200+", "Happy Students"],
            ["5★", "Parent Reviews"],
            ["8+", "Professional Apparatus"],
            ["100%", "Safety Focused"],
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-6 text-center hover:bg-red-600 transition-colors duration-500 shadow-md"
            >
              <h3 className="text-3xl sm:text-4xl font-light text-white">
                {stat[0]}
              </h3>

              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                {stat[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}