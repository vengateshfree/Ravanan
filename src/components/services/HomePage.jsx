
import { Clock, Minus, PackageCheck, Plus, Shield, Star, Truck } from "lucide-react";
import React, { useState } from "react";

import parcel10 from '../../assets/homeshift.jpeg';
import link8 from '../../assets/link8.jpeg';
import { useHead } from "@unhead/react";

function HomePage() {


   useHead({
        title: 'Home Shifting Service',
      })

  const [openFaq, setOpenFaq] = useState(null);

  

const pageContent = {
  heroImage: link8,
  title: "Home Shifting Services",
  description: [
    "Our Home Shifting Service is designed to make your relocation smooth, safe, and stress-free. Whether you are moving within the city or relocating to another state, we handle every aspect of your household move with care and professionalism.",
    "From packing fragile items to transporting furniture and appliances, our experienced team ensures your belongings are moved securely and delivered on time. We focus on organized planning, careful handling, and complete customer satisfaction.",
  ],
  extraDescription:
    "We follow a systematic home shifting process that includes pre-move inspection, professional packing, safe loading, transportation, unloading, and unpacking. Every item is handled with attention to detail to ensure a damage-free relocation experience.",
};


const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Professional Packing",
    desc: "High-quality packing materials are used to protect furniture, electronics, kitchen items, and fragile goods.",
    score: "98% DAMAGE-FREE MOVES",
    icon: PackageCheck, // packing + safety = perfect fit
  },
  {
    id: 2,
    number: "02",
    title: "Safe & Timely Delivery",
    desc: "Our trained relocation team ensures secure transport and on-time delivery of all household belongings.",
    score: "99% CUSTOMER TRUST",
    icon: Truck, // transport & delivery
  },
];


const faqs = [
  {
    question: "Do you provide packing and unpacking services?",
    answer:
      "Yes, we offer complete packing and unpacking services to ensure your household items are handled safely from start to finish.",
  },
  {
    question: "Is my household goods insured during shifting?",
    answer:
      "Yes, transit insurance is available to cover your belongings against any unexpected damage or loss during relocation.",
  },
  {
    question: "How long does home shifting take?",
    answer:
      "The duration depends on the size of your home and distance of the move, but we always provide a clear timeline in advance.",
  },
  {
    question: "What items should not be moved during home shifting?",
    answer:
      "We recommend not transporting perishable food items, hazardous materials, and valuables such as cash or important documents.",
  },
];



  return (
       <div className="flex-1">
            {/* Title & Description */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-3xl p-10 mb-8 shadow-2xl shadow-yellow-400/5">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                {pageContent.title}
              </h1>

              {pageContent.description.map((text, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-lg mb-5 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden mb-8 h-80 group">
              <img
                src={pageContent.heroImage}
                alt="Bike Transportation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 font-bold">PREMIUM SERVICE</span>
                </div>
              </div>
            </div>

       {/* Extra Description */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-3xl p-10 mb-8 shadow-2xl shadow-yellow-400/5">
              <p className="text-gray-300 text-lg leading-relaxed">
                {pageContent.extraDescription}
              </p>
            </div>  
        

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {serviceCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={card.id} 
                    className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-yellow-400/10"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-6xl font-black text-gray-800 group-hover:text-gray-700 transition-colors">
                        {card.number}
                      </div>
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-4 shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-6 leading-relaxed">
                      {card.desc}
                    </p>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-yellow-500/30">
                      {card.score}
                    </div>
                  </div>
                );
              })}
            </div>

     

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-400/5">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6">
                <h2 className="text-2xl font-bold tracking-wide">Frequently Asked Questions</h2>
              </div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className="border-b border-gray-800 last:border-b-0"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-7 text-left hover:bg-gray-800/50 transition-all group"
                    >
                      <span className="text-base font-semibold text-gray-200 group-hover:text-yellow-400 transition-colors">
                        {faq.question}
                      </span>

                      <div
                        className={`bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-2 transition-all duration-300 ${
                          isOpen ? "rotate-180 scale-110" : "rotate-0"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-black" />
                        ) : (
                          <Plus className="w-5 h-5 text-black" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-7 pb-7 bg-gray-800/30">
                        <p className="text-base text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  );
}

export default HomePage;
