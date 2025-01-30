import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/bookmarketing/hero/Hero'
import Content1 from '../components/bookmarketing/content1/Content1'
import Content2 from '../components/bookmarketing/content2/Content2'
import Publishing from '../components/bookmarketing/publishing/Publishing'
import Testimonials from '../components/bookmarketing/testimonials/Testimonials'
import Cta from '../components/bookmarketing/cta/Cta'
import Faqs from '../components/bookmarketing/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/bookmarketing/logoandcontent/Logoandcontent'
import Contentline from '../components/bookmarketing/contentline/Contentline'
import Banner2 from '../components/bookmarketing/banner2/Banner2'
import Features from '../components/bookmarketing/features/Features'
import ServicesTabs from '../components/bookmarketing/tabs/ServicesTabs'


export default function Bookmarketing() {
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
