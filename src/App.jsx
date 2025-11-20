import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BackgroundFlames from './components/BackgroundFlames'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundFlames />

      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
