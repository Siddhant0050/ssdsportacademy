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
      icon: <ShieldCheck size={18} />,
      color: "text-red-500",
      bg: "bg-red-50",
      title: "Safe Training",
      desc: "A secure environment with professional supervision."
    },
    {
      icon: <GraduationCap size={18} />,
      color: "text-amber-500",
      bg: "bg-amber-50",
      title: "Expert Coaches",
      desc: "Experienced trainers focused on every child's growth."
    },
    {
      icon: <HeartHandshake size={18} />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "Personal Attention",
      desc: "Small batches to support individual development."
    },
    {
      icon: <CheckCircle2 size={18} />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      title: "Skill Growth",
      desc: "Building strength, balance, flexibility and confidence."
    }
  ];


  return (

    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >

      <div className="max-w-6xl mx-auto px-5 sm:px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            inline-flex
            rounded-full
            bg-red-50
            border
            border-red-100
            px-4
            py-1.5
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-red-600
          ">
            About SSD Sports Academy
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-light
            tracking-tight
            text-slate-900
            leading-tight
          ">
            Building
            <span className="font-semibold text-red-600">
              {" "}confident athletes
            </span>
            <br />
            through discipline & dedication
          </h2>


          <p className="
            mt-5
            text-sm
            sm:text-base
            text-slate-500
            font-light
            leading-relaxed
          ">
            SSD Sports Academy helps young athletes develop strength,
            confidence, flexibility, and discipline through professional
            gymnastics training.
          </p>

        </div>




        {/* Main Content */}
        <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
        ">


          {/* Image */}
          <div className="relative">


            <div className="
              rounded-3xl
              overflow-hidden
              border
              border-slate-100
              shadow-xl
            ">

              <img
                src={aboutImage}
                alt="SSD Sports Academy Training"
                className="
                  w-full
                  aspect-[4/3]
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />

            </div>



            {/* Floating Badge */}

            <div className="
              absolute
              -bottom-5
              right-5
              bg-white
              rounded-2xl
              shadow-xl
              border
              border-slate-100
              px-5
              py-3
            ">

              <h4 className="
                text-red-600
                text-xl
                font-bold
              ">
                150+
              </h4>

              <p className="
                text-xs
                text-slate-500
              ">
                Young Athletes
              </p>

            </div>


          </div>






          {/* Content */}

          <div>


            <h3 className="
              text-2xl
              sm:text-3xl
              font-light
              text-slate-900
            ">

              More Than Training,
              <span className="font-semibold text-red-600">
                {" "}Building Champions
              </span>

            </h3>



            <p className="
              mt-4
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
              font-light
            ">

              Our academy focuses on creating a strong foundation for
              children through structured gymnastics programs,
              professional guidance, and a positive learning environment.

              Every session is designed to improve physical ability,
              confidence, and mental strength.

            </p>




            {/* Features */}

            <div className="
              mt-8
              grid
              sm:grid-cols-2
              gap-4
            ">

              {coreFeatures.map((feat,index)=>(

                <div
                  key={index}
                  className="
                    flex
                    gap-4
                    p-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    hover:shadow-lg
                    transition-all
                  "
                >

                  <div className={`
                    w-10
                    h-10
                    rounded-xl
                    ${feat.bg}
                    ${feat.color}
                    flex
                    items-center
                    justify-center
                  `}>
                    {feat.icon}
                  </div>


                  <div>

                    <h4 className="
                      font-semibold
                      text-slate-800
                      text-sm
                    ">
                      {feat.title}
                    </h4>


                    <p className="
                      mt-1
                      text-xs
                      text-slate-500
                    ">
                      {feat.desc}
                    </p>

                  </div>


                </div>

              ))}

            </div>




            <a
              href="#programs"
              className="
                inline-flex
                mt-8
                rounded-full
                bg-slate-900
                px-6
                py-3
                text-sm
                font-medium
                text-white
                hover:bg-red-600
                transition
              "
            >
              Explore Programs
            </a>


          </div>


        </div>


      </div>

    </section>

  );
}