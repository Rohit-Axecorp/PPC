import React from 'react'
import Header from '../components/header/Header'
import Whowearehero from '../components/whoweare/whowearehero/Whowearehero'
import Footer from '../components/footer/Footer'
import Whowearecontent from '../components/whoweare/whowearecontent/Whowearecontent'
import Publishing from '../components/whoweare/publishing/Publishing'
import Cta from '../components/home/cta/Cta'
import Ourmission from '../components/whoweare/ourmission/Ourmission'

export default function whoweare() {
  return (
    <>
    
    <Header />
    <Whowearehero />
    <Whowearecontent />
    <Ourmission />
    <Publishing />
    <Cta />
    <Footer />
    
    
    
    </>
  )
}
