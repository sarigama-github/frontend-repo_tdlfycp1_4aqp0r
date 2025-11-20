import React, { useState } from 'react'

const faqs = [
  { q: 'What tools do you use?', a: 'Blender, Houdini, Substance, and custom shader experiments.' },
  { q: 'Can you create real-time assets?', a: 'Yes. I create optimized meshes, PBR textures, and engine-ready assets.' },
  { q: 'Do you accept commissions?', a: 'Absolutely. Reach out with your brief and timeline.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-100 mb-8">FAQs</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-red-500/20 bg-black/40">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                <span className="text-red-200 font-medium">{item.q}</span>
                <span className="text-red-300/70">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-red-200/80">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
