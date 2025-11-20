import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b border-red-500/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 blur-md bg-red-500/60 rounded-full"></span>
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_30px_-5px_rgba(239,68,68,0.8)] grid place-items-center text-black font-black">ϟ</div>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">Spooky 3D</div>
            <div className="text-red-400 text-xs opacity-80 group-hover:opacity-100 transition">Portfolio</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#gallery" className="text-red-200/80 hover:text-red-300 transition">Gallery</a>
          <a href="#about" className="text-red-200/80 hover:text-red-300 transition">About</a>
          <a href="#faq" className="text-red-200/80 hover:text-red-300 transition">FAQs</a>
          <a href="#contact" className="text-red-200/80 hover:text-red-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
