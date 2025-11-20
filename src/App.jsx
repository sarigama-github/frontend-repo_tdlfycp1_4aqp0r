import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* spooky glow backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(127,29,29,0.25),transparent_40%)]"/>
      </div>

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
