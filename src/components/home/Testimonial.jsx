import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSnowSmooth() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Coimbatore",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Ravanan Trade & Packers handled my home shifting very smoothly. Packing quality was excellent.",
      rating: 5,
    },
    {
      name: "Ramesh Kumar",
      location: "Erode",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Professional team, safe transport and polite staff. Highly recommended. Very satisfied clients and recommended.",
      rating: 5,
    },
    {
      name: "Suresh V",
      location: "Gobichettipalayam",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Affordable pricing and excellent service. Very satisfied clients and recommended.",
      rating: 5,
    },
    {
      name: "Anitha R",
      location: "Salem",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "On-time delivery and safe packing. Truly reliable movers. Very satisfied clients and recommended.",
      rating: 5,
    },
  ];

  // Group testimonials into pairs
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  return (
    <div className="relative py-20 px-4 overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Snow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-snowfall text-amber-300"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          >
            ❆
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium tracking-wider">
              TESTIMONIALS
            </span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={800}
          swipeable={true}
          emulateTouch={true}
          showArrows={true}
          className="testimonial-carousel"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )
          }
        >
          {slides.map((pair, index) => (
            <div key={index} className="px-4 pb-12">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {pair.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    {/* Quote Icon Background */}
                    <div className="relative mb-6">
                      <Quote className="w-16 h-16 text-yellow-400/20 absolute -top-2 -left-2" />
                      <Quote className="w-12 h-12 text-yellow-400 relative z-10" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">
                      "{item.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-yellow-400/30 group-hover:ring-yellow-400/50 transition-all duration-300">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900"></div> */}
                      </div>
                      <div className="text-left">
                        <h4 className="text-white font-bold text-lg">
                          {item.name}
                        </h4>
                        <p className="text-yellow-300 text-sm flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1000+", label: "Moves Completed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes snowfall {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
          }
          100% {
            top: 110%;
            transform: translateX(100px) rotate(360deg);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-snowfall {
          animation: snowfall linear infinite;
        }

        /* Custom Carousel Styles */
        :global(.testimonial-carousel .control-dots) {
          bottom: -40px;
        }

        :global(.testimonial-carousel .dot) {
          background: rgba(255, 255, 255, 0.3);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 6px;
          transition: all 0.3s;
        }

        :global(.testimonial-carousel .dot.selected) {
          background: linear-gradient(135deg, #60a5fa, #22d3ee);
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}