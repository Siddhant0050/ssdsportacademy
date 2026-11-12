
import { useEffect, useState } from "react";
import {
  Trophy,
  Medal,
  Award,
  Star,
  X,
  Camera,
  Sparkles,
  ChevronRight,
  CalendarDays,
  Image as ImageIcon,
  ArrowLeft,
  Crown,
} from "lucide-react";

import achievement1 from "../images/achievement-competition-2026-1.jpeg";
import achievement2 from "../images/achievement-competition-2026-2.jpeg";
import achievement3 from "../images/achievement-competition-2026-3.jpeg";

const competitionImages = [
  {
    id: 1,
    src: achievement1,
    alt: "SSD Sports Academy gymnastics competition achievement",
    title: "Competition Highlights",
  },
  {
    id: 2,
    src: achievement2,
    alt: "SSD Sports Academy students at the competition",
    title: "Our Champions",
  },
  {
    id: 3,
    src: achievement3,
    alt: "SSD Sports Academy award ceremony",
    title: "Celebrating Success",
  },
];

const champions = [
  {
    name: "Swaraj",
    position: "Champion",
    icon: Crown,
  },
  {
    name: "Samyak",
    position: "Champion",
    icon: Trophy,
  },
  {
    name: "Daksh",
    position: "Champion",
    icon: Medal,
  },
];

function ImageLightbox({ image, onClose, onNext, onPrevious }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onNext, onPrevious]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Achievement photograph viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-red-600"
        aria-label="Close image"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        className="absolute left-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-red-600 sm:left-5"
        aria-label="Previous image"
      >
        <ArrowLeft size={22} />
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
        className="h-auto max-h-[82dvh] w-auto max-w-[calc(100%-5rem)] rounded-xl object-contain shadow-2xl"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-red-600 sm:right-5"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
        {image.title}
      </p>
    </div>
  );
}

function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-2 w-2 rounded-sm animate-achievement-confetti"
          style={{
            left: `${(index * 37) % 100}%`,
            top: "-12px",
            backgroundColor: [
              "#ef4444",
              "#facc15",
              "#3b82f6",
              "#22c55e",
            ][index % 4],
            animationDelay: `${(index % 7) * 0.35}s`,
            animationDuration: `${3 + (index % 4)}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes achievement-confetti {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(500px) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-achievement-confetti {
          animation-name: achievement-confetti;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

export default function Achievements({
  preview = false,
  onNavigate,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === null
        ? 0
        : (current + 1) % competitionImages.length
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === null
        ? competitionImages.length - 1
        : (current - 1 + competitionImages.length) %
          competitionImages.length
    );
  };

  const navigateToAchievements = () => {
    onNavigate?.("/achievements");
  };

  return (
    <section
      id="achievements"
      className={`relative w-full scroll-mt-24 overflow-hidden ${
        preview
          ? "bg-white py-14 sm:py-16"
          : "min-h-screen bg-gray-50 py-28 sm:py-32"
      }`}
    >
      <Confetti />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            <Trophy size={17} />
            Our Proud Moments
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Achievements &{" "}
            <span className="text-red-600">Milestones</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Every achievement represents dedication, discipline,
            confidence and the hard work of our young gymnasts.
            Celebrating every step of their journey!
          </p>
        </div>

        {/* COMPETITION HIGHLIGHT */}
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 p-5 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* COMPETITION DETAILS */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-red-200 sm:text-sm">
                <Sparkles size={16} />
                Celebrating Excellence
              </div>

              <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                State Level Grade-wise Invitational Gymnastics Competition
              </h3>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-300">
                <CalendarDays size={18} className="text-red-400" />
                <span>2026</span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                Our talented gymnasts proudly represented SSD Sports
                Academy and showcased their skills, determination
                and sportsmanship at the state-level competition.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
                  <Trophy size={20} className="text-yellow-400" />
                  <span className="text-sm font-semibold">
                    Outstanding Performance
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3">
                  <Award size={20} className="text-red-400" />
                  <span className="text-sm font-semibold">
                    Academy Pride
                  </span>
                </div>
              </div>
            </div>

            {/* FULL COMPETITION IMAGE */}
            <div className="flex w-full items-center justify-center">
              <button
                type="button"
                onClick={() => openImage(0)}
                aria-label="View competition photograph"
                className="group relative flex min-h-52 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl sm:min-h-72"
              >
                <img
                  src={achievement1}
                  alt="SSD Sports Academy competition"
                  className="max-h-[420px] w-full object-contain transition duration-300"
                />

                <div className="absolute inset-2 flex items-end justify-center rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100">
                  <span className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                    <Camera size={17} />
                    View Photograph
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* CHAMPIONS */}
        <div className="mb-12">
          <div className="mb-7 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-red-600">
              <Medal size={21} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Our Champions
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Stars of SSD Sports Academy
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {champions.map((champion, index) => {
              const ChampionIcon = champion.icon;

              return (
                <div
                  key={champion.name}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <ChampionIcon size={27} />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-gray-900">
                      {champion.name}
                    </h4>

                    <p className="mt-1 flex items-center gap-1 text-sm font-medium text-red-600">
                      <Star size={14} fill="currentColor" />
                      {champion.position}
                    </p>
                  </div>

                  <div className="ml-auto text-2xl font-black text-gray-100">
                    0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPETITION GALLERY */}
        <div>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="mb-2 flex items-center gap-2 text-red-600">
                <Camera size={19} />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Photo Gallery
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Moments to Remember
              </h3>
            </div>

            <span className="flex items-center gap-2 text-sm text-gray-500">
              <ImageIcon size={17} />
              {competitionImages.length} Photographs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {competitionImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openImage(index)}
                aria-label={`View ${image.title}`}
                className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 text-left shadow-lg transition hover:shadow-xl"
              >
                {/* IMAGE FRAME - COMPLETE IMAGE VISIBLE */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 sm:h-72">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                    <div className="scale-75 rounded-full bg-white p-3 text-red-600 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                      <Camera size={23} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4">
                  <h4 className="font-semibold text-gray-900">
                    {image.title}
                  </h4>

                  <ChevronRight
                    size={19}
                    className="text-red-600 transition group-hover:translate-x-1"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-12 rounded-2xl border border-red-100 bg-red-50 px-5 py-8 text-center sm:mt-14 sm:px-10">
          <Trophy
            size={30}
            className="mx-auto mb-3 text-red-600"
          />

          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Every Champion Has a Beginning!
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            At SSD Sports Academy, we believe every child has the
            potential to shine. We are proud of our gymnasts and
            look forward to many more achievements together.
          </p>
        </div>

        {/* VIEW ALL - HOMEPAGE PREVIEW ONLY */}
        {preview && (
          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={navigateToAchievements}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
            >
              View All Achievements
              <ChevronRight size={19} />
            </button>
          </div>
        )}

        {/* BACK TO HOME - FULL PAGE ONLY */}
        {!preview && onNavigate && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate("/")}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-600"
            >
              <ArrowLeft size={18} />
              Back to Home
            </button>
          </div>
        )}
      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage !== null && (
        <ImageLightbox
          image={competitionImages[selectedImage]}
          onClose={closeImage}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </section>
  );
}
