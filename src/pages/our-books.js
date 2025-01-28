import React from 'react'
import Ourbookscomponents from '../components/ourbooks/Ourbookscomponents'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Cta from '../components/home/cta/Cta'
import Faqs from '../components/home/faqs/Faqs'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

export default function Ourbooks() {
  return (
   <>
   
   <Header />
   <Breadcrumb pageTitle="Our Books"/>
   <Ourbookscomponents />
   <Cta />
   <Faqs />
   <Footer />
   
   </>
  )
}
