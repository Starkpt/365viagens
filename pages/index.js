import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>
      <footer></footer>
    </>
  )
}
