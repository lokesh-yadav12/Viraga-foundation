import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../../assets/vira1.png';

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
		const newParticles = Array.from({ length: 15 }, (_, i) => ({
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

				{/* Top Border */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />

				{/* Footer Content */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
					{/* Main Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
						{/* About Section */}
						<div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6 animate-fade-slide-up" style={{ animationDelay: '0.1s' }}>
							<div className="group">
								<div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-4">
									<div className="relative flex-shrink-0">
										<img src={logo} alt="Viraga Foundation Logo" className="h-40 w-80 object-contain" />
									</div>
									{/* <div>
										<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
											Viraga Foundation
										</h3>
										<p className="text-xs sm:text-sm text-slate-400 font-medium">Regd. No. 273/2022</p>
									</div> */}
								</div>
							</div>
							<p className="text-slate-300 leading-relaxed text-sm sm:text-base">
								VIRAGA FOUNDATION was established on November 25, 2020, by a group of dedicated
								individuals inspired by the timeless teachings of Swami Vivekananda. Our journey began
								with a vision to serve humanity with compassion, and our foundation was graciously
								inaugurated by Swami Hridananadji Maharaj, Secretary of Ramakrishna Mission, Vijayawada.
							</p>
						</div>

						{/* Quick Links */}
						<div className="animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
							<div className="inline-block mb-4 sm:mb-6">
								<h3 className="text-lg sm:text-xl font-bold text-white mb-2">QUICK LINKS</h3>
								<div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-expand" />
							</div>
							<ul className="space-y-2 sm:space-y-3">
								{quickLinks.map((link, index) => (
									<li key={index} className="group">
										<a
											href={link.href}
											className="flex items-center gap-2 sm:gap-3 text-slate-300 hover:text-orange-500 transition-all duration-300 group-hover:translate-x-2"
										>
											<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300 flex-shrink-0">
												<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
											</div>
											<span className="font-medium text-sm sm:text-base">{link.label}</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Social Links */}
						<div className="animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
							<div className="inline-block mb-4 sm:mb-6">
								<h3 className="text-lg sm:text-xl font-bold text-white mb-2">CONNECT WITH US</h3>
								<div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-expand" />
							</div>
							<p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">
								Follow us on social media to stay updated with our latest activities and initiatives.
							</p>
							<div className="flex flex-wrap gap-2 sm:gap-3">
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.href}
										aria-label={social.label}
										className={`group relative w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/50 ${social.color}`}
										style={{ animationDelay: `${index * 0.1}s` }}
									>
										<div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/20 group-hover:to-orange-600/20 rounded-xl transition-all duration-300" />
										{social.icon}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700/50 text-xs sm:text-sm">
						<div className="text-slate-400 text-center sm:text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
							<p className="font-medium">© Copyright 2026. All Rights Reserved.</p>
						</div>
						<div className="flex  sm:flex-row items-center gap-2 text-slate-400 animate-fade-in" >
							<span className="text-xs sm:text-sm">Built with</span>
							<Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 animate-pulse-soft" />
							<span className="text-xs sm:text-sm">by</span>
							<div className="flex items-center gap-1 px-1 sm:px-3 py-1 sm:py-1.5  rounded-full  hover:bg-slate-800 transition-all duration-300">
								{/* <span className="text-orange-500 font-semibold text-xs sm:text-sm">Elite8Digital</span> */}
								<img
									src="/elite8digital-nav.png"
									alt="Elite8Digital"
									className="h-8 w-8 sm:h-16 sm:w-12 object-contain"
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