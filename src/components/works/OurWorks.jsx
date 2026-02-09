import React, { useState } from 'react';
import parcel10 from '../../assets/parcel10.jpg'
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


const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = ['All', 'Warehouse', 'Transport', 'Logistic', 'Freight'];

const portfolioItems = [
  { id: 1, image: work1, discount: null },
  { id: 2, image: work2, discount: null },
  { id: 3, image: work3, discount: "20%" },
  { id: 4, image: work4, discount: null },
  { id: 5, image: work5, discount: null },
  { id: 6, image: work6, discount: null },
  { id: 7, image: work7, discount: null },
  { id: 8, image: work8, discount: null },
  { id: 9, image: work9, discount: null },
  { id: 10, image: work10, discount: null },
  { id: 11, image: work11, discount: null },
  { id: 12, image: work12, discount: null },
  { id: 13, image: work13, discount: null },
  { id: 14, image: work14, discount: null },
  { id: 15, image: work15, discount: null },
  { id: 16, image: work16, discount: null },
  { id: 17, image: work17, discount: null },
  { id: 18, image: work18, discount: null },
  { id: 19, image: work19, discount: null },
  { id: 20, image: work20, discount: null },
  { id: 21, image: work21, discount: null },
  { id: 22, image: work22, discount: null },
  { id: 23, image: work23, discount: null },
  { id: 24, image: work24, discount: null },
  { id: 25, image: work25, discount: null },
  { id: 26, image: work26, discount: null },
  { id: 27, image: work27, discount: null },
  { id: 28, image: work28, discount: null },
  { id: 29, image: work29, discount: null },
  { id: 30, image: work30, discount: null },
  { id: 31, image: work31, discount: null },
  { id: 32, image: work32, discount: null },
  { id: 33, image: work33, discount: null },
  { id: 34, image: work34, discount: null },
  { id: 35, image: work35, discount: null },
  { id: 36, image: work36, discount: null }
];


  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFilter(filter);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black ">
      <div
              className="relative bg-cover bg-center h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${parcel10})`,
              }}
            >
              {/* Overlay with diagonal split */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-yellow-200/20"></div>
              
               {/* Yellow accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-200"></div> 
      
              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="border-l-8 border-yellow-200 pl-6">
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                    Our <span className="text-yellow-200">Works</span>
                  </h1>
                  <p className="text-xl text-white/90 font-light">Ready to move? We're ready to help.</p>
                </div>
              </div>
            </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>



      {/* <div
        className="relative bg-cover bg-center h-[400px] flex  text-center items-center mt-10"
        style={{
      backgroundImage: `url(${parcel10})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="h1 font-bold text-white">
            Our Works    ss      </h1>
      
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto">


        
       <div className="text-center  mt-20">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
      Good Works
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Happy Moves Start With   <span className="text-yellow-400"> Us.</span>
      </h1>
    </div>
     


        {/* Portfolio Grid */}
    <div className={`grid grid-cols-1 md:grid-cols-2 bg-black lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
  {portfolioItems.map((item, index) => (
    <div
      key={item.id}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
        />
        
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        
        {/* Bottom Slide-in Title */}
        <div onClick={() => navigate(`/services/bike`)} className="absolute cursor-pointer bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-1">View Services →</p>
        </div>
      </div>
    </div>
  ))}
</div>

      <div className='h-2 bg-amber-200 w-screen mt-20' ></div>
      </div>
    </div>
  );
};

export default OurWorks;