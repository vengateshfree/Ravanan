import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import parcel9 from "../assets/parcel9.jpg";
import parcel10 from "../assets/parcel10.jpg";
import parcel11 from "../assets/parcel11.png";

const slides = [
  { image: parcel9, title: "Reliable Logistics & Moving Solutions" },
  { image: parcel11, title: "Trusted Warehousing & Storage Services" },
  { image: parcel10, title: "Safe, Secure & Modern Storage Facilities" },
];

export default function HeroCarousel() {
  const navigate = useNavigate();

  // animation allowed only once
  const [animateFirstSlide, setAnimateFirstSlide] = useState(true);

  useEffect(() => {
    // remove animation permanently after first run
    const t = setTimeout(() => {
      setAnimateFirstSlide(false);
    }, 1200); // match animation duration

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative">
      
  <div class="absolute -top-40 -left-40 w-[500px] h-[500px]
              bg-[#FCDD5A] opacity-15 blur-[160px] rounded-full"></div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop
        className="h-[400px] md:h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[400px] md:h-screen">

              {/* Image */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-16">
                  <div className="max-w-4xl text-white mt-30 md:mt-0">

                    <div
                      className={
                        i === 0 && animateFirstSlide
                          ? "animate-slide-up"
                          : ""
                      }
                    >
                      <h1 className="h1 font-extrabold leading-tight">
                        {slide.title}
                      </h1>

<button
  class="group flex items-center gap-3 mt-5
         px-8 py-3
         rounded-xl
         bg-gradient-to-b from-[#FFE6A3] via-[#FFC94A] to-[#F4A100]
         text-black font-semibold
         hover:brightness-105
         active:translate-y-[2px]
         active:shadow-[0_3px_0_#C87F00]
         transition-all duration-150"
>
  <span>Get Started</span>
  <span class="text-xl transition-transform duration-150 group-hover:translate-x-1">
    →
  </span>
</button>

                      {/* <button
                        onClick={() => navigate("/contact")}
                        className="mt-6 cursor-pointer bg-orange-500 hover:bg-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold transition"
                      >
                        Contact Us
                      </button> */}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
