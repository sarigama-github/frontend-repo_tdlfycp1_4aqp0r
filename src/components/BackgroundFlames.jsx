import React from 'react'

// Dark spooky flames using layered radial gradients drifting upward
const BackgroundFlames = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      {/* base crimson haze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.10),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(127,29,29,0.22),transparent_40%)]" />

      {/* drifting flame plumes */}
      <div className="absolute -inset-x-10 bottom-0 h-[160%] opacity-60 mix-blend-plus-lighter">
        <div className="absolute left-[10%] bottom-[-20%] w-[40vw] h-[80vh] bg-[radial-gradient(closest-side,rgba(255,80,80,0.25),rgba(255,0,0,0.08),transparent_70%)] blur-2xl animate-[rise_18s_ease-in-out_infinite]" />
        <div className="absolute left-[45%] bottom-[-30%] w-[35vw] h-[70vh] bg-[radial-gradient(closest-side,rgba(255,120,120,0.22),rgba(200,0,0,0.09),transparent_70%)] blur-2xl animate-[rise_22s_ease-in-out_infinite]" />
        <div className="absolute left-[75%] bottom-[-25%] w-[30vw] h-[65vh] bg-[radial-gradient(closest-side,rgba(255,60,60,0.2),rgba(180,0,0,0.08),transparent_70%)] blur-2xl animate-[rise_20s_ease-in-out_infinite]" />
      </div>

      {/* ember sparks */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-1 h-1 bg-red-400 rounded-full left-1/3 bottom-10 animate-[spark_6s_linear_infinite]" />
        <div className="absolute w-1 h-1 bg-red-300 rounded-full left-2/3 bottom-14 animate-[spark_7s_linear_infinite]" />
        <div className="absolute w-1 h-1 bg-red-500 rounded-full left-1/5 bottom-5 animate-[spark_5s_linear_infinite]" />
      </div>

      <style>{`
        @keyframes rise { 0% { transform: translateY(20%)} 50% { transform: translateY(-10%) } 100% { transform: translateY(20%)} }
        @keyframes spark { 0% { transform: translateY(0) translateX(0); opacity: 0 } 10% { opacity: 1 } 60% { opacity: .8 } 100% { transform: translateY(-120vh) translateX(-10vw); opacity: 0 } }
      `}</style>
    </div>
  )
}

export default BackgroundFlames
