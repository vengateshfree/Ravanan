import {
  Bike,
  Car,
  Home,
  Building2,
  ArrowRight,
  Star,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import work16 from "../../assets/work16.jpeg";
import parcel34 from "../../assets/parcel34.jpg";
import work8 from "../../assets/work8.jpeg";
import work22 from "../../assets/work22.jpeg";
import link5 from "../../assets/link5.jpeg";
import link6 from "../../assets/link6.jpeg";
import link7 from "../../assets/link7.jpeg";
import link8 from "../../assets/link8.jpeg";
import link20 from "../../assets/link20.jpeg";







const services = [
  {
    title: "Bike Transportation",
    desc: "Safe and reliable bike transportation across cities.",
    icon: Bike,
    url: "/services/bike",
    image: link6,
  },
  {
    title: "Car Transportation",
    desc: "Door-to-door car transport with complete safety.",
    icon: Car,
    url: "/services/car",
    image: link20,
  },
  {
    title: "Home Shifting",
    desc: "Professional and stress-free home shifting services.",
    icon: Home,
    url: "/services/home",
    image: link8,
  },
  {
    title: "Office Shifting",
    desc: "Fast, secure office relocation with minimal downtime.",
    icon: Building2,
    url: "/services/office",
    image: link7,
  },
];
 
export default function ServiceAlt() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative">

      
      
    <div className=" bg-gradient-to-b z-10 from-yellow-100 from-5% to-white to-90%  absolute top-0  h-[300px] w-screen  text-white">

    </div>

      <div className="max-w-7xl mx-auto px-6 z-20 relative mt-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5
            rounded-full bg-primary text-white text-sm font-semibold">
            FAVOURITE CONSIGNMENT
             <Truck  size={16} />
            {/* <Star size={14} className="animate-spin" style={{ animationDuration: "6s" }} /> */}
          </div>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Secured, Affordable & Reliable
            <br /> Logistics Support
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover
                    group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t 
                  from-black/80 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 mb-4 rounded-xl
                    bg-primary/20 flex items-center justify-center text-primary">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-200 mb-4">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => navigate(item.url)}
                    className="inline-flex items-center gap-2
                      text-sm font-semibold text-primary hover:text-yellow-400 transition"
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}


        <div className="flex justify-center mt-14">
              <button
              
            onClick={() => navigate("/services/bike")}
            // onClick={() => navigate("/profile")}
            className="inline-flex items-center gap-3
              px-8 py-4 rounded-xl font-semibold
              bg-gradient-to-b from-[#FFE6A3] via-[#FFC94A] to-[#F4A100]
              text-black shadow-[0_6px_0_#C87F00]
              hover:brightness-105 transition"
          >
     
            See All Services <ArrowRight size={18} />
          </button>
          {/* <button
            onClick={() => navigate("/services/bike")}
            className="px-8 py-3 rounded-lg font-medium
              border border-primary text-primary
              hover:bg-primary hover:text-white transition
              flex items-center gap-2"
          >
            See All Services <ArrowRight size={18} />
          </button> */}
        </div>

      </div>
    </section>
  );
}
