import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import CallToAction from './components/callToAction'


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <CallToAction />
      </main>
      <footer></footer>
    </>
  )
}
