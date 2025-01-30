import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/amazonbookpublishing/hero/Hero'
import Content1 from '../components/amazonbookpublishing/content1/Content1'
import Content2 from '../components/amazonbookpublishing/content2/Content2'
import Publishing from '../components/amazonbookpublishing/publishing/Publishing'
import Testimonials from '../components/amazonbookpublishing/testimonials/Testimonials'
import Cta from '../components/amazonbookpublishing/cta/Cta'
import Faqs from '../components/amazonbookpublishing/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/amazonbookpublishing/logoandcontent/Logoandcontent'
import Contentline from '../components/amazonbookpublishing/contentline/Contentline'
import Banner2 from '../components/amazonbookpublishing/banner2/Banner2'
import Features from '../components/amazonbookpublishing/features/Features'
import ServicesTabs from '../components/amazonbookpublishing/tabs/ServicesTabs'


export default function Amazonbookpublishing() {
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
