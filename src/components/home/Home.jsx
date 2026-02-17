import React from 'react'
import HeroCarousel from '../Car'
import Welcome from './Welcome'
import Navbar from '../Navbar'
import CompanyIntro from './CompanyIntro'
import OurProcess from './OurProcess'
import Service from './Service'
import Testimonial from './Testimonial'
import FAQSection from './faq'
import About from './About'
import { useHead } from '@unhead/react'

function Home() {

    useHead({
    title: 'Home',
  })
  return (
    <>
    <div className='overflow-hidden' >
    
    <HeroCarousel />
    <CompanyIntro />
   
    
    
        <Service />
    <OurProcess />
     <About />

    <Testimonial />
    <FAQSection />
    
</div>
    
    </>
  )
}

export default Home