import { ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";
import work7 from "../assets/work7.jpeg";
import work8 from "../assets/work8.jpeg";
import work9 from "../assets/work9.jpeg";
import work10 from "../assets/work10.jpeg";
import link1 from "../assets/link1.jpeg";
import link2 from "../assets/link2.jpeg";
import link3 from "../assets/link3.jpeg";
import link4 from "../assets/link4.jpeg";
import link5 from "../assets/link5.jpeg";

const Footer = () => {

  const works = [
  // work1,
  work2,
  work3,
  // work4,
  work5,
  // work6,
  // work7,
  work8,
  work9,
  link1,
  link2,
  link3,
  link4,
];


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
            Our Photos
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-4"></div>

     <div className="grid grid-cols-3 gap-3">
  {works.map((img, i) => (
    <div
      key={i}
      className="w-full h-20 overflow-hidden rounded-md bg-black
                 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={img}
        alt={`Work ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto   flex flex-col items-center " >
          <h3 className="mt-10 text-yellow-200 font-semibold uppercase">
            Address
          </h3>
          <div className="w-10 h-[2px] bg-yellow-200 my-3"></div>

          <p className="text-sm text-gray-300">
          Salem (dk),Edappadi to kumarapalayam main road , Thevur , Kaveripatti (post) , 637104.
          </p>
            <p className="text-sm text-gray-300">
              Phone: 6379300624, 7358095325
          </p>
            <p className="text-sm text-gray-300">
              Email: ravananpackersandmovers@gmail.com
          </p>
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
