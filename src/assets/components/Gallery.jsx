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
      title: "Parallel Bar Routine",
    },
    {
      type: "video",
      src: video1,
      title: "High Bar Routine",
    },
    {
      type: "image",
      src: image3,
      title: "Vault Training Drill",
    },
    {
      type: "video",
      src: video2,
      title: "Floor Workout Session",
    },
    {
      type: "image",
      src: image4,
      title: "Our Coaches & Athletes",
    },
  ];

  return (
    <section
      id="gallery"
      className="pt-12 pb-12 lg:pt-6 lg:pb-16 bg-white border-b border-slate-200/60 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-2.5">
            <div className="w-fit">
              <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                Gallery
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Moments From
              <span className="text-blue-600"> SSD Sport Academy</span>
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
              Every smile, every flip, every achievement reflects our commitment
              to building confidence, discipline and champions.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden sm:flex items-center gap-2">
            <button className="gallery-prev w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition cursor-pointer shadow-sm">
              <ChevronLeft size={18} />
            </button>

            <button className="gallery-next w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition cursor-pointer shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

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
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          className="gallery-swiper pb-12"
          breakpoints={{
            0: {
              slidesPerView: 1.15,
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
            <SwiperSlide key={index} className="h-auto">
              <div className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Media */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <PlayCircle
                            size={28}
                            fill="white"
                            className="text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .gallery-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .gallery-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 18px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
