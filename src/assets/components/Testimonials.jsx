import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-16 pb-20 lg:pt-10 lg:pb-24 bg-slate-50 border-b border-slate-200/60 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl space-y-3.5">
            <div className="w-fit">
              <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-xs">
                Testimonials
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              What Parents Say About
              <span className="text-blue-600"> SSD Sport Academy</span>
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Discover why parents trust SSD Sport Academy to help their
              children build confidence, discipline, strength and lifelong
              gymnastics skills.
            </p>

            {/* Overall Aggregate Rating Star Block */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="#FACC15"
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-black text-slate-900">5.0</span>
              <span className="text-xs font-semibold text-slate-400 border-l border-slate-200 pl-3">
                Based on Parent Reviews
              </span>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="hidden sm:flex items-center gap-2.5 self-end">
            <button className="testimonial-prev w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-xs cursor-pointer active:scale-95">
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            <button className="testimonial-next w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-xs cursor-pointer active:scale-95">
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Block */}
        <div className="relative testimonial-custom-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            className="pb-14! px-0.5"
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id} className="h-auto flex">
                <div className="group w-full min-h-[360px] bg-gradient-to-b from-white to-slate-50/50 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300/50 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
                  {/* Top Content */}
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Quote
                          size={18}
                          className="text-blue-600"
                          strokeWidth={2.5}
                        />
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating || 5)].map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            fill="#FACC15"
                            className="text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p
                      className="text-sm text-slate-600 leading-7 font-medium overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      "{review.text}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                      {review.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div className="overflow-hidden">
                      <h3 className="text-sm font-black text-slate-900 truncate">
                        {review.name}
                      </h3>

                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold truncate">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Embedded Swiper Injection Elements */}
      <style jsx global>{`
        .testimonial-custom-wrapper .swiper-pagination-bullets {
          bottom: 0px !important;
        }
        .testimonial-custom-wrapper .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 20px !important;
          border-radius: 6px !important;
        }
        .testimonial-custom-wrapper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
