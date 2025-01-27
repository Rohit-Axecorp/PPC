import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/bookpublishing/hero/Hero'
import Banner from '../components/bookpublishing/banner/Banner'
import Features from '../components/bookpublishing/features/Features'
import Content1 from '../components/bookpublishing/content1/Content1'
import Tabs from '../components/bookpublishing/tabs/Tabs'
import Content2 from '../components/bookpublishing/content2/Content2'
import Publishing from '../components/bookpublishing/publishing/Publishing'
import Testimonials from '../components/bookpublishing/testimonials/Testimonials'
import Cta from '../components/bookpublishing/cta/Cta'
import Faqs from '../components/bookpublishing/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Logoandcontent from '../components/bookpublishing/logoandcontent/Logoandcontent'
import Contentline from '../components/bookpublishing/contentline/Contentline'


export default function BookPublishing() {
    return (
        <>

            <Header />
            <Hero />
            <Logoandcontent />
            <Contentline />
            <Banner />
            <Features />
            <Content2 />
            <Tabs />
            <Content1 />
            <Publishing />
            <Testimonials />
            <Cta />
            <Faqs />
            <Footer />

        </>
    )
}
