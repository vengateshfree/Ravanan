import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Car from './components/Car'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Branches from './components/branches/Branches'
import ContactPage from './components/contact/ContactPage'
import OurWorks from './components/works/OurWorks'
import Service from './components/home/Service'
import ServicePage from './components/services/ServicePage'
import CarPage from './components/services/CarPage'
import Bikepage from './components/services/BikePage'
import HomePage from './components/services/HomePage'
import OfficePage from './components/services/OfficePage'
import PackagePage from './components/services/PackagePage'
import RelocationPage from './components/services/RelocationPage'
import WarHousePage from './components/services/WarHousePage'
import LoadingPage from './components/services/LoadingPage'
import CompanyBlog from './components/blog/CompanyBlog'
import ScrollToTop from './ScrollToTop'
import VisionPage from './components/about/VisionPage'
import ProfilePage from './components/about/ProfilePage'
import HowItWorkPage from './components/about/HowItWorkPage'
// import { HeadProvider } from "@unhead/react";   

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
 
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<OurWorks />} />

          <Route path="/blogs" element={<CompanyBlog />} />
          <Route path="/about" element={<ServicePage />} />
          
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/howitwork" element={<HowItWorkPage />} />

          <Route path="/services" element={<ServicePage />}>
            <Route path="car" element={<CarPage />} />
            <Route path="bike" element={<Bikepage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="office" element={<OfficePage />} />
            <Route path="package" element={<PackagePage />} />
            <Route path="location" element={<RelocationPage />} />
            <Route path="warhouse" element={<WarHousePage />} />
            <Route path="loading" element={<LoadingPage />} />
          </Route>




        </Route>

      </Routes>
      <Footer />
    </BrowserRouter> 
     )
}

export default App