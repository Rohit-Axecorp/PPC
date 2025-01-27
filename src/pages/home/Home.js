import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/home/hero/Hero'
import Counter from '../../components/home/counter/Counter'
import Banner from '../../components/home/banner/Banner'
import Features from '../../components/home/features/Features'
import Content1 from '../../components/home/content1/Content1'
import Tabs from '../../components/home/tabs/Tabs'
import Content2 from '../../components/home/content2/Content2'
import Publishing from '../../components/home/publishing/Publishing'
import Logo from '../../components/home/logo/Logo'
import Portfolio from '../../components/home/portfolio/Portfolio'
import Testimonials from '../../components/home/testimonials/Testimonials'
import Cta from '../../components/home/cta/Cta'
import Faqs from '../../components/home/faqs/Faqs'
import Footer from '../../components/footer/Footer'


export default function Home() {
  return (
    <>

      <Header />
      <Hero />
      <Counter />
      <Banner />
      <Features />
      <Content1 />
      <Tabs />
      <Content2 />
      <Logo />
      <Publishing />
      <Portfolio />
      <Testimonials />
      <Cta />
      <Faqs />
      <Footer />

    </>
  )
}
