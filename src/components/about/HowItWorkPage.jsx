import React from 'react'
import CompanyIntro from '../home/CompanyIntro'
import OurProcess from '../home/OurProcess'
import Service from '../home/Service'
import Testimonial from '../home/Testimonial'
import parcel10 from '../../assets/titleimage.png';
import { useHead } from '@unhead/react'

function HowItWorkPage() {

   useHead({
        title: 'How It Works',
      })

  return (
    <div>
      
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
                          How It  <span className="text-yellow-200"> Works </span>
                        </h1>
                        <p className="text-xl text-white/90 font-light">Ready to move? We're ready to help.</p>
                      </div>
                    </div>
                  </div>
   

      
          <OurProcess />
          <Service />
          <Testimonial />
           <CompanyIntro />
    </div>
  )
}

export default HowItWorkPage