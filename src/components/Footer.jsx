import { ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Ravanan Packers & Movers" className="w-60" />
            {/* <div>
              <h2 className="text-white text-xl font-semibold">
                Ravanan
              </h2>
              <p className="text-sm text-gray-400">
                Packers & Movers
              </p>
            </div> */}
          </div>

          <p className="text-sm leading-6 text-gray-400 max-w-sm">
            Ravanan Packers & Movers provides safe, reliable and professional
            packing, moving, transportation and warehousing services across
            Tamil Nadu.
          </p>

          {/* Working Hours */}
          <h3 className="mt-10 text-yellow-200 font-semibold uppercase">
            Working Hours
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-3"></div>

          <p className="text-sm text-gray-300">
            Mon–Fri ........ 8:00 am – 06:00 pm <br />
            Sat–Sun ........ 8:00 am – 12:00 pm
          </p>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-yellow-200 font-semibold uppercase">
            Our Services
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-4"></div>

          <ul className="space-y-3 text-sm">
            {[
              "Bike Transportation",
              "Car Transportation",
              "Home Shifting",
              "Office Shifting",
              "Packing & Moving",
              "Warehouse Services",
              "Loading & Unloading",
              "Insurance Services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-yellow-200 transition cursor-pointer"
              >
                <ChevronRight size={14} className="text-yellow-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-200 font-semibold uppercase">
            Quick Links
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-4"></div>

          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "Branches",
              "Services",
              "About Us",
              "Blog",
              "Our Works",
              "Contact Us",
              "Get Started",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-yellow-200 transition cursor-pointer"
              >
                <ChevronRight size={14} className="text-yellow-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INSTAGRAM NEWS */}
        <div>
          <h3 className="text-yellow-200 font-semibold uppercase">
            Instagram News
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-4"></div>

          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-full h-20 bg-gray-800 rounded-md
                hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ravanan Packers & Movers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
