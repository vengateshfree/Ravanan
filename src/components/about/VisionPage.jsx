import React from "react";
import parcel10 from '../../assets/parcel10.jpg'
import parcel3 from '../../assets/parcel25.jpg'
import parcel5 from '../../assets/parcel23.jpg'
import parcel7 from '../../assets/parcel33.jpg'

function VisionPage() {
  return (
    <div className="bg-gray-50">

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
                    Vision  <span className="text-yellow-200">& Mission </span>
                  </h1>
                  <p className="text-xl text-white/90 font-light">Ready to move? We're ready to help.</p>
                </div>
              </div>
            </div>

      {/* HERO */} 
 

      {/* CONTENT */}
   <section className="bg-black text-white px-4 py-16">
  <div className="max-w-7xl mx-auto">
    
    {/* Header with gradient accent */}
    <div className="text-center mb-16">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
        WHO WE ARE
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Building Trust Through <span className="text-yellow-400">Excellence</span>
      </h1>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      
      {/* LEFT COLUMN */}
      <div className="space-y-6">
        
        {/* Vision Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
          <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-yellow-400">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Velan Packers & Movers, our vision is to become a trusted leader
              in relocation and logistics across Tamil Nadu and India by
              delivering innovative, reliable, and customer-focused moving
              solutions.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
          <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                🚀
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We strive to build long-term relationships with customers and
              partners through ethical practices, teamwork, and service
              excellence—ensuring every move is smooth, safe, and stress-free.
            </p>
          </div>
        </div>

             {/* Why Choose Us - Highlighted */}
        <div className="relative border rounded-2xl border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ">
          <div className="absolute inset-0 rounded-2xl"></div>
          <div className="relative bg-black rounded-2xl p-8 m-[2px]">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", text: "On-time delivery" },
                { icon: "🛡️", text: "Maximum safety" },
                { icon: "💎", text: "Transparent pricing" },
                { icon: "🎯", text: "End-to-end support" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[parcel3, parcel7].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group h-48"
            >
              <img
                src={img}
                alt="Service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        
        {/* Leadership Values */}
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-yellow-400">★</span> Leadership Values
          </h2>
          <div className="space-y-4">
            {[
              "Collaboration & teamwork",
              "Integrity & transparency",
              "Accountability & responsibility",
              "Passion for service",
              "Uncompromised quality",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition">
                  <span className="text-yellow-400 group-hover:text-black transition">✓</span>
                </div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Commitment to Excellence
          </h2>
          <div className="space-y-3">
            {[
              "Taking initiative and delivering results",
              "Adapting to challenges with confidence",
              "Continuous improvement & innovation",
              "Ethical operations and customer respect",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">▸</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

   

        {/* Single Large Image */}
        <div className="relative overflow-hidden rounded-2xl h-64 group">
          <img
            src={parcel5}
            alt="Professional Service"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block font-bold">
              Professional Moving Services
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default VisionPage;
