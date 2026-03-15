import React, { useState, useRef, useEffect } from 'react';

interface Notification {
  id: number;
  type: 'info' | 'success' | 'warning' | 'alert';
  title: string;
  message: string;
  time: string;
}

const notifications: Notification[] = [
  { id: 1, type: 'info', title: 'Registration Open', message: 'Viraga VFTL program student registration programs, last date is April 15th, 2026.', time: '10 days ago' },
   { id: 2, type: 'success', title: 'Book Distribution', message: 'Distribution of Mathematics Handbooks', time: '1 year ago' },
   { id: 3, type: 'success', title: 'Inauguration', message: 'The Beginning of a Mission to Serve Humanity named Viraga Foundation', time: '5 year ago' },
   { id: 4, type: 'success', title: 'Food Relief', message: 'Flood Relief Assistance Distribution of Provisions, Clothing & Vegetables', time: '1 year ago' },
  // { id: 5, type: 'warning', title: 'Supply Needed', message: 'Medical supplies running low in the Odisha camp. Urgent replenishment required.', time: '5 hrs ago' },
  // { id: 6, type: 'info', title: 'Partnership Confirmed', message: 'MoU signed with GreenHope NGO for joint water sanitation drive in UP.', time: '1 day ago' },
  // { id: 7, type: 'success', title: 'Goal Achieved', message: 'Women empowerment workshop in MP reached 1,000 participants this month.', time: '1 day ago' },
  // { id: 8, type: 'alert', title: 'Volunteer Training', message: 'Mandatory training session for all new volunteers on Jan 5th, 10 AM — register now.', time: '2 days ago' },
  // { id: 9, type: 'info', title: 'Report Published', message: 'Q3 Impact Report is now available. Download from the resources section.', time: '3 days ago' },
  // { id: 10, type: 'success', title: 'Award Received', message: 'Our organization was honored with the National Social Impact Award 2024.', time: '4 days ago' },
];

const typeConfig = {
  info:    { bg: '#EFF6FF', border: '#3B82F6', dot: '#3B82F6', icon: 'ℹ' },
  success: { bg: '#F0FDF4', border: '#22C55E', dot: '#22C55E', icon: '✓' },
  warning: { bg: '#FFFBEB', border: '#F59E0B', dot: '#F59E0B', icon: '⚠' },
  alert:   { bg: '#FFF7ED', border: '#F97316', dot: '#F97316', icon: '!' },
};

const NotificationCard: React.FC<{ notif: Notification }> = ({ notif }) => {
  const cfg = typeConfig[notif.type];
  return (
    <div style={{
      background: cfg.bg,
      borderLeft: `4px solid ${cfg.border}`,
      borderRadius: '12px',
      padding: '18px 20px',
      marginBottom: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      flexShrink: 0,
    }}>
      <div style={{
        width: '34px', height: '34px', borderRadius: '50%',
        background: cfg.border, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, fontSize: '15px', flexShrink: 0,
      }}>
        {cfg.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a2e', fontFamily: "'Playfair Display', Georgia, serif" }}>
            {notif.title}
          </span>
          <span style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace', flexShrink: 0, marginLeft: '12px' }}>
            {notif.time}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.55, fontFamily: "'DM Sans', sans-serif" }}>
          {notif.message}
        </p>
      </div>
    </div>
  );
};

export default function NotificationFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const speed = 0.7; // px per frame

  // Duplicate notifications for seamless loop
  const doubled = notifications.length < 1
  ? [...notifications, ...notifications, ...notifications, ...notifications]
  : [...notifications, ...notifications];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!paused && el) {
        posRef.current += speed;
        const half = el.scrollHeight / 2;
        if (posRef.current >= half) posRef.current = 0;
        el.scrollTop = posRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #fff7f0 0%, #fff 50%, #f0f9ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '48px 16px',
      fontFamily: "'DM Sans', sans-serif",
      boxSizing: 'border-box' as const,
    }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');`}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#FFF3E8', border: '1px solid #FDBA74',
          borderRadius: '999px', padding: '4px 14px',
          fontSize: '12px', fontWeight: 700, color: '#EA580C',
          letterSpacing: '0.08em', marginBottom: '14px', textTransform: 'uppercase',
        }}>
          <span style={{ width: 7, height: 7, background: '#EA580C', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.4s infinite' }} />
          Live Updates
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 900, color: '#1a1a2e', margin: '0 0 10px',
          lineHeight: 1.1,
        }}>
          Notifications
        </h1>
        <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
          Stay updated with the latest activities &amp; announcements
        </p>
      </div>

      {/* Scroll Container */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '70%' }}>
        {/* Top fade */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '60px',
          background: 'linear-gradient(to bottom, rgba(255,247,240,0.95), transparent)',
          zIndex: 2, pointerEvents: 'none', borderRadius: '16px 16px 0 0',
        }} />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
          background: 'linear-gradient(to top, rgba(240,249,255,0.95), transparent)',
          zIndex: 2, pointerEvents: 'none', borderRadius: '0 0 16px 16px',
        }} />

        {/* Scrolling list */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          style={{
            height: '520px',
            overflowY: 'hidden',
            padding: '20px 4px',
            cursor: 'default',
          }}
        >
          {doubled.map((notif, i) => (
            <NotificationCard key={`${notif.id}-${i}`} notif={notif} />
          ))}
        </div>
      </div>

      {/* Pause hint */}
      <p style={{ marginTop: '16px', fontSize: '16px', color: 'black', letterSpacing: '0.04em' }}>
        Hover to pause · Scroll is live
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}

// import React, { useState, useEffect, useRef } from 'react';

// interface StatCardProps {
//   number: string;
//   label: string;
//   description: string;
//   delay?: number;
// }

// const StatCard: React.FC<StatCardProps> = ({ number, label, description, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [count, setCount] = useState(0);
//   const cardRef = useRef<HTMLDivElement>(null);

//   // Extract numeric value for animation
//   const targetNumber = parseInt(number.replace(/\D/g, ''));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setTimeout(() => setIsVisible(true), delay);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => observer.disconnect();
//   }, [delay]);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const increment = targetNumber / steps;
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= targetNumber) {
//         setCount(targetNumber);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, [isVisible, targetNumber]);

//   return (
//     <div
//       ref={cardRef}
//       className={`flex flex-col  items-center text-center transform transition-all duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}
//     >
//       <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 leading-none mb-2">
//         {isVisible ? count : 0}+
//       </div>
//       <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-500 uppercase tracking-wide mb-3">
//         {label}
//       </div>
//       <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xs leading-relaxed px-2">
//         {description}
//       </p>
//     </div>
//   );
// };

// const OurImpact: React.FC = () => {
//   const stats = [
//     {
//       number: '3',
//       label: 'THOUSANDS',
//       description: 'children and their families are impacted every year',
//     },
//     {
//       number: '50',
//       label: 'VILLAGES',
//       description: 'and slums are reached out to across the country',
//     },
//     {
//       number: '12',
//       label: 'PROJECTS',
//       description: 'focused on education, healthcare, and women empowerment',
//     },
//     {
//       number: '7',
//       label: 'STATES',
//       description: 'are reached including the remotest areas',
//     },
//   ];

//   return (
//     <div className="w-full  sm:max-h-screen bg-white py-16 md:py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-orange-600 mb-10 md:mb-24 uppercase tracking-tight">
//           OUR IMPACT
//         </h1>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-12">
//           {stats.map((stat, index) => (
//             <StatCard
//               key={index}
//               number={stat.number}
//               label={stat.label}
//               description={stat.description}
//               delay={index * 200}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurImpact;