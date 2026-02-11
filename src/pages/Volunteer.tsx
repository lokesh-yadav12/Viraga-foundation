import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/viraganew.png';

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

// New elegant animation variants
const slideInFromLeft = {
	hidden: { opacity: 0, x: -60 },
	visible: { opacity: 1, x: 0 },
};

const slideInFromRight = {
	hidden: { opacity: 0, x: 60 },
	visible: { opacity: 1, x: 0 },
};

const floatingAnimation = {
	y: [0, -10, 0],
	transition: {
		duration: 3,
		repeat: Infinity,
		ease: [0.4, 0, 0.2, 1]   // cubic bezier (recommended)

	}
};

const departments = [
	'Administration',
	'Teaching Support',
	'Technical support',
	'Public contact (PRO)',
	'Computer (Information Technology)',
];

export default function Volunteer() {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section className="relative bg-white overflow-hidden min-h-screen">
			{/* Animated Background Gradient */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.05 }}
				transition={{ duration: 2 }}
				className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-purple-100"
			/>

			{/* Decorative Floral Elements - Top Right */}
			<motion.div
				initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
				animate={{ opacity: 0.4, rotate: 0, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.3 }}
				className="absolute top-10 right-2 sm:top-20 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 pointer-events-none"
			>
				{/* Purple Flower */}
				{/* <svg viewBox="0 0 200 200" className="w-full h-full">
					<g transform="translate(100, 50)">
						<motion.circle 
							r="15" 
							fill="#e9d5ff"
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
						<motion.circle cx="0" cy="-25" r="12" fill="#d8b4fe" animate={floatingAnimation} />
						<motion.circle cx="22" cy="-12" r="12" fill="#c084fc" animate={floatingAnimation} transition={{ delay: 0.2 }} />
						<motion.circle cx="22" cy="12" r="12" fill="#a855f7" animate={floatingAnimation} transition={{ delay: 0.4 }} />
						<motion.circle cx="0" cy="25" r="12" fill="#9333ea" animate={floatingAnimation} transition={{ delay: 0.6 }} />
						<motion.circle cx="-22" cy="12" r="12" fill="#a855f7" animate={floatingAnimation} transition={{ delay: 0.8 }} />
						<motion.circle cx="-22" cy="-12" r="12" fill="#c084fc" animate={floatingAnimation} transition={{ delay: 1 }} />
					</g>

					
					<g transform="translate(100, 150)">
						<motion.circle 
							r="18" 
							fill="#dbeafe"
							animate={{ scale: [1, 1.15, 1] }}
							transition={{ duration: 2.5, repeat: Infinity }}
						/>
						<motion.circle cx="0" cy="-30" r="14" fill="#bfdbfe" animate={floatingAnimation} transition={{ delay: 0.3 }} />
						<motion.circle cx="26" cy="-15" r="14" fill="#93c5fd" animate={floatingAnimation} transition={{ delay: 0.5 }} />
						<motion.circle cx="26" cy="15" r="14" fill="#60a5fa" animate={floatingAnimation} transition={{ delay: 0.7 }} />
						<motion.circle cx="0" cy="30" r="14" fill="#3b82f6" animate={floatingAnimation} transition={{ delay: 0.9 }} />
						<motion.circle cx="-26" cy="15" r="14" fill="#60a5fa" animate={floatingAnimation} transition={{ delay: 1.1 }} />
						<motion.circle cx="-26" cy="-15" r="14" fill="#93c5fd" animate={floatingAnimation} transition={{ delay: 1.3 }} />
					</g>

					
					<motion.path
						d="M 100 50 Q 120 80, 100 110 Q 80 140, 100 150"
						stroke="#c084fc"
						strokeWidth="2"
						fill="none"
						opacity="0.3"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 2, delay: 0.5 }}
					/>
				</svg> */}
			</motion.div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-24 md:py-28">
				{/* Header Section */}
				<motion.div
					ref={headerRef}
					initial="hidden"
					animate={headerInView ? "visible" : "hidden"}
					variants={fadeUp}
					transition={{ duration: 0.8 }}
					className="text-center mb-8 sm:mb-12 md:mb-12"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={headerInView ? { scale: 1, opacity: 1 } : {}}
						transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
						className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-12 sm:py-6 md:px-10 md:py-6 shadow-xl border border-amber-200/50 w-full sm:w-auto"
					>
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={headerInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 sm:mb-4 tracking-tight"
						>
							<motion.span
								animate={{
									backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
								}}
								transition={{ duration: 5, repeat: Infinity }}
								style={{
									backgroundImage: 'linear-gradient(90deg, #1f2937, #f97316, #fbbf24, #1f2937)',
									backgroundSize: '200% 100%',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
								}}
							>
								Volunteer
							</motion.span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={headerInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium px-2"
						>
							Join the Mission, Spread Compassion
						</motion.p>
					</motion.div>
				</motion.div>

				{/* Main Content - Image and Quote Card */}
				<div ref={ref} className="max-w-5xl mx-auto items-center flex justify-center mb-8 sm:mb-12 md:mb-16">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
						className="relative"
					>
						{/* Animated Glow Effect */}
						<motion.div 
							className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-orange-300 to-amber-400 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20"
							animate={{
								opacity: [0.2, 0.3, 0.2],
								scale: [1, 1.05, 1],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						
						{/* Card */}
						<motion.div 
							className="relative sm:w-[60vw] shadow-2xl backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="p-3 sm:p-4 md:p-6 lg:p-8">
								{/* Image Container */}
								<motion.div 
									className="rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center"
									initial={{ scale: 0.9, opacity: 0 }}
									animate={inView ? { scale: 1, opacity: 1 } : {}}
									transition={{ delay: 0.2, duration: 0.6 }}
								>
									<motion.img
										src={logo}
										alt="Volunteering - Swami Vivekananda"
										className="w-[300px] sm:w-[400px] md:w-[400px] h-[30vh] object-cover"
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.4 }}
									/>
								</motion.div>

								{/* Quote Section */}
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ delay: 0.4, duration: 0.6 }}
									className="backdrop-blur-sm text-center rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
								>
									<motion.h3 
										className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight"
										initial={{ opacity: 0, y: 20 }}
										animate={inView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.6, duration: 0.5 }}
									>
										VOLUNTEERING
									</motion.h3>
									<motion.p 
										className="text-lg sm:text-xl md:text-2xl italic text-gray-700 mb-2 sm:mb-3 leading-relaxed"
										initial={{ opacity: 0 }}
										animate={inView ? { opacity: 1 } : {}}
										transition={{ delay: 0.8, duration: 0.5 }}
									>
										"They alone live, who live for others."
									</motion.p>
									<motion.p 
										className="text-sm sm:text-base md:text-lg text-gray-600 font-medium"
										initial={{ opacity: 0 }}
										animate={inView ? { opacity: 1 } : {}}
										transition={{ delay: 1, duration: 0.5 }}
									>
										— Swami Vivekananda
									</motion.p>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Text Content Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="max-w-5xl mx-auto"
				>
					<motion.div 
						className="bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-xl border border-gray-200/50"
						whileHover={{ boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)" }}
						transition={{ duration: 0.3 }}
					>
						{/* Main Paragraph */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 md:mb-10"
						>
							The <motion.span 
								className="font-bold text-gray-900"
								whileHover={{ color: "#f97316" }}
								transition={{ duration: 0.2 }}
							>
								Viraga Foundation
							</motion.span>{' '}
							welcomes volunteers of all ages who are willing to dedicate their time and skills to support students and teachers. There
							are many ways to render your service we require volunteers in the following departments:
						</motion.p>

						{/* Departments List */}
						<div className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12">
							{departments.map((dept, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -30 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
									whileHover={{ x: 10 }}
									className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
								>
									<motion.div 
										className="mt-1.5 sm:mt-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex-shrink-0"
										whileHover={{ scale: 2, rotate: 180 }}
										transition={{ type: "spring", stiffness: 300 }}
									/>
									<motion.p 
										className="text-base sm:text-lg md:text-xl text-gray-700 font-medium group-hover:text-orange-600 transition-colors duration-300"
										whileHover={{ x: 5 }}
									>
										{dept}
									</motion.p>
								</motion.div>
							))}
						</div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 1.6, duration: 0.6 }}
							whileHover={{ scale: 1.02 }}
							className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-8 border-l-4 border-orange-400 shadow-md"
						>
							<p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
								You can contact our <motion.span 
									className="font-bold text-gray-900"
									whileHover={{ color: "#f97316" }}
								>
									Viraga
								</motion.span> Office or
								directly send us an email to{' '}
								<motion.a
									href="mailto:viragafoundation@gmail.com"
									className="font-bold text-orange-600 hover:text-orange-700 underline decoration-2 underline-offset-4 hover:underline-offset-8 transition-all duration-300 break-all sm:break-normal"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									viragafoundation@gmail.com
								</motion.a>{' '}
								to offer your time and service.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Floating particles animation */}
			{[...Array(5)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-20"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -30, 0],
						x: [0, Math.random() * 20 - 10, 0],
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 3 + Math.random() * 2,
						repeat: Infinity,
						delay: Math.random() * 2,
					}}
				/>
			))}
		</section>
	);
}