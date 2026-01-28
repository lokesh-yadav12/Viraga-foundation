import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';

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
			delay: `${Math.random() * 6}s`,
			duration: `${Math.random() * 4 + 4}s`,
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
		<div className=" flex flex-col text-white">
			{/* Main Content */}
			{/* <main className="flex-1 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Your Content Here</h1>
          <p className="text-xl md:text-2xl opacity-90">Scroll down to see the footer</p>
        </div>
      </main> */}

			{/* Footer */}
			<footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
				{/* Animated Top Border */}
				<div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
					<div className="absolute w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-slide-line" />
				</div>

				{/* Floating Particles */}
				{particles.map((particle) => (
					<div
						key={particle.id}
						className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-float"
						style={{
							left: particle.left,
							animationDelay: particle.delay,
							animationDuration: particle.duration,
						}}
					/>
				))}

				{/* Footer Content */}
				<div className="relative max-w-7xl mx-auto  pt-12 pb-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
						{/* Logo Section */}
						<div className="sm:px-12 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
							<div className="flex items-center gap-4">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 transition-transform hover:rotate-12 hover:scale-110 duration-500">
									<Heart className="w-8 h-8 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
										Viraga Foundation
									</h3>
									<p className="text-sm text-slate-400">Regd. No. 273/2022</p>
								</div>
							</div>
							<p className="text-white leading-relaxed text-md">
								VIRAGA FOUNDATION was established on November 25, 2020, by a group of dedicated
								individuals inspired by the timeless teachings of Swami Vivekananda. Our journey began
								with a vision to serve humanity with compassion, and our foundation was graciously
								inaugurated by Swami Hridananadji Maharaj, Secretary of Ramakrishna Mission, Vijayawada.
							</p>
						</div>

						{/* Quick Links */}
						<div className="sm:grid sm:grid-cols-2 sm:gap-0 gap-8">
							<div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
								<h3 className="text-lg font-semibold mb-6 relative pb-3">
									QUICK LINKS
									<span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
								</h3>
								<ul className="space-y-3">
									{quickLinks.map((link, index) => (
										<li key={index} className="group">
											<a
												href={link.href}
												className="flex items-center gap-3 text-white hover:text-orange-500 transition-all duration-300 group-hover:translate-x-2"
											>
												<ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
												<span>{link.label}</span>
											</a>
										</li>
									))}
								</ul>
							</div>

							{/* Social Links */}
							<div className="animate-fade-in-up sm:py-0 py-8" style={{ animationDelay: '0.3s' }}>
								<h3 className="text-lg font-semibold mb-3 relative pb-3">
									FOLLOW US
									<span className="absolute bottom-0 left-0 w-12 h-1  rounded-full" />
								</h3>
								<div className="flex flex-wrap gap-4">
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.href}
											aria-label={social.label}
											className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/40 ${social.color}`}
										>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="sm:mt-6 mt-8 sm:pt-8 pt-8 pb-0 mb-0 border-t border-white/10">
						<div className="flex flex-col  justify-between items-center gap-4 text-sm text-slate-400">
							<div>© Copyright 2026. All Rights Reserved.</div>
							<div className="sm:text-lg text-md flex flex-row items-center justify-center sm:gap-2">
								<div>Built with ❤️ by Elite8Digital</div>
								<img
									src="/elite8digital-nav.png"
									alt="Viraga Foundation"
									className="sm:h-12 sm:w-20 h-12 w-16"
								/>
								{/* {' '} */}
								{/* <a
									href="#"
									className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
								>
									Star Themes
								</a>{' '}
								and{' '}
								<a
									href="#"
									className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
								>
									WordPress
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-line {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
          opacity: 0;
        }

        .animate-slide-line {
          animation: slide-line 3s infinite;
        }

        .animate-float {
          animation: float 6s infinite;
        }
      `}</style> */}
		</div>
	);
};

export default Footer;
