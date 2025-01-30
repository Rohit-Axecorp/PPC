import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/childrensbook/hero/Hero'
import Content1 from '../components/childrensbook/content1/Content1'
import Content2 from '../components/childrensbook/content2/Content2'
import Publishing from '../components/childrensbook/publishing/Publishing'
import Testimonials from '../components/childrensbook/testimonials/Testimonials'
import Cta from '../components/childrensbook/cta/Cta'
import Faqs from '../components/childrensbook/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/childrensbook/logoandcontent/Logoandcontent'
import Contentline from '../components/childrensbook/contentline/Contentline'
import Banner2 from '../components/childrensbook/banner2/Banner2'
import Features from '../components/childrensbook/features/Features'
import ServicesTabs from '../components/childrensbook/tabs/ServicesTabs'


export default function Childrensbook() {
    return (
        <>

            <Header />
            <Hero />
            <Logoandcontent />
            <Contentline />
            <Banner2 />
            <Features />
            <Content2 />
            <ServicesTabs />
            <Content1 />
            <Publishing />
            <Testimonials />
            <Cta />
            <Faqs />
            <Footer />

        </>
    )
}
