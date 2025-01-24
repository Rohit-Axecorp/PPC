import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Counter from '../../components/counter/Counter'
import Banner from '../../components/banner/Banner'
import Features from '../../components/features/Features'
import Content1 from '../../components/content1/Content1'
import Tabs from '../../components/tabs/Tabs'
import Content2 from '../../components/content2/Content2'
import Publishing from '../../components/publishing/Publishing'
import Logo from '../../components/logo/Logo'


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
      <Logo/>
      <Publishing />

    </>
  )
}
