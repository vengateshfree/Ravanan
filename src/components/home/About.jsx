import link10 from "../../assets/link10.jpeg";
import link11 from "../../assets/link11.jpeg";

export default function About() {
  return (
    <section className="bg-yellow-400 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={link10}
              alt="Packing boxes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                <span className="text-white" >
              Setting New Standards In <br />
              The </span> <span className="text-gray-900">Moving Industry</span>
            </h2>

            <p className="mt-6 text-gray-800 max-w-xl">
              Redefining the moving experience with unmatched professionalism,
              reliability, and care. We combine innovative solutions,
              personalized service, and a commitment to excellence to set new
              benchmarks.
            </p>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-5xl font-extrabold text-white">91+</h3>
                <p className="mt-2 text-sm text-gray-900 max-w-[180px]">
                  Our customer satisfaction rate stands at impressive
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-white">1075+</h3>
                <p className="mt-2 text-sm text-gray-900 max-w-[180px]">
                  Helping families and businesses to their new destinations
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-5 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">
              Book Now →
            </button>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">

          {/* QUOTE */}
          <div>
            <p className="text-gray-900 italic max-w-xl text-xl leading-relaxed">
              “Moving isn't just about transporting items, it's about embracing
              change and starting fresh. We're dedicated to ensuring your
              journey is seamless, so you can focus on settling into your new
              beginning.”
            </p>

            <div className="mt-6 border-t border-gray-900/30 pt-4">
              <h4 className="font-bold text-gray-900 text-lg">
                Vasanth
              </h4>
              <p className="text-sm text-gray-800">CEO & Founder</p>
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={link11}
              alt="Household items"
              className="w-full h-[240px] object-top bg-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
