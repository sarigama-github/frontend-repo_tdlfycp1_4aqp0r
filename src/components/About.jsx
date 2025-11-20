import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 0%, rgba(239,68,68,0.2), transparent 40%), radial-gradient(circle at 80% 100%, rgba(239,68,68,0.15), transparent 35%)'}}/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="[perspective:1000px]">
            <div className="relative bg-gradient-to-br from-red-900 to-black rounded-2xl p-8 border border-red-500/20 shadow-[inset_0_0_80px_rgba(0,0,0,0.6),0_0_40px_-10px_rgba(239,68,68,0.6)] rotate-1 [transform:rotateY(-8deg)]">
              <h3 className="text-3xl font-extrabold text-red-200">About Me</h3>
              <p className="mt-4 text-red-100/80 leading-relaxed">I'm a 3D artist obsessed with moody atmospheres, glitchy shaders and haunted geometry. My toolkit includes Blender, Substance, Houdini and custom GLSL experiments.</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-red-200/80">
                <li className="bg-black/30 rounded-lg px-3 py-2 border border-red-500/20">Blender</li>
                <li className="bg-black/30 rounded-lg px-3 py-2 border border-red-500/20">GLSL</li>
                <li className="bg-black/30 rounded-lg px-3 py-2 border border-red-500/20">Houdini</li>
                <li className="bg-black/30 rounded-lg px-3 py-2 border border-red-500/20">Substance</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-red-100">Written in 3D</h4>
            <p className="mt-3 text-red-200/80">Layered typographic treatment that simulates depth. Perfect for a tech-noir vibe.</p>
            <div className="mt-6 relative">
              <div className="text-6xl sm:text-7xl font-black tracking-tight">
                <span className="block relative">
                  <span className="absolute -left-1 top-1 text-red-950 select-none">ABOUT</span>
                  <span className="absolute left-1 -top-1 text-red-800 select-none">ABOUT</span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-red-200 via-red-400 to-red-700">ABOUT</span>
                </span>
              </div>
              <p className="mt-6 text-red-200/80 max-w-prose">This layered wordmark uses offset shadows to create a faux-3D feel without WebGL. It keeps performance smooth while delivering depth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
