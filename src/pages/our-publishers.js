import React from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Ourpublisherscomponent from '../components/ourpublishers/Ourpublisherscomponent'
import Footer from '../components/footer/Footer'
import Cta from '../components/home/cta/Cta'
import Faqs from '../components/home/faqs/Faqs'

export default function Ourpublishers() {
  return (
   <>
   
   <Header />
   <Breadcrumb pageTitle="Our Publishers"/>
   <Ourpublisherscomponent />
   <Cta />
   <Faqs />
   <Footer />
   
   </>
  )
}
