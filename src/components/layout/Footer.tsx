import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, MapPin, Mail, Phone } from 'lucide-react';

interface LinkItem {
	label: string;
	href: string;
}

interface SocialLink {
	icon: React.ReactNode;
	href: string;
	label: string;
	color: string;
}

const Footer: React.FC = () => {
	const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>(
		[],
	);

	useEffect(() => {
		const newParticles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			left: `${Math.random() * 100}%`,
			delay: `${Math.random() * 5}s`,
			duration: `${Math.random() * 3 + 5}s`,
		}));
		setParticles(newParticles);
	}, []);

	const quickLinks: LinkItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Activities', href: '/activities' },
		{ label: 'Administration', href: '/administration' },
		{ label: 'Donations', href: '/donation' },
		{ label: 'Yearly Reports', href: '/yearly-reports' },
		{ label: 'Contact Us', href: '/about' },
	];

	const socialLinks: SocialLink[] = [
		{ icon: <Facebook className="w-5 h-5 text-white" />, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
		{ icon: <Twitter className="w-5 h-5 text-white" />, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
		{
			icon: <Instagram className="w-5 h-5 text-white" />,
			href: '#',
			label: 'Instagram',
			color: 'hover:bg-pink-600',
		},
		{ icon: <Linkedin className="w-5 h-5 text-white" />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
	];

	return (
		<div className="flex flex-col text-white">
			{/* Footer */}
			<footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
				{/* Animated Wave Background */}
				<div className="absolute inset-0 opacity-10">
					<svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
						<path
							fill="url(#wave-gradient)"
							fillOpacity="1"
							d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
							className="animate-wave"
						/>
						<defs>
							<linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#f97316" />
								<stop offset="100%" stopColor="#ea580c" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/* Animated Glow Orbs */}
				<div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
				<div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

				{/* Floating Particles */}
				{particles.map((particle) => (
					<div
						key={particle.id}
						className="absolute w-1.5 h-1.5 bg-orange-500/40 rounded-full animate-float-up"
						style={{
							left: particle.left,
							bottom: '0',
							animationDelay: particle.delay,
							animationDuration: particle.duration,
						}}
					/>
				))}

				{/* Top Border Wave */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-shimmer" />

				{/* Footer Content */}
				<div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
					{/* Main Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
						{/* About Section */}
						<div className="lg:col-span-1 space-y-6 animate-fade-slide-up" style={{ animationDelay: '0.1s' }}>
							<div className="group">
								<div className="flex items-center gap-4 mb-4">
									<div className="relative">
										<div className="absolute inset-0 bg-orange-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
										<div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
											<Heart className="w-7 h-7 text-white animate-pulse-soft" />
										</div>
									</div>
									<div>
										<h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
											Viraga Foundation
										</h3>
										<p className="text-xs text-slate-400 font-medium">Regd. No. 273/2022</p>
									</div>
								</div>
							</div>
							<p className="text-slate-300 leading-relaxed text-sm">
								VIRAGA FOUNDATION was established on November 25, 2020, by a group of dedicated
								individuals inspired by the timeless teachings of Swami Vivekananda. Our journey began
								with a vision to serve humanity with compassion, and our foundation was graciously
								inaugurated by Swami Hridananadji Maharaj, Secretary of Ramakrishna Mission, Vijayawada.
							</p>
						</div>

						{/* Quick Links */}
						<div className="animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
							<div className="inline-block mb-6">
								<h3 className="text-xl font-bold text-white mb-2">QUICK LINKS</h3>
								<div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-expand" />
							</div>
							<ul className="space-y-3">
								{quickLinks.map((link, index) => (
									<li key={index} className="group">
										<a
											href={link.href}
											className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-all duration-300 group-hover:translate-x-2"
										>
											<div className="w-6 h-6 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
												<ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
											</div>
											<span className="font-medium">{link.label}</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Social Links */}
						<div className="animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
							<div className="inline-block mb-6">
								<h3 className="text-xl font-bold text-white mb-2">CONNECT WITH US</h3>
								<div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-expand" />
							</div>
							<p className="text-slate-400 text-sm mb-6">
								Follow us on social media to stay updated with our latest activities and initiatives.
							</p>
							<div className="flex flex-wrap gap-3">
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.href}
										aria-label={social.label}
										className={`group relative w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/50 ${social.color}`}
										style={{ animationDelay: `${index * 0.1}s` }}
									>
										<div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/20 group-hover:to-orange-600/20 rounded-xl transition-all duration-300" />
										{social.icon}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Divider
					<div className="relative my-8">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-slate-700/50" />
						</div>
						<div className="relative flex justify-center">
							<span className="bg-slate-900 px-4 py-2 rounded-full">
								<Heart className="w-5 h-5 text-orange-500 animate-pulse-soft" />
							</span>
						</div>
					</div> */}

					{/* Footer Bottom */}
					<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
						<div className="text-slate-400 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
							<p className="font-medium">© Copyright 2026. All Rights Reserved.</p>
						</div>
						<div className="flex flex-col sm:flex-row items-center gap-2 text-slate-400 animate-fade-in" style={{ animationDelay: '0.5s' }}>
							<span className="text-sm">Built with</span>
							<Heart className="w-4 h-4 text-orange-500 animate-pulse-soft" />
							<span className="text-sm">by</span>
							<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full backdrop-blur-sm hover:bg-slate-800 transition-all duration-300">
								<span className="text-orange-500 font-semibold">Elite8Digital</span>
								<img
									src="/elite8digital-nav.png"
									alt="Elite8Digital"
									className="h-6 w-10 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Custom Styles */}
				<style>{`
					@keyframes fade-slide-up {
						from {
							opacity: 0;
							transform: translateY(40px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes fade-in {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes float-up {
						0% {
							transform: translateY(0) translateX(0) scale(0);
							opacity: 0;
						}
						10% {
							opacity: 1;
							transform: scale(1);
						}
						90% {
							opacity: 0.6;
						}
						100% {
							transform: translateY(-100vh) translateX(50px) scale(0);
							opacity: 0;
						}
					}

					@keyframes wave {
						0%, 100% {
							transform: translateX(0);
						}
						50% {
							transform: translateX(-25%);
						}
					}

					@keyframes shimmer {
						0% {
							transform: translateX(-100%);
						}
						100% {
							transform: translateX(100%);
						}
					}

					@keyframes pulse-slow {
						0%, 100% {
							opacity: 0.05;
							transform: scale(1);
						}
						50% {
							opacity: 0.15;
							transform: scale(1.1);
						}
					}

					@keyframes pulse-soft {
						0%, 100% {
							opacity: 0.8;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.1);
						}
					}

					@keyframes expand {
						from {
							width: 0;
						}
						to {
							width: 4rem;
						}
					}

					.animate-fade-slide-up {
						animation: fade-slide-up 0.8s ease-out forwards;
						opacity: 0;
					}

					.animate-fade-in {
						animation: fade-in 0.8s ease-out forwards;
						opacity: 0;
					}

					.animate-float-up {
						animation: float-up 8s infinite;
					}

					.animate-wave {
						animation: wave 8s ease-in-out infinite;
					}

					.animate-shimmer {
						animation: shimmer 3s infinite;
					}

					.animate-pulse-slow {
						animation: pulse-slow 4s ease-in-out infinite;
					}

					.animate-pulse-soft {
						animation: pulse-soft 2s ease-in-out infinite;
					}

					.animate-expand {
						animation: expand 0.6s ease-out forwards;
					}
				`}</style>
			</footer>
		</div>
	);
};

export default Footer;