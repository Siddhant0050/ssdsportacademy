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
      className="pt-12 pb-12 lg:pt-6 lg:pb-16 bg-slate-50 border-b border-slate-200/60 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}

        <div className="text-left lg:text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">

          <div className="lg:mx-auto w-fit">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Parents Choose
            <span className="text-blue-600">
              {" "}SSD Sport Academy
            </span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl lg:mx-auto">
            We provide a safe, structured and enjoyable gymnastics environment
            where children develop strength, flexibility, confidence and
            lifelong healthy habits under experienced coaches.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">

                  <Icon
                    size={22}
                    className="text-blue-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-4 text-base font-black text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-6 flex-grow">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
            <h3 className="text-3xl font-black text-blue-600">200+</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">
              Happy Students
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
            <h3 className="text-3xl font-black text-blue-600">5★</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">
              Parent Reviews
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
            <h3 className="text-3xl font-black text-blue-600">8+</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">
              Professional Equipment
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
            <h3 className="text-3xl font-black text-blue-600">100%</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">
              Safety Focused
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}