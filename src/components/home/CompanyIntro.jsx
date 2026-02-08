import { ArrowRight, CheckCircle, Truck, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import parcel12 from "../../assets/parcel12.jpg";

export default function CompanyIntroAlt() {
  const navigate = useNavigate();

  return ( 
    <section className="py-20 bg-gradient-to-b from-black  via-black to-black  text-black/20 relative">

          <div className="absolute top-0 -right-40 w-[500px] h-[500px]  bg-[#FCDD5A]/70 opacity-15 blur-[160px] rounded-full animate-pulse" />
      {/* <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-orange-400 opacity-10 blur-[140px] rounded-full animate-pulse delay-1000" /> */}
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 
            rounded-full bg-primary/20 text-primary text-sm font-semibold">
            <Truck size={16} />
            Ravanan Package & Movers
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
            Reliable Moving Solutions <br />
            That Go The Extra Mile
          </h2>

          <p className="text-gray-300 max-w-xl mb-8">
            At Ravanan Package & Movers, we deliver stress-free relocation with
            professional care, timely execution, and complete transparency.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Professional packing & handling",
              "On-time delivery guaranteed",
              "Affordable & transparent pricing",
              "100% customer satisfaction",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
            <button
            onClick={() => navigate("/services/bike")}
            className="px-8 py-3 rounded-lg font-medium
              border border-primary text-primary
              hover:bg-primary hover:text-white transition
              flex items-center gap-2"
          >
              Get a Free Quote <ArrowRight size={18} />
          </button>
          {/* <button
            onClick={() => navigate("/profile")}
            className="inline-flex items-center gap-3
              px-8 py-4 rounded-xl font-semibold
              bg-gradient-to-b from-[#FFE6A3] via-[#FFC94A] to-[#F4A100]
              text-black shadow-[0_6px_0_#C87F00]
              hover:brightness-105 transition"
          >
            Get a Free Quote
            <ArrowRight />
          </button> */}
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={parcel12}
            alt="Ravanan Movers"
            className="rounded-3xl object-cover w-full h-[480px]"
          />

          {/* FLOATING STATS */}
          <div className="absolute -bottom-8 left-6 bg-white text-black
            rounded-2xl px-6 py-4 shadow-xl flex gap-6">
            <div>
              <h4 className="text-2xl font-bold">10+</h4>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">1000+</h4>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
