import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  ArrowRight, Calendar, Sparkles } from 'lucide-react';

// One representative image per sub-folder as cover
import cover1 from '../../assets/anandam/inauguration/1.jpg';
import cover2 from '../../assets/anandam/29-11-2020/18.jpeg';
import cover3 from '../../assets/anandam/7-2-2021/1.jpg';
import cover4 from '../../assets/anandam/21-02-2021/1.jpg';
import cover5 from '../../assets/anandam/25-02-2021/3.jpg';
import cover6 from '../../assets/anandam/2-5-2023/1.jpeg';
import cover7 from '../../assets/anandam/12-3-2023/1.jpg';
import cover8 from '../../assets/anandam/2-5-2023/6.jpeg';
import cover9 from '../../assets/anandam/29-11-2020/40.jpeg';
const subFolders = [
    { label: 'Inauguration', link: '/activities/anandam/inauguration', cover: cover1 },
    { label: '29 Nov 2020', link: '/activities/anandam/29-11-2020', cover: cover2 },
    { label: '7 Feb 2021', link: '/activities/anandam/7-2-2021', cover: cover3 },
    { label: '21 Feb 2021', link: '/activities/anandam/21-02-2021', cover: cover4 },
    { label: '25 Feb 2021', link: '/activities/anandam/25-02-2021', cover: cover5 },
    { label: '2 May 2023', link: '/activities/anandam/2-5-2023', cover: cover6 },
    { label: '12 Mar 2023', link: '/activities/anandam/12-3-2023', cover: cover7 },
    { label: '3 Mar 2024', link: '/activities/anandam/3-3-2024', cover: cover8 },
    { label: '31 Aug 2024', link: '/activities/anandam/31-8-2024', cover: cover9 },
];

const AnandamPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // const navigate = useNavigate();

    useEffect(() => { setIsVisible(true); }, []);

    return (
        <div className="min-h-screen bg-white sm:pt-12">
            {/* Header */}
            {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 mb-4 text-white/80 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold">Anandam</h1>
                <p className="mt-2 text-white/70">Select an event to view photos</p>
            </div> */}

            {/* Sub-folder Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-4 shadow-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Annadaanam Events</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Year wise</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {subFolders.map((folder, index) => (
                        <div
                            key={folder.label}
                            className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Link to={folder.link} className="group cursor-pointer block">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 bg-white transform hover:-translate-y-4 hover:scale-105">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative bg-white rounded-3xl overflow-hidden">
                                        <div className="aspect-[4/3] overflow-hidden rounded-3xl relative">
                                            <img
                                                src={folder.cover}
                                                alt={folder.label}
                                                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/98 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-10 rounded-3xl">
                                            <div className="text-center space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl">
                                                    <Calendar className="w-5 h-5 text-pink-400" />
                                                    <span className="text-white font-bold text-lg">{folder.label}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white font-bold text-xl">
                                                    <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">View Photos</span>
                                                    <ArrowRight className="w-6 h-6 text-pink-400 group-hover:translate-x-2 transition-transform duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                        {hoveredIndex === index && (
                                            <Sparkles className="absolute top-6 right-6 w-6 h-6 text-pink-400 animate-pulse z-20" />
                                        )}
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                                        {folder.label}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnandamPage;
