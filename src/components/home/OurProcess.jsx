import { Star, ClipboardList, Package, Truck, Home } from "lucide-react";

export default function OurProcessWithIcons() {
  const steps = [
    {
      step: "01",
      title: "Booking",
      desc: "Confirm your moving request",
      icon: ClipboardList,
    },
    {
      step: "02",
      title: "Packing",
      desc: "Safe & professional packing",
      icon: Package,
    },
    {
      step: "03",
      title: "Transport",
      desc: "Fast & secure transportation",
      icon: Truck,
    },
    {
      step: "04",
      title: "Delivery",
      desc: "On-time doorstep delivery",
      icon: Home,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5
            rounded-full bg-primary/20 text-primary text-sm font-semibold">
            OUR PROCESS
            <Star size={14} className="animate-spin" style={{ animationDuration: "6s" }} />
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Simple. Safe. Reliable.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="text-center p-8 rounded-2xl
                  bg-white/5 backdrop-blur
                  hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center
                  rounded-full bg-primary/20 text-primary">
                  <Icon size={28} />
                </div>

                {/* Number */}
                <div className="text-sm text-primary font-semibold mb-2">
                  STEP {item.step}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
