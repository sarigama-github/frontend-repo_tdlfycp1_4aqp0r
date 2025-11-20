import React from 'react'

const Logo = () => (
  <div className="relative flex items-center gap-3">
    <div className="relative">
      <span className="absolute inset-0 blur-xl bg-red-600/50 rounded-[30%]" />
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-[0_0_35px_-8px_rgba(239,68,68,0.9)] grid place-items-center">
        {/* Flame glyph */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
          <path d="M12.001 2c.5 3-1.5 4-3 6s-1 4 1 5c0-2 2-3 3.5-5s1.5-4-.5-6c5 2 8 7 8 11a8 8 0 11-16 0c0-2 1-4 2.5-5.5S11.5 5 12 2z"/>
        </svg>
      </div>
    </div>
    <div className="leading-tight">
      <div className="text-white font-extrabold tracking-wide">GauravBuilds</div>
      <div className="text-red-400 text-xs opacity-90">Minecraft Plugins & Servers</div>
    </div>
  </div>
)

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b border-red-500/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <Logo />
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
