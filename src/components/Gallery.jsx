import React, { useMemo, useState } from 'react'

const defaultProjects = [
  {
    id: 'demo-1',
    title: 'ChunkGuard',
    subtitle: 'Anti-grief + region protection',
    cover: 'https://images.unsplash.com/photo-1605649487212-d5f4ac65dda7?q=80&w=1200&auto=format&fit=crop',
    description: 'Lightweight region protection and anti-grief plugin with granular flags.',
    version: '1.20',
    downloadable: false,
  },
  {
    id: 'demo-2',
    title: 'BloodMoon Mobs',
    subtitle: 'Event-based mob mutations',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    description: 'Configurable night events that empower mobs under a blood-red moon.',
    version: '1.20.1',
    downloadable: false,
  },
]

const apiBase = import.meta.env.VITE_BACKEND_URL || ''

const Gallery = ({ projects = defaultProjects }) => {
  const [active, setActive] = useState(null)
  const [items, setItems] = useState(projects)
  const [isOwner, setIsOwner] = useState(false)
  const [ownerKey, setOwnerKey] = useState('')

  // Fetch plugins from backend
  const fetchPlugins = async () => {
    try {
      const res = await fetch(`${apiBase}/api/plugins`)
      const data = await res.json()
      if (data?.plugins) {
        const mapped = data.plugins.map((p) => ({
          id: p.id,
          title: p.name,
          subtitle: `Version ${p.version || 'N/A'} — ${Math.round((p.file_size || 0)/1024)} KB — ${p.download_count || 0} downloads`,
          cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
          description: p.description || 'Minecraft plugin',
          version: p.version,
          downloadable: true,
          downloadUrl: `${apiBase}/api/plugins/${p.id}/download`
        }))
        setItems(mapped)
      }
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => { fetchPlugins() }, [])

  const handleVerifyOwner = async () => {
    try {
      const res = await fetch(`${apiBase}/api/auth/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: ownerKey })
      })
      const data = await res.json()
      setIsOwner(Boolean(data?.ok))
    } catch (e) {
      setIsOwner(false)
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch(`${apiBase}/api/plugins/upload`, {
        method: 'POST',
        headers: { 'x-owner-key': ownerKey },
        body: fd
      })
      if (!res.ok) throw new Error('upload failed')
      form.reset()
      await fetchPlugins()
      alert('Uploaded successfully')
    } catch (err) {
      alert('Upload failed')
    }
  }

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-red-100">Minecraft Plugins</h2>
            <p className="text-red-200/80 mt-2">Click a card to reveal details. Public can download .jar builds for testing.</p>
          </div>
          {/* owner verify */}
          <div className="text-right space-y-2">
            <div className="text-xs text-red-300/70">Owner access</div>
            <div className="flex items-center gap-2">
              <input type="password" placeholder="Owner key" value={ownerKey} onChange={(e)=>setOwnerKey(e.target.value)} className="px-3 py-2 rounded-lg bg-black/50 border border-red-500/30 text-sm outline-none focus:border-red-400"/>
              <button onClick={handleVerifyOwner} className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm">Verify</button>
          </div>
          </div>
        </div>

        {/* Owner-only uploader */}
        {isOwner && (
          <form onSubmit={handleUpload} className="mb-8 grid md:grid-cols-5 gap-3 items-end bg-black/40 border border-red-500/20 rounded-xl p-4">
            <div className="md:col-span-1">
              <label className="block text-xs text-red-300/70 mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded-lg bg-black/50 border border-red-500/30 outline-none focus:border-red-400"/>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-red-300/70 mb-1">Description</label>
              <input name="description" className="w-full px-3 py-2 rounded-lg bg-black/50 border border-red-500/30 outline-none focus:border-red-400"/>
            </div>
            <div>
              <label className="block text-xs text-red-300/70 mb-1">Version</label>
              <input name="version" className="w-full px-3 py-2 rounded-lg bg-black/50 border border-red-500/30 outline-none focus:border-red-400"/>
            </div>
            <div>
              <label className="block text-xs text-red-300/70 mb-1">.jar file</label>
              <input name="file" type="file" accept=".jar" required className="w-full text-sm file:mr-3 file:px-3 file:py-2 file:rounded-lg file:bg-red-700 file:text-white file:border-0 file:hover:bg-red-600"/>
            </div>
            <div className="md:col-span-5 text-right">
              <button type="submit" className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white">Upload</button>
            </div>
          </form>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl bg-black/40 border border-red-500/20 text-left">
              <button onClick={() => setActive(p)} className="block w-full text-left">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105"/>
                </div>
                <div className="p-4">
                  <div className="text-red-200 font-semibold flex items-center justify-between gap-3">
                    <span>{p.title}</span>
                    {p.downloadable && (
                      <a href={p.downloadUrl} className="px-2 py-1 rounded-md bg-red-600/90 hover:bg-red-500 text-white text-xs" onClick={(e)=>e.stopPropagation()}>Download</a>
                    )}
                  </div>
                  <div className="text-red-300/70 text-sm">{p.subtitle}</div>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 via-transparent"/>
              </button>
            </div>
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
              <div className="text-2xl font-extrabold text-red-100 flex items-center justify-between gap-3">
                <span>{active.title}</span>
                {active.downloadable && (
                  <a href={active.downloadUrl} className="px-3 py-1.5 rounded-md bg-red-600/90 hover:bg-red-500 text-white text-sm">Download .jar</a>
                )}
              </div>
              <div className="text-red-300/70">Version {active.version || 'N/A'}</div>
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
