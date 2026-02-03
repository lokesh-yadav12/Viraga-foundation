import { motion } from 'framer-motion';
import { Heart, ArrowRight, HandHeart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationCTA = () => {
	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative overflow-hidden bg-white border-2 border-orange-200 rounded-3xl shadow-2xl"
				>
					{/* Subtle Grid Pattern */}
					<div className="absolute inset-0 opacity-5">
						<div className="absolute inset-0" style={{
							backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
							backgroundSize: '50px 50px'
						}}></div>
					</div>

					{/* Orange Glow Effects */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

					{/* Subtle Floating Icons */}
					<motion.div
						animate={{ 
							y: [0, -10, 0],
							opacity: [0.3, 0.5, 0.3]
						}}
						transition={{ 
							duration: 6, 
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className="absolute top-12 right-12 hidden lg:block"
					>
						<Sparkles className="w-16 h-16 text-orange-400" />
					</motion.div>

					<motion.div
						animate={{ 
							y: [0, 10, 0],
							opacity: [0.2, 0.4, 0.2]
						}}
						transition={{ 
							duration: 7, 
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2
						}}
						className="absolute bottom-12 left-12 hidden lg:block"
					>
						<Heart className="w-20 h-20 text-orange-300" />
					</motion.div>

					{/* Content */}
					<div className="relative z-10 px-6 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-12 text-center">
						{/* Icon */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
							className="mb-6"
						>
							<div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50">
								<HandHeart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
							</div>
						</motion.div>

						{/* Heading */}
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
							className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
						>
							Make a{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
								Difference
							</span>
							{' '}Today
						</motion.h2>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
							className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed"
						>
							Your generosity feeds the hungry, educates children, and brings hope to those in need. 
							Every rupee creates ripples of positive change in our community.
						</motion.p>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<Link to="/donation">
								<motion.button
									whileHover={{ scale: 1.03, y: -2 }}
									whileTap={{ scale: 0.98 }}
									transition={{ duration: 0.2 }}
									className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden"
								>
									<span className="relative z-10 flex items-center gap-2">
										Donate Now
										<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
									</span>
									<motion.div 
										className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
										initial={{ x: '-100%' }}
										whileHover={{ x: 0 }}
										transition={{ duration: 0.3 }}
									></motion.div>
								</motion.button>
							</Link>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.6 }}
								className="text-gray-700 text-sm sm:text-base"
							>
								Every contribution counts 🧡
							</motion.div>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
							className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
						>
							<motion.div 
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300"
							>
								<div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">7+</div>
								<div className="text-gray-700 text-sm sm:text-base">Life-Changing Initiatives</div>
							</motion.div>
							<motion.div 
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300"
							>
								<div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">100%</div>
								<div className="text-gray-700 text-sm sm:text-base">Transparent Giving</div>
							</motion.div>
							<motion.div 
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300"
							>
								<div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">∞</div>
								<div className="text-gray-700 text-sm sm:text-base">Impact & Hope</div>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DonationCTA;