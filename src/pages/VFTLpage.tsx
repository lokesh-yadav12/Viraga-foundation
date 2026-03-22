import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import bgpic from '../assets/e15.png';
import img1 from '.././assets/closing10.jpeg';
import img2 from '.././assets/guest2.jpeg';
// import img3 from '.././assets/prize2.jpeg';
// import img5 from '.././assets/class5.jpeg';
// import img4 from '.././assets/level4.png';
import { motion } from 'framer-motion';
// New folder covers
// import anandamCover from '.././assets/anandam/inauguration/1.jpg';
// import disasterCover from '.././assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/1.jpg';
// import orphanageCover from '.././assets/Orphanage for Street Children–A Safe Haven for Every Child/1.jpeg';
// import scholarshipCover from '.././assets/closing16.jpeg';

const VFTLpage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const activities = [
        {
            year: '2025-26',
            image: img1,
            link: '/activities/Twentysix',
        },
        {
            year: '2026-27',
            image: img2,
            link: '/activities/Twentyseven',
        },
        // {
        //     year: 'V F T L Prize Distribution',
        //     image: img3,
        //     link: '/activities/prizedistribution',
        // },
        // {
        //     year: 'V F T L Registration, Class and Exam Pics',
        //     image: img5,
        //     link: '/activities/registration',
        // },
        // {
        //     year: 'Other Activities',
        //     image: img4,
        //     link: '/activities/other-activity',
        // },
        // {
        //     year: 'Annadaanam',
        //     image: anandamCover,
        //     link: '/activities/anandam',
        // },
        // {
        //     year: 'Disaster Relief & Humanitarian Aid',
        //     image: disasterCover,
        //     link: '/activities/disaster-relief',
        // },
        // {
        //     year: 'Orphanage for Street Children',
        //     image: orphanageCover,
        //     link: '/activities/orphanage',
        // },
        // {
        //     year: 'Scholarship Assist',
        //     image: scholarshipCover,
        //     link: '/activities/scholarship',
        // },
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
                <div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: '2s' }}
                />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
                <img
                    src={bgpic}
                    alt="Service and spirituality"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mx-auto max-w-6xl px-4 sm:px-6 text-white"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Our V F T L
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    style={{ transitionDelay: '0.8s' }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-4 shadow-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Year wise</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Explore Our V F T L</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
                </div>

                {/* Single Row - 4 Cards - Ultra Enhanced */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                    {activities.map((activity, index) => (
                        <div
                            key={activity.year}
                            className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Link to={activity.link} className="group cursor-pointer block">
                                {/* Image Card - Premium Design */}
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 bg-white transform hover:-translate-y-4 hover:scale-105">
                                    {/* Animated Gradient Border */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-rotate" />

                                    {/* Card Background Glow */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Main Content Container */}
                                    <div className="relative bg-white rounded-3xl overflow-hidden">
                                        {/* Corner Accents - Premium */}
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 animate-spin-very-slow" />
                                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/20 via-pink-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 animate-spin-very-slow animation-delay-500" />

                                        {/* Image Container */}
                                        <div className="aspect-[4/3] overflow-hidden rounded-3xl relative">
                                            {/* Image */}
                                            <img
                                                src={activity.image}
                                                alt={`Activities ${activity.year}`}
                                                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            {/* Shimmer Effect on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1500" />
                                        </div>

                                        {/* Hover Content Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/98 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-10 rounded-3xl">
                                            <div className="text-center space-y-4 transform translate-y-8 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-700">
                                                {/* Year Badge */}
                                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl">
                                                    <Calendar className="w-5 h-5 text-pink-400 animate-pulse-glow" />
                                                    <span className="text-white font-bold text-lg tracking-wide">{activity.year}</span>
                                                </div>
                                                {/* Call to Action */}
                                                <div className="flex items-center gap-3 text-white font-bold text-xl">
                                                    <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">
                                                        View Activities
                                                    </span>
                                                    <ArrowRight className="w-6 h-6 text-pink-400 group-hover:translate-x-2 transition-transform duration-500" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Sparkles - Premium Animation */}
                                        {hoveredIndex === index && (
                                            <>
                                                <Sparkles className="absolute top-6 right-6 w-6 h-6 text-pink-400 animate-pulse-glow z-20 drop-shadow-lg" />
                                                <Sparkles className="absolute top-10 right-12 w-4 h-4 text-purple-400 animate-ping-slow z-20 drop-shadow-lg" />
                                                <Sparkles className="absolute bottom-6 left-6 w-5 h-5 text-orange-400 animate-pulse-glow animation-delay-300 z-20 drop-shadow-lg" />
                                                <Sparkles className="absolute bottom-12 left-12 w-3 h-3 text-pink-400 animate-ping-slow animation-delay-500 z-20 drop-shadow-lg" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Year Label - Enhanced Typography */}
                                <div className="mt-3 text-center transform group-hover:scale-110 transition-transform duration-500">
                                    {/* Mobile Click Indicator - Only visible on mobile */}
                                    <div className="sm:hidden mt-1 flex items-center justify-center gap-1 text-purple-600">
                                        <span className="text-sm font-semibold">Tap to view activities</span>
                                        <ArrowRight className="w-4 h-4 animate-bounce" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-500 tracking-tight mb-3"
                                        style={{
                                            backgroundSize: '200% 200%',
                                        }}
                                    >
                                        {activity.year}
                                    </h3>

                                    <div className="flex justify-center mb-4 gap-1.5 items-center">
                                        <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" />
                                        <div className="w-2 h-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all duration-500" />
                                    </div>


                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Info Card */}
                <div
                    className={`mt-12 sm:mt-12 lg:mt-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    style={{ transitionDelay: '0.9s' }}
                >
                    <div className="relative group">
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-purple-200/50 shadow-xl backdrop-blur-sm overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />

                            {/* Content */}
                            <div className="relative text-center space-y-4">
                                <Sparkles className="w-8 h-8 text-purple-500 mx-auto animate-pulse" />
                                <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                                    Click on any year to view detailed activities and photos from that period.
                                    <br />
                                    <span className="text-purple-600 font-semibold">
                                        Experience the journey of compassion and service
                                    </span>{' '}
                                    through our documented efforts.
                                </p>
                                <div className="flex items-center justify-center gap-2 pt-2">
                                    <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                    <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                /* Mobile touch support */
                @media (hover: none) and (pointer: coarse) {
                    .group:active .absolute.inset-0.bg-gradient-to-t {
                        opacity: 1 !important;
                    }
                    .group:active .transform.translate-y-8 {
                        transform: translateY(0) !important;
                    }
                }

                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-100px) translateX(50px) scale(1.5);
                        opacity: 0.8;
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.05;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.1;
                        transform: scale(1.05);
                    }
                }

                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes gradient-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes gradient-rotate-reverse {
                    0% {
                        transform: rotate(360deg);
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                        filter: brightness(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                        filter: brightness(1.2);
                    }
                }

                @keyframes ping-slow {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    75%, 100% {
                        transform: scale(2.5);
                        opacity: 0;
                    }
                }

                .animate-float-particle {
                    animation: float-particle 15s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animate-gradient-rotate {
                    animation: gradient-rotate 8s linear infinite;
                }

                .animate-gradient-rotate-reverse {
                    animation: gradient-rotate-reverse 8s linear infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-500 {
                    animation-delay: 0.5s;
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default VFTLpage;