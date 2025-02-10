import React from 'react'
import Thanku from '../components/thanku/Thanku'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Cta from '../components/home/cta/Cta'
import Faqs from '../components/home/faqs/Faqs'
import Footer from '../components/footer/Footer'

export default function Thankyou() {
    return (
        <>

            <Header />
            <Breadcrumb pageTitle="Thank You" />
            <Thanku />
            <Cta />
            <Faqs />
            <Footer />

        </>
    )
}
