import { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Mouse,
} from "lucide-react";

import hero1 from "../images/hero1.jpeg";
import hero2 from "../images/hero2.jpeg";
import hero3 from "../images/hero3.jpeg";
import hero4 from "../images/hero4.jpeg";

export default function Hero() {

  const slides = [hero1, hero2, hero3, hero4];

  const heroMessages = [
    {
      title: "discipline creates champions.",
      subtitle: "building strong habits that shape confident athletes.",
      animation: "animate-slideUp",
    },
    {
      title: "small steps. big achievements.",
      subtitle: "every practice brings you closer to excellence.",
      animation: "animate-fadeScale",
    },
    {
      title: "creating fearless athletes.",
      subtitle: "developing strength, confidence, and character.",
      animation: "animate-slideLeft",
    },
    {
      title: "excellence starts here.",
      subtitle: "where passion meets professional training.",
      animation: "animate-slideRight",
    },
  ];


  const [current, setCurrent] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);


 // Google Form URL
const googleForm =
  "https://forms.gle/VUKPw7JjiGm1WehB6";

// WhatsApp URL
const whatsapp =
  "https://wa.me/919325017557?text=Hello%20SSD%20Sports%20Academy!%20I%20am%20interested%20in%20joining%20your%20gymnastics%20classes.%20Could%20you%20please%20share%20more%20details%20about%20the%20batches,%20fees,%20and%20free%20trial%20session%3F";


  // Background Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);



  // Heading Slider
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % heroMessages.length);
    }, 5000);

    return () => clearInterval(quoteTimer);
  }, [heroMessages.length]);



  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };


  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-40 flex flex-col justify-center"
    >


      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[5000ms] ease-linear ${
              current === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}
      </div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60"></div>



      {/* Glow Effects */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]"></div>

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-red-600/20 blur-[130px]"></div>



      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 -translate-y-8">

        <div className="mx-auto max-w-5xl text-center">


          {/* Badge */}
          <div className="inline-flex items-center gap-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2.5">

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-xs uppercase tracking-[1px] text-white font-semibold">
              EST. 2026 • SSD SPORTS ACADEMY
            </span>

          </div>



          {/* Animated Heading */}

          <div
            key={quoteIndex}
            className={heroMessages[quoteIndex].animation}
          >

            <h1 className="
              mt-8
              uppercase
              leading-[0.95]
              tracking-[0.18em]
              drop-shadow-2xl
            ">

              <span className="
                block
                text-white
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-light
              ">
                {heroMessages[quoteIndex].title}
              </span>

            </h1>



            <p className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              sm:text-base
              md:text-lg
              font-light
              italic
              tracking-[0.12em]
              leading-relaxed
              text-gray-200
            ">
              "{heroMessages[quoteIndex].subtitle}"
            </p>

          </div>





          {/* Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-5">


         <a
  href={googleForm}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative overflow-hidden rounded-full bg-red-600 px-9 py-4 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-700"
>
  <span className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:left-[180%]" />

  <span className="relative flex items-center gap-3">
    Book Free Trial
    <ArrowRight size={18}/>
  </span>
</a>



         <a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/30 bg-white/10 backdrop-blur-xl px-9 py-4 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
>
  <span className="flex items-center gap-3">
    <MessageCircle size={18} />
    Chat on WhatsApp
  </span>
</a>


          </div>





          {/* Stats */}
<div className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
  {
    number: "NEW",
    label: "Admissions Open",
  },
  {
    number: "FREE",
    label: "Trial Class",
  },
  {
    number: "SAFE",
    label: "Training Environment",
  },
  {
    number: "PRO",
    label: "Expert Coaching",
  },

            ].map((item,index)=>(

              <div
                key={index}
className="group rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-lg shadow-black/20 p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/15 hover:border-red-500/40 hover:shadow-red-500/20">

                <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                  {item.number}
                </h2>

                <p className="mt-1 uppercase text-[10px] sm:text-xs font-medium tracking-[2px] text-gray-300">
                  {item.label}
                </p>

              </div>

            ))}

          </div>


        </div>

      </div>





      {/* Previous Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
      >
        <ChevronLeft size={28}/>
      </button>




      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
      >
        <ChevronRight size={28}/>
      </button>




      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">

        {slides.map((_,index)=>(

          <button
            key={index}
            onClick={()=>setCurrent(index)}
            aria-label={`Go to slide ${index+1}`}
            className={`transition-all duration-500 ${
              current===index
              ?"h-2 w-12 rounded-full bg-red-500"
              :"h-2 w-2 rounded-full bg-white/60 hover:bg-white"
            }`}
          />

        ))}

      </div>




      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-8 hidden lg:flex items-center gap-4 z-30">

        <div className="flex h-12 w-7 justify-center rounded-full border border-white/40 p-1">

          <Mouse
            size={16}
            className="animate-bounce text-white mt-1"
          />

        </div>


        <div>

          <p className="text-xs uppercase tracking-[5px] text-gray-300">
            Scroll
          </p>

          <p className="text-white font-semibold">
            Discover More
          </p>

        </div>

      </div>



      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>


    </section>
  );
}