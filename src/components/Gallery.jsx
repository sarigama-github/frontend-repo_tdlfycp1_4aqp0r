import React, { useState } from 'react'

const defaultProjects = [
  {
    id: 1,
    title: 'Crimson Mech',
    subtitle: 'Hard-surface modeling',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    description: 'A tactical mech rendered with gritty procedural materials and cinematic lighting.'
  },
  {
    id: 2,
    title: 'Haunted Corridor',
    subtitle: 'Environment art',
    cover: 'https://images.unsplash.com/photo-1605649487212-d5f4ac65dda7?q=80&w=1200&auto=format&fit=crop',
    description: 'Modular hallway kit with red volumetrics and decal pass for grime.'
  },
  {
    id: 3,
    title: 'Blood Moon Drone',
    subtitle: 'Concept + lookdev',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    description: 'Aerial recon drone with emissive accents and worn paint pass.'
  },
]

const Gallery = ({ projects = defaultProjects }) => {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-100">Gallery</h2>
          <p className="text-red-200/80 mt-2">Click a card to reveal details. Replace these with your own projects anytime.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <button key={p.id} onClick={() => setActive(p)} className="group relative overflow-hidden rounded-2xl bg-black/40 border border-red-500/20 text-left">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-4">
                <div className="text-red-200 font-semibold">{p.title}</div>
                <div className="text-red-300/70 text-sm">{p.subtitle}</div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 via-transparent"/>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setActive(null)}>
          <div className="relative max-w-2xl w-full bg-gradient-to-br from-[#140000] to-black border border-red-500/30 rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden">
              <img src={active.cover} alt={active.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <div className="text-2xl font-extrabold text-red-100">{active.title}</div>
              <div className="text-red-300/70">{active.subtitle}</div>
              <p className="mt-4 text-red-200/85">{active.description}</p>
            </div>
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-red-600/90 hover:bg-red-500 text-white">Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
