import React, { useState } from 'react';
import parcel10 from '../../assets/titleimage.png';
import work1 from "../../assets/work1.jpeg";
import work2 from "../../assets/work2.jpeg";
import work3 from "../../assets/work3.jpeg";
import work4 from "../../assets/work4.jpeg";
import work5 from "../../assets/work5.jpeg";
import work6 from "../../assets/work6.jpeg";
import work7 from "../../assets/work7.jpeg";
import work8 from "../../assets/work8.jpeg";
import work9 from "../../assets/work9.jpeg";
import work10 from "../../assets/work10.jpeg";
import work11 from "../../assets/work11.jpeg";
import work12 from "../../assets/work12.jpeg";
import work13 from "../../assets/work13.jpeg";
import work14 from "../../assets/work14.jpeg";
import work15 from "../../assets/work15.jpeg";
import work16 from "../../assets/work16.jpeg";
import work17 from "../../assets/work17.jpeg";
import work18 from "../../assets/work18.jpeg";
import work19 from "../../assets/work19.jpeg";
import work20 from "../../assets/work20.jpeg";
import work21 from "../../assets/work21.jpeg";
import work22 from "../../assets/work22.jpeg";
import work23 from "../../assets/work23.jpeg";
import work24 from "../../assets/work24.jpeg";
import work25 from "../../assets/work25.jpeg";
import work26 from "../../assets/work26.jpeg";
import work27 from "../../assets/work27.jpeg";
import work28 from "../../assets/work28.jpeg";
import work29 from "../../assets/work29.jpeg";
import work30 from "../../assets/work30.jpeg";
import work31 from "../../assets/work31.jpeg";
import work32 from "../../assets/work32.jpeg";
import work33 from "../../assets/work33.jpeg";
import work34 from "../../assets/work34.jpeg";
import work35 from "../../assets/work35.jpeg";
import work36 from "../../assets/work36.jpeg";
import { useNavigate } from 'react-router-dom';
import link1 from "../../assets/link1.jpeg";
import link2 from "../../assets/link2.jpeg";
import link3 from "../../assets/link3.jpeg";
import link4 from "../../assets/link4.jpeg";
import link5 from "../../assets/link5.jpeg";
import { useHead } from '@unhead/react';

const OurWorks = () => {


   useHead({
        title: 'Our Works',
      })

  const [isAnimating] = useState(false);
  const navigate = useNavigate();

  const portfolioItems = [
    { id: 1, image: work1 },
    { id: 2, image: work2 },
    { id: 3, image: work3 },
    { id: 4, image: work4 },
    { id: 5, image: work5 },
    { id: 6, image: work6 },
    { id: 7, image: link1 },
    { id: 8, image: work8 },
    { id: 9, image: work9 },
    { id: 10, image: work10 },
    { id: 11, image: work11 },
    { id: 12, image: work12 },
    { id: 13, image: work13 },
    { id: 14, image: work14 },
    { id: 15, image: work15 },
    { id: 16, image: work16 },
    { id: 17, image: work17 },
    { id: 18, image: work18 },
    { id: 19, image: work19 },
    { id: 20, image: work20 },
    { id: 21, image: work21 },
    { id: 22, image: work22 },
    { id: 23, image: work23 },
    { id: 24, image: work24 },
    { id: 25, image: work25 },
    { id: 26, image: work26 },
    { id: 27, image: work27 },
    { id: 28, image: work28 },
    { id: 29, image: work29 },
    { id: 30, image: work30 },
    { id: 31, image: work31 },
    { id: 32, image: work32 },
    { id: 33, image: work33 },
    { id: 34, image: work34 },
    { id: 35, image: work35 },
    { id: 36, image: work36 },
    { id: 37, image: link2 },
    { id: 38, image: link3 },
    { id: 39, image: link4 },
    { id: 40, image: link5 },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center h-[450px] flex items-center"
        style={{ backgroundImage: `url(${parcel10})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-yellow-200/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-200"></div>

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="border-l-8 border-yellow-200 pl-6">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="text-yellow-200">Works</span>
            </h1>
            <p className="text-xl text-white/90">Ready to move? We're ready to help.</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Good Works
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Happy Moves Start With <span className="text-yellow-400">Us.</span>
          </h1>
        </div>

        {/* GRID */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 transition-all ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt="work"
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition"
                />

                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform"></div>

                <div
                  onClick={() => navigate(`/services/bike`)}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-white">View Service</h3>
                  <p className="text-gray-300 text-sm">View Services →</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ FIXED FOOTER BAR */}
        <div className="h-2 bg-amber-200 w-full mt-20"></div>
      </div>
    </div>
  );
};

export default OurWorks;
