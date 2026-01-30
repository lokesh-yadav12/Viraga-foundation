import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import bgpic from '../assets/bgpic.jpg'
import img1 from '.././assets/image1.png'
import img2 from '.././assets/orphan1.png'
import img3 from '.././assets/level3.png'
import img4 from '.././assets/level4.png'

const ActivitiesPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const activities = [
			{
			year: '2025-2026',
			image: img1,
			link: '/activities/2025-2026'
		},
		{
			year: '2024-2025',
			image: img1,
			link: '/activities/2024-2025'
		},
		{
			year: '2023-2024',
			image: img2,
			link: '/activities/2023-2024'
		},
		{
			year: '2022-2023',
			image: img3,
			link: '/activities/2022-2023'
		},
		{
			year: '2020-2021',
			image: img4,
			link: '/activities/2020-2021'
		}
	];

	const handleActivityClick = (link: string): void => {
		// Navigate to activity detail page
		window.location.href = link;
	};

	return (
		<div className="min-h-screen bg-white  relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
				<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
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
							animationDuration: `${Math.random() * 10 + 10}s`
						}}
					/>
				))}
			</div>

			{/* Hero Section */}
			<div className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
				{/* Background Image with Parallax */}
				<div
					className="absolute inset-0 bg-cover bg-center transform scale-110 "
					style={{
						backgroundImage:
							'url("' + bgpic + '")',
					}}
				/>
				
				{/* Multi-layered Gradients */}
				{/* <div className="absolute inset-0 " />
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
				 */}
				{/* Animated Grid Pattern */}
				{/* <div className="absolute inset-0 opacity-10" style={{
					backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
					backgroundSize: '50px 50px'
				}} /> */}

				{/* Floating Decorative Elements */}
				{/* <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float-rotate" />
				<div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-pink-400/30 rotate-45 animate-float-bounce" />
				<div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-purple-400/30 rounded-lg animate-spin-slow" /> */}

				{/* Hero Content */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-center space-y-6 px-4">
						{/* Animated Badge */}
						<div 
							className={`inline-flex items-center gap-2 px-5 py-2.5 sm:mt-8 mb-8 sm:mb-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-1000 ${
								isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
							}`}
						>
							<Sparkles className="w-4 h-4 text-pink-400 hidden sm:visible animate-pulse" />
							<span>Our Journey of Service</span>
						</div>

						{/* Main Title */}
						<h1
							className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
							}`}
							style={{ transitionDelay: '0.2s' }}
						>
							<span className="block text-white sm:mb-2 drop-shadow-2xl">
								ACTIVITIES
							</span>
							<span className="block text-transparent bg-clip-text text-white animate-gradient-x">
								Timeline
							</span>
						</h1>

						{/* Subtitle */}
						<p
							className={`text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: '0.4s' }}
						>
							Explore our journey of compassion, dedication, and community service through the years
						</p>

						{/* Decorative Lines */}
						{/* <div 
							className={`flex items-center justify-center gap-3 transition-all duration-1000 ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: '0.6s' }}
						>
							<div className="h-1 w-16 bg-gradient-to-r from-transparent via-pink-400 to-purple-400 rounded-full" />
							<div className="w-2 h-2 bg-white rounded-full animate-pulse" />
							<div className="h-1 w-16 bg-gradient-to-r from-purple-400 via-pink-400 to-transparent rounded-full" />
						</div> */}
					</div>
				</div>

				{/* Wave Divider */}
				{/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
					<svg className="relative block w-full h-20 sm:h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
							fill="url(#wave-gradient)" 
						/>
						<defs>
							<linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="rgb(248 250 252)" />
								<stop offset="50%" stopColor="rgb(250 245 255)" />
								<stop offset="100%" stopColor="rgb(254 242 242)" />
							</linearGradient>
						</defs>
					</svg>
				</div> */}
			</div>

			{/* Main Content */}
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
				{/* Section Header */}
				<div 
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: '0.8s' }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-4 shadow-sm">
						<Calendar className="w-4 h-4" />
						<span>Year by Year</span>
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
						Explore Our Activities
					</h2>
					<div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
				</div>

				{/* First Row - 3 Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
					{activities.slice(0, 3).map((activity, index) => (
						<div
							key={activity.year}
							className={`transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: `${(index + 1) * 150}ms` }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div
								onClick={() => handleActivityClick(activity.link)}
								className="group cursor-pointer"
							>
								{/* Image Card */}
								<div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2">
									{/* Decorative Corner Accents */}
									<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
									<div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

									{/* Animated Border */}
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ padding: '3px' }} />
									
									{/* Image Container */}
									<div className="aspect-[4/3] overflow-hidden rounded-3xl relative">
										<img
											src={activity.image}
											alt={`Activities ${activity.year}`}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										
										{/* Gradient Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									</div>

									{/* Hover Content Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8 rounded-3xl">
										<div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
											<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
												<Calendar className="w-4 h-4 text-pink-400" />
												<span className="text-white font-semibold">{activity.year}</span>
											</div>
											<div className="flex items-center gap-2 text-white font-semibold text-lg">
												<span>View Activities</span>
												<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
											</div>
										</div>
									</div>

									{/* Floating Sparkles on Hover */}
									{hoveredIndex === index && (
										<>
											<Sparkles className="absolute top-4 right-4 w-5 h-5 text-pink-400 animate-pulse z-20" />
											<Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-purple-400 animate-ping z-20" />
										</>
									)}
								</div>

								{/* Year Label */}
								<div className="mt-6 text-center transform group-hover:scale-105 transition-transform duration-300">
									<h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
										{activity.year}
									</h3>
									<div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Decorative Divider */}
				<div 
					className={`relative py-8 transition-all duration-1000 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
					style={{ transitionDelay: '0.6s' }}
				>
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t-2 border-gradient-to-r from-transparent via-purple-300 to-transparent" />
					</div>
					<div className="relative flex justify-center">
						<div className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full shadow-lg">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
								<div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
								<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
							</div>
						</div>
					</div>
				</div>

				{/* Second Row - 1 Card (Left Aligned) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-16">
					{activities.slice(3, 5).map((activity, index) => (
						<div
							key={activity.year}
							className={`transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: `${(index + 4) * 150}ms` }}
							onMouseEnter={() => setHoveredIndex(3)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div
								onClick={() => handleActivityClick(activity.link)}
								className="group cursor-pointer"
							>
								{/* Image Card */}
								<div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2">
									{/* Decorative Corner Accents */}
									<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
									<div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

									{/* Animated Border */}
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ padding: '3px' }} />
									
									{/* Image Container */}
									<div className="aspect-[4/3] overflow-hidden rounded-3xl relative">
										<img
											src={activity.image}
											alt={`Activities ${activity.year}`}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										
										{/* Gradient Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									</div>

									{/* Hover Content Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8 rounded-3xl">
										<div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
											<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
												<Calendar className="w-4 h-4 text-pink-400" />
												<span className="text-white font-semibold">{activity.year}</span>
											</div>
											<div className="flex items-center gap-2 text-white font-semibold text-lg">
												<span>View Activities</span>
												<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
											</div>
										</div>
									</div>

									{/* Floating Sparkles on Hover */}
									{hoveredIndex === 3 && (
										<>
											<Sparkles className="absolute top-4 right-4 w-5 h-5 text-pink-400 animate-pulse z-20" />
											<Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-purple-400 animate-ping z-20" />
										</>
									)}
								</div>

								{/* Year Label */}
								<div className="mt-6 text-center transform group-hover:scale-105 transition-transform duration-300">
									<h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
										{activity.year}
									</h3>
									<div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Info Card */}
				<div
					className={`mt-16 sm:mt-20 lg:mt-24 transition-all duration-1000 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
									<span className="text-purple-600 font-semibold">Experience the journey of compassion and service</span> through our documented efforts.
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
				@keyframes float-slow {
					0%, 100% {
						transform: translateY(0) translateX(0);
					}
					50% {
						transform: translateY(-30px) translateX(20px);
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

				@keyframes float-rotate {
					0%, 100% {
						transform: translateY(0) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(180deg);
					}
				}

				@keyframes float-bounce {
					0%, 100% {
						transform: translateY(0) rotate(45deg);
					}
					50% {
						transform: translateY(-15px) rotate(45deg);
					}
				}

				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes ken-burns {
					0% {
						transform: scale(1.1) translateX(0);
					}
					100% {
						transform: scale(1.2) translateX(-5%);
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

				.animate-float-slow {
					animation: float-slow 8s ease-in-out infinite;
				}

				.animate-float-particle {
					animation: float-particle 15s ease-in-out infinite;
				}

				.animate-float-rotate {
					animation: float-rotate 6s ease-in-out infinite;
				}

				.animate-float-bounce {
					animation: float-bounce 4s ease-in-out infinite;
				}

				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}

				.animate-ken-burns {
					animation: ken-burns 30s ease-out infinite alternate;
				}

				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}

				.animate-gradient-x {
					background-size: 200% 200%;
					animation: gradient-x 3s ease infinite;
				}
			`}</style>
		</div>
	);
};

export default ActivitiesPage;