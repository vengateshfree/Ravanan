
import { Clock, Minus, Plus, Server, Shield, Star } from "lucide-react";
import React, { useState } from "react";

import parcel20 from "../../assets/parcel20.jpg";

import parcel10 from '../../assets/offimage.jpeg';
import link7 from '../../assets/link7.jpeg';
import { useHead } from "@unhead/react";
function OfficePage() {


   useHead({
      title: 'Office Shifting Service',
    })

  const [openFaq, setOpenFaq] = useState(null);


  const pageContent = {
  heroImage: link7,
  title: "Office Shifting Services",
  description: [
    "Our Office Shifting Service is designed to relocate your workspace efficiently with minimal downtime. Whether you are moving a small office or a large corporate setup, we ensure a smooth and well-coordinated transition.",
    "From IT equipment and office furniture to confidential files and workstations, our trained professionals handle every item with precision. We focus on organized execution, timely delivery, and business continuity throughout the relocation process.",
  ],
  extraDescription:
    "We follow a structured office relocation process that includes planning, labeling, secure packing, safe transportation, and systematic setup at the new location. Our goal is to help your business resume operations quickly and seamlessly.",
};


const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "IT & Equipment Handling",
    desc: "Sensitive IT assets, servers, and electronics are packed and transported using anti-static and protective materials.",
    score: "99% DATA SAFETY",
    icon: Server, // PERFECT for IT assets & servers
  },
  {
    id: 2,
    number: "02",
    title: "Minimal Business Downtime",
    desc: "Our planned relocation approach ensures faster setup and reduced operational disruption.",
    score: "98% ON-TIME COMPLETION",
    icon: Clock, // time + efficiency
  },
];

const faqs = [
  {
    question: "Do you handle IT equipment and servers?",
    answer:
      "Yes, we specialize in safely relocating computers, servers, networking equipment, and other sensitive IT assets.",
  },
  {
    question: "How do you minimize office downtime?",
    answer:
      "We plan the move in phases, use proper labeling, and coordinate closely with your team to ensure a fast and organized setup.",
  },
  { 
    question: "Is office equipment insured during shifting?",
    answer:
      "Yes, transit insurance options are available to protect office assets against unforeseen damage during relocation.",
  },
  {
    question: "Can you handle large corporate office moves?",
    answer:
      "Absolutely. We have the expertise and resources to manage small, medium, and large-scale office relocations efficiently.",
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
                className="w-full h-full object-center  group-hover:scale-105 transition-transform duration-500"
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

export default OfficePage;
