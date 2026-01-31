import React, { useState, useEffect, useRef } from 'react';

// Import your social service icons
import foodDonationIcon from '../../assets/e7.png'
import scholarshipIcon from '../../assets/e7.png'
import healthIcon from '../../assets/e4.png'
import skillDevIcon from '../../assets/e4.png'
import leadersIcon from '../../assets/e3.png'
import orphanageIcon from '../../assets/e4.png'
import disasterIcon from '../../assets/e3.png'

interface Initiative {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgGradient: string;
}

type InitiativeCardProps = {
  initiative: Initiative;
  index: number;
};

const initiatives: Initiative[] = [
  {
    icon: foodDonationIcon,
    title: 'Food Donation (Narayana Seva) – Nourishing Lives, One Meal at a Time',
    description: 'No one should go hungry. Through Narayana Seva, we provide nutritious meals to the underprivileged, ensuring sustenance, vitality, and dignity for all.',
    color: 'from-orange-400 to-orange-600',
    bgGradient: 'from-orange-500/20 via-orange-400/10 to-transparent'
  },
  {
    icon: scholarshipIcon,
    title: 'Scholarship Assistance & Guidance – Empowering Dreams Through Education',
    description: 'Education is the foundation of a brighter future. We offer scholarships, mentorship, and career guidance to deserving students, helping them break barriers and achieve their aspirations.',
    color: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-500/20 via-blue-400/10 to-transparent'
  },
  {
    icon: healthIcon,
    title: 'Health Awareness & Medical Support – Spreading Knowledge for a Healthier Society',
    description: 'Good health is a fundamental right. We work towards raising awareness about healthcare, guiding people to medical resources, and promoting preventive and wellness programs.',
    color: 'from-pink-400 to-pink-600',
    bgGradient: 'from-pink-500/20 via-pink-400/10 to-transparent'
  },
  {
    icon: skillDevIcon,
    title: 'Skill Development & Career Guidance – Shaping Self-Reliant Individuals',
    description: 'True empowerment comes from self-reliance. Our skill development programs equip individuals with practical knowledge and career guidance, paving the way for economic independence and success.',
    color: 'from-purple-400 to-purple-600',
    bgGradient: 'from-purple-500/20 via-purple-400/10 to-transparent'
  },
  {
    icon: leadersIcon,
    title: 'Promoting the Teachings of Great Leaders – Inspiring Positive Change',
    description: 'The wisdom of great leaders transforms lives. By spreading the teachings of Swami Vivekananda and other visionaries, we inspire values, purpose, and social responsibility.',
    color: 'from-amber-400 to-amber-600',
    bgGradient: 'from-amber-500/20 via-amber-400/10 to-transparent'
  },
  {
    icon: orphanageIcon,
    title: 'Orphanage for Street Children – A Safe Haven for Every Child',
    description: 'Every child deserves love, security, and a bright future. Our mission is to provide shelter, education, and holistic care to homeless and orphaned children, giving them the foundation for a better life.',
    color: 'from-teal-400 to-teal-600',
    bgGradient: 'from-teal-500/20 via-teal-400/10 to-transparent'
  },
  {
    icon: disasterIcon,
    title: 'Disaster Relief & Humanitarian Aid – Extending Hope in Crisis',
    description: 'In times of calamity, immediate support can save lives. We provide emergency relief, rehabilitation, and long-term recovery assistance to communities affected by disasters, ensuring resilience and renewal.',
    color: 'from-red-400 to-red-600',
    bgGradient: 'from-red-500/20 via-red-400/10 to-transparent'
  }
];

const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ease-out cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={toggleExpanded}
      onMouseMove={handleMouseMove}
    >
      {/* Mega Glow Effect on Hover */}
      <div className={`
        absolute -inset-4 bg-gradient-to-r ${initiative.color} rounded-3xl blur-2xl
        transition-all duration-700
        ${isExpanded ? 'opacity-60 scale-110' : 'opacity-0 scale-100'}
      `}></div>

      {/* Card Container - White Background */}
      <div className={`
        relative backdrop-blur-xl bg-white
        rounded-3xl border-2
        overflow-hidden transition-all duration-500 ease-out
        ${isExpanded ? 'shadow-2xl -translate-y-4 scale-[1.02] border-transparent h-auto' : 'shadow-xl border-gray-200/50 h-auto'}
      `}>
        {/* Animated gradient border */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 -z-10
          transition-all duration-500
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
        `} style={{ padding: '2px', borderRadius: '1.5rem' }}>
          <div className="h-full w-full bg-white rounded-3xl"></div>
        </div>

        {/* Mouse Follow Spotlight Effect */}
        {isExpanded && (
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15), transparent)`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></div>
        )}

        {/* Top animated gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          <div className={`
            h-full bg-gradient-to-r ${initiative.color}
            transition-all duration-700 ease-out
            ${isExpanded ? 'translate-x-0' : '-translate-x-full'}
          `}></div>
        </div>

        {/* Gradient Background Animation */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${initiative.bgGradient}
          transition-opacity duration-500
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
        `}></div>

        {/* Content */}
        <div className="relative p-7 sm:p-8 flex flex-col items-center text-center z-10">
          {/* Icon Container with Multiple Layers */}
          <div className="relative mb-6">
            {/* Outer rotating ring */}
            <div className={`
              absolute -inset-4 rounded-full border-2 border-dashed
              bg-gradient-to-r ${initiative.color} opacity-20
              transition-all duration-1000 ease-out
              ${isExpanded ? 'rotate-180 scale-125 opacity-0' : 'rotate-0 scale-100 opacity-20'}
            `}></div>

            {/* Middle pulsing glow */}
            <div className={`
              absolute inset-0 bg-gradient-to-br ${initiative.color} blur-2xl
              transition-all duration-700
              ${isExpanded ? 'opacity-50 scale-150' : 'opacity-0 scale-100'}
            `}></div>

            {/* Icon background */}
            <div className={`
              relative w-24 h-24 sm:w-28 sm:h-28 rounded-full 
              bg-gradient-to-br from-white via-gray-50 to-white
              border-2 border-gray-100
              flex items-center justify-center
              shadow-2xl
              transition-all duration-500 ease-out
              ${isExpanded ? 'scale-110 rotate-6 shadow-3xl' : 'scale-100 rotate-0'}
            `}>
              {/* Inner gradient circle */}
              <div className={`
                absolute inset-2 rounded-full bg-gradient-to-br ${initiative.color} opacity-0
                transition-opacity duration-500
                ${isExpanded ? 'opacity-10' : 'opacity-0'}
              `}></div>

              <img
                src={initiative.icon}
                alt={initiative.title}
                className={`
                  w-14 h-14 sm:w-16 sm:h-16 object-contain relative z-10
                  transition-all duration-500
                  ${isExpanded ? 'scale-110 drop-shadow-2xl' : 'scale-100'}
                `}
              />
            </div>

            {/* Floating particles */}
            {isExpanded && (
              <>
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-bounce"></div>
              </>
            )}
          </div>

          {/* Title with Gradient on Hover */}
          <h3 className={`
            text-base sm:text-lg font-extrabold mb-2
            transition-all duration-500
            ${isExpanded ? `bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent` : 'text-gray-900'}
          `}>
            {initiative.title}
          </h3>

          {/* Expand Indicator (when collapsed) */}
          {!isExpanded && (
            <div className="mt-3 flex items-center gap-2 text-gray-400 text-xs transition-all duration-300">
              <span>Hover or click to expand</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {/* Description - Only shows when expanded */}
          <div className={`
            overflow-hidden transition-all duration-500 ease-out
            ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
          `}>
            <p className={`
              text-sm sm:text-base leading-relaxed text-gray-700
              transition-all duration-300
              ${isExpanded ? 'scale-100' : 'scale-95'}
            `}>
              {initiative.description}
            </p>

            {/* Bottom Icon - Appears on Hover */}
            <div className={`
              mt-3 transition-all duration-500 ease-out
              ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}>
              <div className={`
                relative w-10 h-10 mx-auto rounded-full bg-gradient-to-br ${initiative.color}
                flex items-center justify-center shadow-lg
                transition-all duration-300
              `}>
                {/* Pulsing ring */}
                <div className={`
                  absolute inset-0 rounded-full bg-gradient-to-br ${initiative.color}
                  animate-ping
                `}></div>
                
                <svg className="w-5 h-5 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Shine Effect */}
        <div className={`
          absolute top-0 right-0 w-32 h-32
          bg-gradient-to-bl ${initiative.color} opacity-0 rounded-bl-full
          transition-all duration-700
          ${isExpanded ? 'opacity-20 scale-150' : 'opacity-0 scale-100'}
        `}></div>
        <div className={`
          absolute bottom-0 left-0 w-32 h-32
          bg-gradient-to-tr ${initiative.color} opacity-0 rounded-tr-full
          transition-all duration-700
          ${isExpanded ? 'opacity-20 scale-150' : 'opacity-0 scale-100'}
        `}></div>
      </div>
    </div>
  );
};

export default function SocialInitiativesFire() {
  // White background theme
  const bgClass = "bg-white";
  const orbColors = ["bg-orange-300/20", "bg-yellow-300/15", "bg-pink-300/15"];

  return (
    <div className={`min-h-screen ${bgClass} py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className={`absolute top-20 left-10 w-72 h-72 ${orbColors[0]} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute top-40 right-20 w-96 h-96 ${orbColors[1]} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${orbColors[2]} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section - FIRE Edition */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-semibold text-sm mb-8 shadow-lg animate-bounce">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Social Impact Initiatives
          </div>

          {/* Main Title with gradient */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Our Key Initiatives
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-500 to-orange-500 rounded-full"></div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                Lighting the Path of Service
              </p>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent via-orange-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Animated decorative elements */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Subtitle with enhanced styling */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Just as Surya Bhagavan's seven horses drive away darkness and bring light, 
              <span className="font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"> VIRAGA FOUNDATION</span> is dedicated to uplifting society 
              through seven transformative initiatives. Each initiative reflects our commitment to 
              <span className="font-semibold text-orange-600"> compassion, empowerment, and selfless service</span>.
            </p>
          </div>

          {/* Animated wave line */}
          <div className="mt-8 flex justify-center">
            <svg className="w-48 h-4" viewBox="0 0 200 16">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M0 8 Q 25 2, 50 8 T 100 8 T 150 8 T 200 8"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* Initiatives Grid - 3-3-1 Layout */}
        <div className="space-y-8 sm:space-y-10">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {initiatives.slice(0, 3).map((initiative, index) => (
              <InitiativeCard 
                key={index} 
                initiative={initiative} 
                index={index}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {initiatives.slice(3, 6).map((initiative, index) => (
              <InitiativeCard 
                key={index + 3} 
                initiative={initiative} 
                index={index + 3}
              />
            ))}
          </div>

          {/* Third Row - Centered */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/3">
              <InitiativeCard 
                initiative={initiatives[6]} 
                index={6}
              />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}