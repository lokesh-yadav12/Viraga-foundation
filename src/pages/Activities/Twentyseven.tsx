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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .sd-root {
          font-family: 'Poppins', sans-serif;
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

        .sd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(180,147,90,0.9);
          margin-bottom: 30px;
        }
        .sd-dash { width: 26px; height: 1px; background: rgba(180,147,90,0.5); }

        .sd-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(52px, 8vw, 82px);
          font-weight: 600;
          line-height: 1.0;
          color: #1A1A1A;
          letter-spacing: -1.5px;
          margin-bottom: 6px;
        }
        .sd-title-italic {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(52px, 8vw, 82px);
          font-weight: 600;
          font-style: normal;
          color: rgba(180,147,90,0.95);
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

        .sd-body {
          font-size: 15px;
          font-weight: 300;
          color: rgba(30,30,30,0.55);
          line-height: 1.9;
          max-width: 520px;
          margin: 0 auto 44px;
          letter-spacing: 0.25px;
        }
        .sd-body strong {
          color: rgba(20,20,20,0.85);
          font-weight: 500;
        }

        .sd-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          border: 1px solid rgba(180,147,90,0.5);
          border-radius: 3px;
          background: transparent;
          color: rgba(140,105,50,0.95);
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
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

        .sd-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 10px;
          letter-spacing: 2px;
          color: rgba(20,20,20,0.3);
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
            <span className="sd-dash" />
            Viraga Foundation
            <span className="sd-dash" />
          </div>

          <h1 className="sd-title">
            V F T L
            <span className="sd-title-italic">2026-2027</span>
          </h1>

          <div className="sd-orn">
            <div className="sd-orn-line-l" />
            <div className="sd-orn-diamond" />
            <div className="sd-orn-line-r" />
          </div>

          <p className="sd-body">
            <strong>This page data is coming soon...</strong> Stay tuned for updates on our skill
            development initiatives and programs! We are committed to{' '}
            <strong>empowering individuals with valuable skills</strong> for a brighter future.
            Check back soon for more information and{' '}
            <strong>opportunities to get involved!</strong>
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

          <div className="sd-badge">
            <div className="sd-pulse" />
            Content launching soon
          </div>

        </div>
      </div>
    </>
  )
}

export default Skilldevelopment