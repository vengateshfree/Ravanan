import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import CustomSelect from './CustomSelect';
import parcel10 from '../../assets/titleimage.png';
 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Bike Transportation",
    "Car Transportation",
    "Home Shifting",
    "Office Shifting",
    "Package Moving",
    "Relocation Services",
    "Warehouse Services",
    "Loading & Unloading"
  ];

  const locations = [
    'Salem, Tamil Nadu',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.service && formData.location && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
 <div className="min-h-screen bg-black mt-6 md:mt-10">
  {/* Header Section */}
  <div
    className="relative bg-cover bg-center min-h-[300px] sm:min-h-[380px] md:min-h-[450px] flex items-center"
    style={{
      backgroundImage: `url(${parcel10})`,
    }}
  >
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-yellow-200/20"></div>

    {/* Yellow accent bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-yellow-200"></div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="border-l-4 sm:border-l-8 border-yellow-200 pl-4 sm:pl-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
          LET'S <span className="text-yellow-200">TALK</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light">
          Ready to move? We're ready to help.
        </p>
      </div>
    </div>
  </div>



      



     {/* <div className="bg-gray-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-100 transition-colors">
              <Phone className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone</h3>
            <p className="text-2xl font-bold text-indigo-600 mb-2">+91 96550 99911</p>
            <p className="text-sm text-gray-500">Mon - Sat, 9AM - 6PM</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-colors">
              <Mail className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
            <p className="text-sm font-medium text-purple-600 break-all mb-2">info@Ravananpackersandmovers.com</p>
            <p className="text-sm text-gray-500">24/7 Support</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-100 transition-colors">
              <MapPin className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Gobichettipalayam, Tamil Nadu – 638110</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Send us a message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none mb-6"
          ></textarea>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-3">
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div> */}

     <div className="bg-black py-20 px-4 relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg">We're here to help with your moving needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 border-l-4 border-yellow-50 rounded-r-2xl p-6 hover:bg-gray-750 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call Us</p>
                  <p className="text-white text-2xl font-bold">+91 7358095325 , +91 6379300624</p>
                  <p className="text-gray-500 text-sm">Mon - Sun 24 Hrs</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border-l-4 border-yellow-50 rounded-r-2xl p-6 hover:bg-gray-750 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Us</p>
                  <p className="text-white text-lg font-semibold break-all">ravananpackersandmovers@gmail.com</p>
                  <p className="text-gray-500 text-sm">24/7 Support Available</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border-l-4 border-yellow-50 rounded-r-2xl p-6 hover:bg-gray-750 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Visit Us</p>
                  <p className="text-white text-sm leading-relaxed">
                    Salem (dk),Edappadi to kumarapalayam main road, Thevur, Kaveripatti (post), 637104.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 border border-cyan-400/30 rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold text-white mb-2">Quick Response Guarantee</p>
              <p className="text-gray-400">We reply within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>
                <div className="lg:col-span-2">
            <div className=" rounded-2xl shadow-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                     
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                       className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
             
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                 
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                             className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
             
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      {/* <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label> */}

                      <CustomSelect services={services} formData={formData} setFormData={setFormData} thisOne="service" />
                        
                    </div>

                    {/* Location */}
                    <div>
                      {/* <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Location *
                      </label> */}
                           <CustomSelect services={locations} formData={formData} setFormData={setFormData} thisOne="location" />
                        
                      {/* <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select your location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select> */}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-6">
                    {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label> */}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                         className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
             
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                      <button
                      onClick={handleSubmit}
                      className="w-full   bg-gradient-to-b from-[#FFE6A3] via-[#FFC94A] to-[#F4A100]
         text-black  font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25">
                <span className="text-lg">Send Message</span>
                <Send className="w-5 h-5" />
              </button>
                  </div>
                </div>
              )}
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </div>

  
     
      {/* Map Section */}
      <div className="border-t-8 border-yellow-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.328400615507!2d77.43712207588007!3d11.454195688748585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d8a0b1c8f0b%3A0x9c4b2c8b8a9d5f3f!2sGobichettipalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614831!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
