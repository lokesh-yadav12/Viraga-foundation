// import React, { useEffect, useState } from 'react'

// const Skilldevelopment = () => {
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const t = setTimeout(() => setVisible(true), 80)
//     return () => clearTimeout(t)
//   }, [])

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4">
//       <div
//         className="text-center max-w-xl w-full transition-all duration-700"
//         style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
//       >
//         {/* Eyebrow */}
//         <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-6">
//           Viraga Foundation
//         </p>

//         {/* Title */}
//         <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-1">
//           Health
//         </h1>
//         <h2 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">
//           Awareness
//         </h2>

//         {/* Divider */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="h-px w-16 bg-orange-200" />
//           <div className="w-2 h-2 rounded-full bg-orange-400" />
//           <div className="h-px w-16 bg-orange-200" />
//         </div>

//         {/* Body */}
//         <p className="text-base text-gray-500 leading-relaxed mb-10">
//           <span className="font-semibold text-gray-700">This page data is coming soon...</span> Stay tuned for updates on health
//           awareness initiatives and programs! We are committed to{' '}
//           <span className="font-semibold text-gray-700">empowering individuals with valuable skills</span> for a brighter future.
//           Check back soon for more information and{' '}
//           <span className="font-semibold text-gray-700">opportunities to get involved!</span>
//         </p>

//         {/* CTA */}
        
//           <a href="#"
//           className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200 mb-8"
//         >
//           Get Involved
//           <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
//         </a>

//         {/* Badge */}
//         <div className="flex items-center justify-center gap-2 mt-4">
//           <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
//           <span className="text-xs text-gray-400 uppercase tracking-widest">Content launching soon</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skilldevelopment







import React, { useEffect, useState } from 'react'

const Skilldevelopment = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        .sd-root {
          min-height: 100vh;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .sd-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .sd-orb-1 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(180,147,90,0.10) 0%, transparent 70%);
          top: -140px; right: -100px;
          animation: drift1 10s ease-in-out infinite alternate;
        }
        .sd-orb-2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(26,122,110,0.08) 0%, transparent 70%);
          bottom: -100px; left: -80px;
          animation: drift2 12s ease-in-out infinite alternate;
        }
        @keyframes drift1 {
          from { transform: translate(0,0); }
          to   { transform: translate(24px, 16px); }
        }
        @keyframes drift2 {
          from { transform: translate(0,0); }
          to   { transform: translate(-18px, -12px); }
        }

        .sd-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.032) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        .sd-top-line {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 280px; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(180,147,90,0.7), transparent);
        }

        .sd-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 64px 40px;
          max-width: 680px;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1),
                      transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .sd-content.in { opacity: 1; transform: translateY(0); }

        /*
          Eyebrow — FROM: font-size:10px font-weight:600 letter-spacing:3.5px
          TO: font-size matches About text-base (16px), font-weight:600 (font-semibold), color:orange-700
        */
        .sd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #c2410c;
          margin-bottom: 30px;
        }
        .sd-dash { width: 26px; height: 1px; background: rgba(180,147,90,0.5); }

        /*
          Title — FROM: clamp(52px, 8vw, 82px) font-weight:600 color:#1A1A1A
          TO: matches About h1 — font-bold (700), color:amber-800 (#92400e)
              keeping clamp for display size since it's a hero title
        */
        .sd-title {
          font-size: clamp(48px, 8vw, 20px);
          font-weight: 600;
          line-height: 1.0;
          color: #92400e;
          letter-spacing: -1.5px;
          margin-bottom: 6px;
        }

        /*
          Title italic line — FROM: font-style:normal color:rgba(180,147,90,0.95)
          TO: font-style:italic color:orange-700 (#c2410c), font-bold
              (matches About tagline italic style)
        */
        .sd-title-italic {
          font-size: clamp(52px, 8vw, 82px);
          font-weight: 600;
          font-style: italic;
          color: #c2410c;
          letter-spacing: -1px;
          display: block;
          line-height: 1.05;
        }

        .sd-orn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 30px 0 32px;
        }
        .sd-orn-line-l {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(180,147,90,0.5));
        }
        .sd-orn-line-r {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, rgba(180,147,90,0.5), transparent);
        }
        .sd-orn-diamond {
          width: 7px; height: 7px;
          border: 1px solid rgba(180,147,90,0.7);
          transform: rotate(45deg);
        }

        /*
          Body — FROM: font-size:15px font-weight:300 color:rgba(30,30,30,0.55)
          TO: font-size:18px (text-lg / sm:text-lg from About), font-weight:400,
              color:#92400e (amber-900), line-height:1.9
        */
        .sd-body {
          font-size: 18px;
          font-weight: 400;
          color: #78350f;
          line-height: 1.9;
          max-width: 520px;
          margin: 0 auto 44px;
          letter-spacing: 0.25px;
        }

        /*
          Body strong — FROM: color:rgba(20,20,20,0.85) font-weight:500
          TO: font-weight:600 (font-semibold), color:orange-700 (#c2410c)
              (matches About inline span font-semibold text-orange-700)
        */
        .sd-body strong {
          color: #c2410c;
          font-weight: 500;
        }

        /*
          CTA button — FROM: font-size:11px font-weight:600 letter-spacing:3px
          TO: font-size:16px (text-base), font-weight:700 (font-bold)
              (matches About CTA button font-bold)
        */
        .sd-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          border: 1px solid rgba(180,147,90,0.5);
          border-radius: 3px;
          background: transparent;
          color: #92400e;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
          margin-bottom: 40px;
        }
        .sd-cta:hover {
          background: rgba(180,147,90,0.08);
          border-color: rgba(180,147,90,0.85);
          color: #1A1A1A;
        }
        .sd-cta-arrow { transition: transform 0.25s; display: inline-block; }
        .sd-cta:hover .sd-cta-arrow { transform: translateX(4px); }

        /*
          Badge — FROM: font-size:10px letter-spacing:2px color:rgba(20,20,20,0.3)
          TO: font-size:16px (text-base), color:amber-900 (#78350f)
              (matches About body base)
        */
        .sd-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 16px;
          letter-spacing: 2px;
          color: #78350f;
          text-transform: uppercase;
        }
        .sd-pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(180,147,90,0.7);
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>

      <div className="sd-root pt-12">
        <div className="sd-grid" />
        <div className="sd-orb sd-orb-1" />
        <div className="sd-orb sd-orb-2" />
        <div className="sd-top-line" />

        <div className={`sd-content ${visible ? 'in' : ''}`}>

          <div className="sd-eyebrow">
            {/* <span className="sd-dash" />
            Viraga Foundation
            <span className="sd-dash" /> */}
            <span
              className="text-base font-medium px-5 text-center py-2 rounded-full border tracking-[0.6em] uppercase"
              style={{ color: '#92400e', borderColor: '#92400e', background: '#c8973a11' }}
            >
              Viraga Foundation
            </span>

          </div>

          <h1 className="sd-title">
            V F T L
            <br/>
            <span className="sd-title-normal">Health Awareness</span>
          </h1>

          <div className="sd-orn">
            <div className="sd-orn-line-l" />
            <div className="sd-orn-diamond" />
            <div className="sd-orn-line-r" />
          </div>

          <p className="sd-body">
          <span className="font-semibold text-gray-700">This page data is coming soon...</span> Stay tuned for updates on health
          awareness initiatives and programs! We are committed to{' '}
          <span className="font-semibold text-gray-700">empowering individuals with valuable skills</span> for a brighter future.
          Check back soon for more information and{' '}
          <span className="font-semibold text-gray-700">opportunities to get involved!</span>
          </p>

          {/* <div className="sd-dots">
            <div className="sd-dot" />
            <div className="sd-dot" />
            <div className="sd-dot" />
          </div> */}

          <div>
            <a href="#" className="sd-cta">
              Get Involved
              <span className="sd-cta-arrow">→</span>
            </a>
          </div>

          {/* <div className="sd-badge">
            <div className="sd-pulse" />
            Content launching soon
          </div> */}
  <span
              className="text-md font-sm px-5 text-center py-2 rounded-full border tracking-[0.1em] "
              style={{ color: '#92400e', borderColor: '#92400e' }}
            >
               Content launching soon . . .
            </span>
        </div>
      </div>
    </>
  )
}

export default Skilldevelopment