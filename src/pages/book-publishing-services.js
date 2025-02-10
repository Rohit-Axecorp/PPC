import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/bookpublishing/hero/Hero'
import Content1 from '../components/bookpublishing/content1/Content1'
import Content2 from '../components/bookpublishing/content2/Content2'
import Publishing from '../components/bookpublishing/publishing/Publishing'
import Testimonials from '../components/home/testimonials/Testimonials'
import Cta from '../components/home/cta/Cta'
import Faqs from '../components/home/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/bookpublishing/logoandcontent/Logoandcontent'
import Contentline from '../components/bookpublishing/contentline/Contentline'
import Banner2 from '../components/bookpublishing/banner2/Banner2'
import Features from '../components/bookpublishing/features/Features'
import ServicesTabs from '../components/bookpublishing/tabs/ServicesTabs'


export default function BookPublishing() {
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
