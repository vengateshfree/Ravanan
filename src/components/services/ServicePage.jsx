import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Download, Plus, Minus, Clock, Shield, Star } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import parcel10 from '../../assets/titleimage.png';
import parcel17 from "../../assets/parcel17.jpg";
import parcel9 from '../../assets/parcel9.jpg'

export default function ServicePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const services = [
    { name: "Bike Transport", path: "/services/bike" },
    { name: "Car Transport", path: "/services/car" },
    { name: "Home Shifting", path: "/services/home" },
    { name: "Office Shifting", path: "/services/office" },
    { name: "Package Moving", path: "/services/package" },
    { name: "Relocation Service", path: "/services/location" },
    { name: "Warhouse Service", path: "/services/warhouse" },
    { name: "Loading & Unloading", path: "/services/loading" },
  ];

  const pageContent = {
    heroImage: parcel9,
    title: "Bike Transportation Services",
    description: [
      "Our Bike Transportation Service is designed to move your two-wheeler safely, efficiently, and without hassle. Whether you are relocating to a new city or sending your bike across states, we ensure secure handling from pickup to delivery using professional packing methods.",
      "With years of experience in two-wheeler logistics, we provide reliable door-to-door bike transport solutions. From proper documentation support to real-time tracking, we make the entire process smooth, transparent, and worry-free.",
    ],
    extraDescription:
      "We follow a structuyellow bike transportation process that includes inspection, professional packing, safe loading, transit monitoring, and careful unloading at the destination. Every bike is handled with precision to ensure it reaches you in perfect condition.",
  };

  const serviceCards = [
    {
      id: 1,
      number: "01",
      title: "Secure Bike Packing",
      desc: "High-quality packing materials are used to protect your bike from scratches, dust, and transit damage.",
      score: "96% SAFETY SCORE",
      icon: Shield,
    },
    {
      id: 2,
      number: "02",
      title: "On-Time Delivery",
      desc: "Our logistics network ensures timely pickup and delivery of your bike across cities and states.",
      score: "98% DELIVERY SCORE",
      icon: Clock,
    },
  ];

  const faqs = [
    {
      question: "Is my bike safe during transportation?",
      answer:
        "Yes, your bike is packed using premium protective materials and handled by trained professionals to ensure complete safety during transit.",
    },
    {
      question: "How long does bike transportation take?",
      answer:
        "Delivery time depends on distance and destination, but we always aim for fast and on-time delivery with regular updates.",
    },
    {
      question: "Can I track my bike shipment?",
      answer:
        "Yes, tracking details are provided so you can monitor your bike shipment in real time.",
    },
    {
      question: "What documents are requiyellow for bike transport?",
      answer:
        "Usually, a copy of the bike RC, insurance, and ID proof are requiyellow. Our team will guide you throughout the process.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url(${parcel10})`,
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 animate-pulse"></div>
        
        {/* Yellow accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-yellow-400 text-black font-bold text-sm tracking-wider">
                PROFESSIONAL SERVICES
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-2xl text-gray-300 font-light">
              Ready to move? We're ready to help.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container - Black Background */}
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-12 px-4">

    {/* Main Content */}
     <Outlet />    
          
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">

                {/* Help CTA */}
          

                   {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-400/5">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-5 font-bold text-lg tracking-wide">
                CONTACT INFO
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-3 flex-shrink-0 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400 mb-1">Email Address</div>
                    <div className="text-gray-400 text-sm break-all">ravananpackersandmovers@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-3 flex-shrink-0 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400 mb-1">Phone Number</div>
                    <div className="text-gray-400 text-sm">+91 73580 95325</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-3 flex-shrink-0 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400 mb-1">Location</div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      Salem (dk),Edappadi to kumarapalayam main road , Thevur , Kaveripatti (post) , 637104.
                    </div>
                  </div>
                </div>
              </div>

          
            </div>
            {/* Services Menu */}
            <div className="bg-gradient-to-br mt-5 from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-yellow-400/5">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-5 font-bold text-lg tracking-wide">
                OUR SERVICES
              </div>
              <div className="p-2">
                {services.map((service, index) => {
                  const isActive = location.pathname === service.path;
                  return (
                    <div
                      key={index}
                      onClick={() => navigate(service.path)}
                      className={`flex items-center justify-between px-5 py-4 my-1 cursor-pointer transition-all duration-300 rounded-xl group
                        ${isActive 
                          ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg shadow-yellow-500/30" 
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400"
                        }
                      `}
                    >
                      <span className="font-medium">{service.name}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? '' : 'group-hover:translate-x-1'}`} />
                    </div>
                  );
                })}
              </div>
            </div>

                <div className="bg-gradient-to-br from-gray-800 to-black p-8 text-center border-t border-yellow-400/20">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-yellow-500/40 hover:scale-110 transition-transform cursor-pointer">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div className="text-xl font-bold mb-3 text-white">Need Assistance?</div>
                <div className="text-sm mb-2 flex items-center justify-center gap-2 text-yellow-400 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>+91 96550 99933</span>
                </div>
                <div className="text-xs flex items-center justify-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>info@Ravananpackersandmovers.com</span>
                </div>
              </div>

       
          </div>

      
        </div>
      </div>
    </>
  );
}
