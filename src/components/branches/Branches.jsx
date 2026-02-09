import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, ArrowRight, Building2, MapPinned } from 'lucide-react';
import parcel9 from '../../assets/parcel9.jpg';
import parcel10 from '../../assets/parcel10.jpg';
import parcel24 from '../../assets/parcel24.jpg';
import parcel25 from '../../assets/parcel25.jpg';
import { useNavigate } from 'react-router-dom';

export default function Branches() {
  const navigate = useNavigate();

  const branches = [
    {
      name: "Gobichettipalayam Branch Office",
      address: "D/O Thangaraj, 44, Neelampayalam, Kollapanur, Gobichettipalayam, Getticheyur, Erode District, Tamil Nadu – 638110",
      phone: "+91 96550 99911, +91 96550 99933",
      email: "info@Ravananpackersandmovers.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501243.05649920995!2d76.99168377998062!3d11.041522533112273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90900755f7a95%3A0x9b3b4296f4d1f443!2sThangaraj%20Home!5e0!3m2!1sen!2sin!4v1770134039246!5m2!1sen!2sin",
      image: parcel9
    },
    {
      name: "Erode Branch Office",
      address: "5/287 – 22, MGR Nagar, Near Bannari Amman Sugars, Alathukombai, Erode – 638 401, Tamil Nadu",
      phone: "+91 96550 99911, +91 96550 99933",
      email: "info@Ravananpackersandmovers.com",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.410214672231!2d77.23011207587654!3d11.54187648867327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3f5f1c4dcb%3A0x9a7c8b8f3d2e6a1f!2sBannari%20Amman%20Sugars%2C%20Alathukombai!5e0!3m2!1sen!2sin!4v1766763614832!5m2!1sen!2sin",
      image: parcel10
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      
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
                          Find Us <span className="text-yellow-200">Nearby</span>
                        </h1>
                        <p className="text-xl text-white/90 font-light">Ready to move? We're ready to help.</p>
                      </div>
                    </div>
                  </div>
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl"></div>
        </div>

        
        
        {/* <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
              <Building2 className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700 font-bold text-sm tracking-wider">OUR BRANCH NETWORK</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              Find Us Nearby
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ravanan Packers & Movers serving across Tamil Nadu with dedicated branches for your convenience
            </p>
          </div>
        </div> */}
      </div>
    <div className="bg-black">
  {/* Company Info Banner */}
  <div className="bg-gradient-to-br from-gray-900 to-black border-y-4 border-yellow-400 shadow-xl">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ravanan Packers & Movers
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Professional packing and moving services with care and reliability. We ensure your belongings reach safely to their destination with our expert team and modern equipment. Trusted by thousands across Tamil Nadu.
          </p>
        </div>
        <div className="bg-yellow-400 rounded-2xl p-6 text-center shadow-2xl hover:shadow-yellow-400/20 transition-all">
          <Clock className="w-12 h-12 text-black mx-auto mb-3" />
          <p className="text-black font-bold text-lg">Available 24/7</p>
          <p className="text-gray-900 text-sm mt-1">Round the clock service</p>
        </div>
      </div>
    </div>
  </div>

  {/* Branches Section */}
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Our Branches 
      </h2>
      <p className="text-xl text-gray-400">
        Visit us at our convenient locations across Tamil Nadu
      </p>
    </div>

    {/* Branch Cards */}
    <div className="grid lg:grid-cols-2 gap-8">
      {branches.map((branch, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl shadow-2xl overflow-hidden hover:shadow-yellow-400/20 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400/50 hover:border-yellow-400"
        >
          {/* Branch Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block bg-black px-4 py-1 rounded-full mb-3">
                  <span className="text-yellow-400 font-bold text-sm">Branch {index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {branch.name}
                </h3>
              </div>
              <MapPinned className="w-10 h-10 text-black" />
            </div>
          </div>

          {/* Map */}
          <div className="relative h-72 bg-gray-900">
            <iframe
              src={branch.mapEmbed}
              className="absolute inset-0 w-full h-full opacity-90"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details */}
          <div className="p-6 space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wide">Location</p>
                <p className="text-gray-300 leading-relaxed">{branch.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wide">Phone</p>
                <a 
                  href={`tel:${branch.phone}`}
                  className="text-white hover:text-yellow-400 font-semibold text-lg hover:underline transition-colors"
                >
                  {branch.phone}
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 flex items-center justify-center gap-2 group">
                <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                Directions
              </button>
              <button className="bg-white hover:bg-gray-100 text-black py-3 px-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-white/50 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* CTA Section */}
  <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 sm:p-14 border-2 border-yellow-400">
        <div className="inline-block bg-yellow-400 px-6 py-2 rounded-full mb-6">
          <span className="text-black font-bold text-sm tracking-wider">GET IN TOUCH</span>
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Ready to Move?
        </h3>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Contact Ravanan Packers & Movers today for a free quote and experience hassle-free, reliable moving services across Tamil Nadu
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-yellow-400/50 flex items-center gap-3 group"
          >
            Request Free Quote
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-white/50 border-2 border-white">
            Call +91 96550 99911
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}