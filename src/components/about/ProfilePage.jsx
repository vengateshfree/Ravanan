

import React from "react";

import parcel10 from '../../assets/parcel10.jpg'
import parcel3 from '../../assets/parcel25.jpg'
import parcel5 from '../../assets/parcel23.jpg'
import parcel7 from '../../assets/parcel33.jpg'

function ProfilePage() {
  return ( 
   <div className="bg-black">

    
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
                     Company <span className="text-yellow-200">& Profile </span>
                  </h1>
                  <p className="text-xl text-white/90 font-light">Your trusted partner for seamless relocations across Tamil Nadu.</p>
                </div>
              </div>
            </div>
  {/* HERO */}
  {/* <div
    className="relative h-[420px] flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${parcel10})`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
        ABOUT US
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Company <span className="text-yellow-400">Profile</span>
      </h1>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Your trusted partner for seamless relocations across Tamil Nadu
      </p>
    </div>
  </div> */}


  

  {/* CONTENT */}
  <section className="max-w-7xl mx-auto px-4 py-16">

       <div className="text-center mt-10 mb-24">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
        Our Profile
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Delivering Excellence,  <span className="text-yellow-400">Every Time</span>
      </h1>
    </div>
    
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-6">

        {/* Company Profile - Featured Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
          <div className="relative bg-zinc-900 rounded-2xl p-8 border border-yellow-400/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">
                🏢
              </div>
              <h2 className="text-2xl font-bold text-yellow-400">Our Company Profile</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Sakthi Traders, your trusted partner for seamless packing and moving services across Tamil Nadu and beyond. Whether you're relocating your home or workplace within cities like Madurai, Coimbatore, Chennai, or moving interstate, we specialise in handling household, office, and industrial goods with utmost care.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-zinc-800">
          <p className="text-gray-300 leading-relaxed mb-6">
            Welcome to Sakthi Traders, your trusted partner for seamless packing and moving services across Tamil Nadu and beyond. Whether you're relocating your home or workplace within cities like Madurai, Coimbatore, Chennai, or moving interstate, we specialise in handling household, office, and industrial goods with utmost care. Traders for a smooth, safe, and stress-free relocation experience.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We recognise that moving can feel overwhelming — especially when you're unfamiliar with the area. That's why we act as your guiding partner, offering verified moving solutions, transparent pricing, and dedicated support every step of the way.
          </p>
        </div>

        {/* Leadership Values */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span className="text-white">Our Team Excellence</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Well trained in modern packing techniques",
                "Enthusiastic and customer-friendly",
                "Committed to delivering your goods safely and on time",
                "Equipped to handle every step — from packing to final placement"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 transition mt-1">
                    <span className="text-yellow-400 group-hover:text-black transition text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Storage Solutions */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-white">Storage & Warehousing</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Whether your move is local or long-distance, we also offer secure temporary storage and warehousing solutions so your belongings remain safe during the transition. Our storage services cater to both short-term and long-term needs, offering flexibility and peace of mind.
          </p>
        </div>

        {/* Strength & Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Our Strength */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl"></div>
            <div className="relative bg-black rounded-2xl p-6 m-[2px]">
              <h2 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                <span>💪</span> Our Strength
              </h2>
              <div className="space-y-3">
                {[
                  "Skilled relocation professionals",
                  "Cost-effective solutions",
                  "Wide service network",
                  "Complete care of goods"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">▸</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-yellow-400/20">
            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-yellow-400">⭐</span> Why Choose Us?
            </h2>
            <div className="space-y-3">
              {[
                { icon: "⚡", text: "On-time delivery" },
                { icon: "🛡️", text: "Maximum safety standards" },
                { icon: "💎", text: "Transparent pricing" },
                { icon: "🎯", text: "End-to-end relocation support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-700/50 transition">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT IMAGES */}
      <div className="space-y-6 lg:sticky lg:top-24 h-fit">
        {[parcel3, parcel5, parcel7].map((img, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800">
              <img
                src={img}
                alt="Packers and Movers Service"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold">Professional Moving Service</p>
              <p className="text-gray-400 text-xs">Trusted across Tamil Nadu</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
  );
}

export default ProfilePage;
