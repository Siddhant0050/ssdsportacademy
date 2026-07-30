import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../images/gallery1.jpeg";
import image2 from "../images/gallery2.jpeg";
import image3 from "../images/gallery3.jpeg";
import image4 from "../images/gallery4.jpeg";

import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";

export default function Gallery() {
  const media = [
    {
      type: "image",
      src: image1,
      title: "Toddlers Warm-Up Session",
    },
    {
      type: "image",
      src: image2,
      title: "Parallel Bar Training",
    },
    {
      type: "video",
      src: video1,
      title: "High Bar Performance",
    },
    {
      type: "image",
      src: image3,
      title: "Vault Training Drill",
    },
    {
      type: "video",
      src: video2,
      title: "Floor Exercise Session",
    },
    {
      type: "image",
      src: image4,
      title: "Coaches & Young Athletes",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
              Gallery
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Moments From{" "}
              <span className="font-bold text-red-600">SSD Sports Academy</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Capturing every achievement, movement, and milestone created
              through passion, discipline, and dedication.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              aria-label="Previous Slide"
              className="gallery-prev w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300 shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              aria-label="Next Slide"
              className="gallery-next w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300 shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          className="gallery-swiper !pb-14"
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                {/* Media Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 shrink-0">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="relative w-full h-full group/video">
                      <video
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover relative z-10"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>

                      {/* Video Play Overlay Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] pointer-events-none group-hover/video:opacity-0 transition-opacity duration-300 z-20">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                          <PlayCircle
                            size={32}
                            className="text-white fill-white/20"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Title */}
                <div className="p-5 flex-1 flex items-center">
                  <h3 className="text-sm font-semibold tracking-wide text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global Swiper Bullet Styling Customization */}
      <style>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #dc2626 !important;
          width: 20px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
}
