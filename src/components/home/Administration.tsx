import React from 'react';
import { Award, Users, Shield, Briefcase } from 'lucide-react';
import ch from '../../assets/ch.png';
import naga from '../../assets/naga.png';
import j from '../../assets/j.png';
import sitaram from '../../assets/sitaram.png';
import rajesh from '../../assets/rajesh.png';
import durga from '../../assets/durga.png';
import bala from '../../assets/bala.png';
import veer from '../../assets/veer.png';
import soma from '../../assets/soma.png';
import bg from '../../assets/i14.png'
type Member = {
	name: string;
	role: string;
	image: string;
	description: string;
};

const members: Member[] = [
	{
		name: 'Ch Appa Rao',
		role: 'President',
		image: ch,
		description:
			'The President presides over all meetings of the General Body, Executive Committee, and Special Committees of the Foundation, exercising overall control of all affairs of VIRAGA FOUNDATION.',
	},
	{
		name: 'Naga Lakshmi Bhavani Gunturu',
		role: 'Associate President',
		image: naga,
		description:
			'The Associate President performs functions delegated by the President or entrusted by the Executive Committee.',
	},
	{
		name: 'J. Ramachrandra Rao',
		role: 'Vice President',
		image: j,
		description:
			'The Vice President performs functions delegated by the President or entrusted by the Executive Committee.',
	},
	{
		name: 'Sitaram Raju Uppalapati',
		role: 'Secretary',
		image: sitaram,
		description:
			'The Secretary manages the administration of the Foundation, conducts meetings, executes documents, issues notices, and ensures implementation of resolutions passed by the General Body and Executive Committee.',
	},
	{
		name: 'Rajesh Alahari',
		role: 'Joint Secretary – I',
		image: rajesh,
		description:
			'Assists the Secretary in the discharge of duties and performs the responsibilities of the Secretary in their absence.',
	},
	{
		name: 'Durga Rao Vinayaka',
		role: 'Joint Secretary – II',
		image: durga,
		description:
			'Assists the Secretary and Joint Secretary–I and performs their duties when entrusted or in their absence.',
	},
	{
		name: 'Bala Subrahmanyam Bonumaddi',
		role: 'Treasurer',
		image: bala,
		description:
			'Maintains financial records, prepares annual accounts, ensures auditing, and presents financial statements at the General Body Meetings.',
	},
	{
		name: 'Veereswar Nadimpalli',
		role: 'Executive Committee Member',
		image: veer,
		description: 'Performs responsibilities delegated by the President, Secretary, and Associate President.',
	},
	{
		name: 'Soma Sekhara Sita Rambabu Anumala',
		role: 'Executive Committee Member',
		image: soma,
		description: 'Performs responsibilities delegated by the President, Secretary, and Associate President.',
	},
];

const Administration = () => {
	// Icon mapping for visual hierarchy
	const getRoleIcon = (role: string) => {
		if (role.includes('President')) return <Shield className="w-5 h-5" />;
		if (role.includes('Secretary')) return <Briefcase className="w-5 h-5" />;
		if (role.includes('Treasurer')) return <Award className="w-5 h-5" />;
		return <Users className="w-5 h-5" />;
	};

	return (
		<div className="relative bg-slate-50 overflow-hidden sm:pt-20">
			{/* Decorative Background Elements */}
			<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
				<div className="absolute top-20 -right-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow" />
				<div
					className="absolute bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"
					style={{ animationDelay: '1s' }}
				/>
				<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-500/3 to-blue-500/3 rounded-full blur-3xl" />
			</div>

			{/* ================= HERO SECTION ================= */}
			<section className="relative h-[70vh]  w-full overflow-hidden">
				{/* Image with Parallax Effect */}
				<div className="absolute inset-0">
					<img
						src={bg}
						alt="Administration Team"
						className="h-full w-full object-cover scale-110 animate-ken-burns"
					/>
					{/* Gradient Overlays */}
					<div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/40 to-orange-900/60" />
					<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
				</div>

				{/* Animated Geometric Shapes */}
				<div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-500/30 rounded-lg rotate-12 animate-float-rotate" />
				<div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-blue-500/30 rounded-full animate-float-bounce" />

				{/* Hero Content */}
				<div className="absolute inset-0 pt-16 sm:pt-0 flex items-center">
					<div className="mx-auto max-w-6xl px-6 w-full">
						<div className="max-w-3xl space-y-6 animate-fade-in-up">
							{/* Badge */}
							{/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium animate-fade-in">
								<Shield className="w-4 h-4 text-orange-500" />
								<span>Leadership Team</span>
							</div> */}

							{/* Title */}
							<h1 className="text-2xl md:text-5xl sm:pt-0 pt-20 font-bold text-white leading-tight">
								<span className="block animate-slide-in-left">Administration</span>
								<span
									className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-slide-in-left"
									style={{ animationDelay: '0.2s' }}
								>
									Excellence
								</span>
							</h1>

							{/* Description */}
							<p
								className="max-w-2xl text-md md:text-xl text-slate-200 leading-relaxed animate-fade-in-up"
								style={{ animationDelay: '0.3s' }}
							>
								Meet the dedicated leadership and executive members guiding VIRAGA FOUNDATION with
								integrity, responsibility, and service.
							</p>

							{/* Decorative Line */}
							<div
								className="flex items-center gap-4 animate-fade-in-up"
								style={{ animationDelay: '0.4s' }}
							>
								<div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
								<div className="h-1 w-12 bg-gradient-to-r from-orange-500/60 to-transparent rounded-full" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= CONTENT SECTION ================= */}
			<section className="relative py-20   bg-slate-50">
				<div className="mx-auto max-w-7xl px-6">
					{/* Section Header */}
					<div className="text-center mb-16 animate-fade-in-up">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-4">
							<Users className="w-4 h-4" />
							<span>Our Leadership</span>
						</div>
						<h2 className="text-4xl font-bold text-slate-900 mb-4">Executive Committee</h2>
						<div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto" />
					</div>

					{/* Cards Grid */}
					<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
						{members.map((member, index) => (
							<div
								key={member.name}
								className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{/* Decorative Background Pattern */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Card Content */}
								<div className="relative flex flex-row gap-4 p-6">
									{/* Image Section */}
									<div className="flex justify-center sm:mx-2 sm:px-5 px-4 sm:justify-start shrink-0">
										<div className="relative">
											{/* Decorative Ring */}
											<div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

											{/* Image Container */}
											<div className="relative">
												{/* <img
													src={member.image}
													alt={member.name}
													className="h-32 w-32 rounded-2xl object-cover border-4 border-slate-100 group-hover:border-orange-500/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
												/> */}

												{/* Role Badge */}
												<div className="absolute  p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/30 transform group-hover:scale-110 transition-transform duration-300">
													{getRoleIcon(member.role)}
													<span className="text-white" />
												</div>
											</div>
										</div>
									</div>

									{/* Content Section */}
									<div className="flex-1 text-center sm:text-left space-y-3">
										{/* Name */}
										<h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
											{member.name}
										</h3>

										{/* Role with Badge */}
										<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-blue-50 rounded-full border border-orange-200/50">
											<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
											<span className="text-sm font-semibold text-orange-700">{member.role}</span>
										</div>

										{/* Description */}
										<p className="text-slate-600 leading-relaxed text-sm pt-2">
											{member.description}
										</p>

										{/* Decorative Bottom Line */}
										<div className="pt-4">
											<div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										</div>
									</div>
								</div>

								{/* Hover Border Effect */}
								<div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Custom Styles */}
			<style>{`
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(24deg);
          }
        }

        @keyframes float-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }

        .animate-float-rotate {
          animation: float-rotate 6s ease-in-out infinite;
        }

        .animate-float-bounce {
          animation: float-bounce 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
		</div>
	);
};

export default Administration;
