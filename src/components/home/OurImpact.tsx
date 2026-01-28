import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Extract numeric value for animation
  const targetNumber = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col  items-center text-center transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-orange-500 leading-none mb-2">
        {isVisible ? count : 0}+
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 uppercase tracking-wide mb-3">
        {label}
      </div>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xs leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
};

const OurImpact: React.FC = () => {
  const stats = [
    {
      number: '5',
      label: 'LAC',
      description: 'children and their families are impacted every year',
    },
    {
      number: '200',
      label: 'VILLAGES',
      description: 'and slums are reached out to across the country',
    },
    {
      number: '40',
      label: 'PROJECTS',
      description: 'focused on education, healthcare, and women empowerment',
    },
    {
      number: '27',
      label: 'STATES',
      description: 'are reached including the remotest areas',
    },
  ];

  return (
    <div className="w-full  sm:max-h-screen bg-gray-100 py-16 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-gray-900 mb-10 md:mb-24 uppercase tracking-tight">
          OUR IMPACT
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;