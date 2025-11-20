import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="relative py-12 border-t border-red-500/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-red-300/70 text-sm">
          © {new Date().getFullYear()} Spooky 3D — All rights reserved.
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href="mailto:hello@example.com" className="px-4 py-2 rounded-lg bg-red-600/90 hover:bg-red-500 text-white">Email</a>
          <a href="#" className="px-4 py-2 rounded-lg border border-red-500/30 text-red-200 hover:border-red-400">ArtStation</a>
          <a href="#" className="px-4 py-2 rounded-lg border border-red-500/30 text-red-200 hover:border-red-400">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
