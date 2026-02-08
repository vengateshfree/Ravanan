import { Star, ClipboardList, Package, Truck, Home, ArrowRight } from "lucide-react";

export default function OurProcessWithIcons() {
  const steps = [
    {
      step: "01",
      title: "Booking",
      desc: "Confirm your moving request with our instant booking system",
      icon: ClipboardList,
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      step: "02",
      title: "Packing",
      desc: "Expert team handles safe & professional packing",
      icon: Package,
      color: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      step: "03",
      title: "Transport",
      desc: "Fast & secure transportation with real-time tracking",
      icon: Truck,
      color: "from-orange-500 to-red-500",
      delay: "200ms"
    },
    {
      step: "04",
      title: "Delivery",
      desc: "On-time doorstep delivery with care",
      icon: Home,
      color: "from-green-500 to-emerald-500",
      delay: "300ms"
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      
      {/* Animated Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-yellow-400/20 blur-[120px] rounded-full animate-pulse" 
           style={{ animationDuration: "4s" }}></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-yellow-300/15 blur-[100px] rounded-full animate-pulse" 
           style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-yellow-200/10 blur-[90px] rounded-full animate-pulse" 
           style={{ animationDuration: "6s", animationDelay: "2s" }}></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2
            rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 
            border border-yellow-400/30 backdrop-blur-sm
            text-yellow-300 text-sm font-bold tracking-wider
            hover:scale-105 transition-transform duration-300">
            <Star size={16} className="animate-spin" style={{ animationDuration: "8s" }} />
            OUR PROCESS
            <Star size={16} className="animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
          </div>

          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 
            bg-clip-text text-transparent leading-tight">
            Simple. Safe. Reliable.
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience seamless moving with our streamlined 4-step process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative"
                style={{ animationDelay: item.delay }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-3xl
                  bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                  backdrop-blur-xl border border-white/10
                  hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/20
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 h-full
                  before:absolute before:inset-0 before:rounded-3xl 
                  before:bg-gradient-to-br before:from-yellow-400/0 before:to-yellow-400/0
                  hover:before:from-yellow-400/5 hover:before:to-transparent
                  before:transition-all before:duration-500">
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full
                    bg-gradient-to-br from-yellow-400 to-yellow-500
                    flex items-center justify-center
                    text-black font-black text-sm
                    shadow-lg shadow-yellow-400/50
                    group-hover:scale-110 group-hover:rotate-12
                    transition-all duration-300">
                    {item.step}
                  </div>

                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br bg-white/30 backdrop-blur-2xl 
                      flex items-center justify-center mx-auto
                      group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-500 shadow-lg`}>
                      <Icon size={36} className="text-white" strokeWidth={2.5} />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br 
                      blur-xl opacity-0 group-hover:opacity-50 mx-auto
                      transition-opacity duration-500`}></div>
                  </div>

                  {/* Step Label */}
                  <div className="text-xs text-yellow-400 font-bold mb-3 tracking-widest uppercase">
                    Step {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    transform translate-x-0 group-hover:translate-x-2">
                    Learn more
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Arrow Between Steps (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-10">
                    <ArrowRight className="text-yellow-400/50" size={24} strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group px-8 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-500
            text-black font-bold text-lg
            hover:shadow-2xl hover:shadow-yellow-400/50
            hover:scale-105 active:scale-95
            transition-all duration-300
            flex items-center gap-3 mx-auto">
            Start Your Move Today
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}