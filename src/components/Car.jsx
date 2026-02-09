import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Package, Warehouse, Shield } from "lucide-react";

import parcel9 from "../assets/parcel9.jpg";
import parcel10 from "../assets/parcel10.jpg";
import parcel11 from "../assets/parcel11.png";

const slides = [
  {
    image: parcel9,
    title: "Reliable Logistics & Moving Solutions",
    subtitle: "Lightning-fast, highly efficient delivery services designed to move what matters most—exactly when and how you need it",
    icon: Package,
    stats: { value: "50K+", label: "Deliveries" }
  },
  {
    image: parcel11,
    title: "Trusted Warehousing & Storage Services",
    subtitle: "Smart, secure, and professional storage solutions with 24/7 security monitoring—your belongings protected day and night",
    icon: Warehouse,
    stats: { value: "100K+", label: "sq ft Space" }
  },
  {
    image: parcel10,
    title: "Safe, Secure & Modern Storage Facilities",
    subtitle: "World-class, state-of-the-art facilities featuring precision climate control technology to preserve and protect even the most sensitive items",
    icon: Shield,
    stats: { value: "99.9%", label: "Safety Rating" }
  },
];

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [animateFirstSlide, setAnimateFirstSlide] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setAnimateFirstSlide(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden mt-0">
    {/* <section className="relative overflow-hidden mt-10"> */}
      
      {/* Animated Background Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FCDD5A] opacity-15 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-orange-400 opacity-10 blur-[140px] rounded-full animate-pulse delay-1000" />
      
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
        loop
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-12 !h-1 !rounded-full",
          bulletActiveClass: "!bg-white !w-16",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[500px] md:h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[500px] md:h-screen">

              {/* Image with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover scale-105 animate-ken-burns"
                />
              </div>

              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Animated Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-5" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                     backgroundSize: '50px 50px'
                   }} 
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-16">
                  <div className="max-w-4xl">

                    {/* Icon Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                  bg-white/10 backdrop-blur-md border border-white/20 mb-6
                                  ${i === 0 && animateFirstSlide ? "animate-fade-in-down" : ""}`}
                      style={{ animationDelay: "0.2s" }}
                    >
                      <slide.icon className="w-5 h-5 text-[#FCDD5A]" />
                      <span className="text-white text-sm font-medium">Premium Service</span>
                    </div>

                    {/* Main Title */}
                    <h1
                      className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white 
                                  leading-tight mb-4 md:mb-6
                                  ${i === 0 && animateFirstSlide ? "animate-fade-in-up" : ""}`}
                      style={{ animationDelay: "0.4s" }}
                    >
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p
                      className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl
                                  ${i === 0 && animateFirstSlide ? "animate-fade-in-up" : ""}`}
                      style={{ animationDelay: "0.6s" }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className={`flex flex-col sm:flex-row gap-4
                                  ${i === 0 && animateFirstSlide ? "animate-fade-in-up" : ""}`}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <button
                        onClick={() => navigate("/contact")}
                        className="group relative px-8 py-4 rounded-xl
                                   bg-gradient-to-br from-[#FFE6A3] via-[#FFC94A] to-[#F4A100]
                                   text-black font-bold text-lg
                                   hover:shadow-[0_0_30px_rgba(252,221,90,0.5)]
                                   hover:scale-105
                                   active:scale-95
                                   transition-all duration-300
                                   overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>

                      <button
                        onClick={() => navigate("/services")}
                        className="group px-8 py-4 rounded-xl
                                   bg-white/10 backdrop-blur-md
                                   border-2 border-white/30
                                   text-white font-bold text-lg
                                   hover:bg-white/20 hover:border-white/50
                                   hover:scale-105
                                   active:scale-95
                                   transition-all duration-300"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </button>
                    </div>

                    {/* Stats Badge */}
                    <div
                      className={`inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full
                                  bg-black/30 backdrop-blur-md border border-white/20
                                  ${i === 0 && animateFirstSlide ? "animate-fade-in" : ""}`}
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="text-3xl font-bold text-[#FCDD5A]">
                        {slide.stats.value}
                      </div>
                      <div className="text-sm text-gray-300">
                        {slide.stats.label}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#FCDD5A] to-transparent blur-3xl" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </div>

    </section>
  );
}