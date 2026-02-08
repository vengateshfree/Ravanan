import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Quote } from "lucide-react";

export default function TestimonialsSnowSmooth() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Coimbatore",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Ravanan Trade & Packers handled my home shifting very smoothly. Packing quality was excellent.",
    },
    {
      name: "Ramesh Kumar",
      location: "Erode",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text:
        "Professional team, safe transport and polite staff. Highly recommended. Very satisfied Clients amd recommended.",
    },
    {
      name: "Suresh V",
      location: "Gobichettipalayam",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text:
        "Affordable pricing and excellent service. Very satisfied Clients amd recommended.",
    },
    {
      name: "Anitha R",
      location: "Salem",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text:
        "On-time delivery and safe packing. Truly reliable movers. Very satisfied Clients amd recommended.",
    },
  ];

  // Group testimonials into pairs
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  return (
    <section
      className="relative py-28 text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7734597/pexels-photo-7734597.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-2xl font-bold tracking-widest">
            CLIENTS SAY
          </h2>
          <div className="w-12 h-[2px] bg-white mx-auto mt-3"></div>
        </div>

        {/* Carousel */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={700}
          swipeable
          emulateTouch
          showArrows
          renderIndicator={(onClickHandler, isSelected, index) => (
            <li
              key={index}
              onClick={onClickHandler}
              className={`inline-block mx-1 h-2 mt-50 rounded-full cursor-pointer transition-all ${
                isSelected ? "w-8 bg-primary" : "w-2 bg-gray-400"
              }`}
            />
          )}
        >
          {slides.map((pair, index) => (
            <div key={index} className="px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pair.map((item, i) => (
                  <div className="relative overflow-visible">
  <div
    className="relative bg-white text-gray-700 rounded-xl 
               px-10 pt-16 pb-10 shadow-xl mt-12"
  >
    {/* Avatar */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-full 
                   border-4 border-orange-500 
                   bg-white shadow-lg"
      />
    </div>

    {/* Quote icon */}
    <Quote
      className="absolute top-6 right-6 text-gray-300"
      size={28}
    />

    <h3 className="text-yellow-300 font-bold text-lg text-center">
      {item.name},{" "}
      <span className="text-sm text-gray-500">
        {item.location}
      </span>
    </h3>

    <p className="text-center mt-4 leading-relaxed">
      {item.text}
    </p>
  </div>
</div>

                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
