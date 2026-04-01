import React, { useEffect, useState } from 'react'

const Skilldevelopment = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div
        className="text-center max-w-xl w-full transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-6">
          Viraga Foundation
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-1">
          Skill
        </h1>
        <h2 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">
          Development
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-orange-200" />
          <div className="w-2 h-2 rounded-full bg-orange-400" />
          <div className="h-px w-16 bg-orange-200" />
        </div>

        {/* Body */}
        <p className="text-base text-gray-500 leading-relaxed mb-10">
          <span className="font-semibold text-gray-700">This page data is coming soon...</span> Stay tuned for updates on our skill
          development initiatives and programs! We are committed to{' '}
          <span className="font-semibold text-gray-700">empowering individuals with valuable skills</span> for a brighter future.
          Check back soon for more information and{' '}
          <span className="font-semibold text-gray-700">opportunities to get involved!</span>
        </p>

        {/* CTA */}
        
         <a href="#"
          className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200 mb-8"
        >
          Get Involved
          <span>→</span>
        </a>

        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-xs text-gray-400 uppercase tracking-widest">Content launching soon</span>
        </div>
      </div>
    </div>
  )
}

export default Skilldevelopment