import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/bookillustration/hero/Hero'
import Content1 from '../components/bookillustration/content1/Content1'
import Content2 from '../components/bookillustration/content2/Content2'
import Publishing from '../components/bookillustration/publishing/Publishing'
import Testimonials from '../components/bookillustration/testimonials/Testimonials'
import Cta from '../components/bookillustration/cta/Cta'
import Faqs from '../components/bookillustration/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/bookillustration/logoandcontent/Logoandcontent'
import Contentline from '../components/bookillustration/contentline/Contentline'
import Banner2 from '../components/bookillustration/banner2/Banner2'
import Features from '../components/bookillustration/features/Features'
import ServicesTabs from '../components/bookillustration/tabs/ServicesTabs'


export default function Bookillustration() {
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
