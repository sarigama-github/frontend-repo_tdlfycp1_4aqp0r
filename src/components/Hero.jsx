import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* Nebula background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0000] to-black"/>
      <div className="absolute inset-0 opacity-60" style={{backgroundImage:'radial-gradient(circle at 30% 20%, rgba(239,68,68,0.15), transparent 35%), radial-gradient(circle at 70% 60%, rgba(127,29,29,0.35), transparent 40%)'}}/>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"/>

      {/* Title */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-200 via-red-400 to-red-700 drop-shadow-[0_8px_30px_rgba(239,68,68,0.45)]">
          GauravBuilds
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-red-200/85">
          Minecraft server developer and custom plugins coder — 4+ years crafting performant, production-ready systems.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#gallery" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-[0_0_35px_-8px_rgba(239,68,68,0.8)] transition">Explore Plugins</a>
          <a href="#about" className="px-5 py-3 rounded-xl border border-red-500/40 text-red-200 hover:border-red-400 hover:text-red-100 transition">About</a>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 [perspective:900px]">
        <div className="absolute left-[10%] top-[25%] w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 rounded-xl rotate-45 animate-[float_9s_ease-in-out_infinite] shadow-[0_0_45px_-10px_rgba(239,68,68,0.7)]" style={{transformStyle:'preserve-3d'}}>
          <div className="absolute inset-0 rounded-xl border border-red-300/10 translate-z-6"/>
        </div>
        <div className="absolute right-[12%] bottom-[18%] w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-[float_7s_ease-in-out_infinite] shadow-[0_0_35px_-8px_rgba(239,68,68,0.7)]"/>
        <div className="absolute left-[50%] top-[65%] -translate-x-1/2 w-40 h-24 bg-gradient-to-br from-red-800 to-black rounded-3xl rotate-12 animate-[float_11s_ease-in-out_infinite] shadow-[0_0_55px_-10px_rgba(239,68,68,0.6)]"/>
      </div>

      <style>{`
        @keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } }
      `}</style>
    </section>
  )
}

export default Hero
