import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="relative overflow-hidden bg-white border-2 border-orange-200 rounded-3xl shadow-l"
				>
					{/* Subtle Grid Pattern */}
					<div className="absolute inset-0 opacity-5">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
								backgroundSize: '50px 50px',
							}}
						></div>
					</div>

					{/* Orange Glow Effects */}
					<div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

					{/* Subtle Floating Icons */}
					<motion.div
						animate={{
							y: [0, -10, 0],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className="absolute top-12 right-12 hidden lg:block"
					>
						<Mail className="w-16 h-16 text-orange-400" />
					</motion.div>

					<motion.div
						animate={{
							y: [0, 10, 0],
							opacity: [0.2, 0.4, 0.2],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 2,
						}}
						className="absolute bottom-12 left-12 hidden lg:block"
					>
						<Phone className="w-20 h-20 text-orange-300" />
					</motion.div>

					{/* Content */}
					<div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
							{/* Left Column - Text Content */}
							<div className="text-center lg:text-left">
								{/* Icon */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
									className="mb-6"
								>
									<div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50">
										<MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
									</div>
								</motion.div>

								{/* Heading */}
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
									className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
								>
									Let's{' '}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
										Connect
									</span>
								</motion.h2>

								{/* Description */}
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
									className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 font-light leading-relaxed"
								>
									Have questions? Want to volunteer? Looking to collaborate? We'd love to hear from
									you. Reach out and let's make a difference together.
								</motion.p>

								{/* CTA Button */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
									className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
								>
									<Link to="/contactpage">
										<motion.button
											whileHover={{ scale: 1.03, y: -2 }}
											whileTap={{ scale: 0.98 }}
											transition={{ duration: 0.2 }}
											className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black rounded-full font-semibold text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden"
										>
											<span className="relative z-10 flex items-center gap-2">
												Get in Touch
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
										We're here to help 📧
									</motion.div>
								</motion.div>
							</div>

							{/* Right Column - Quick Contact Info */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
								className="space-y-4 sm:space-y-6"
							>
								{/* Email */}
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.3 }}
									className="flex items-start gap-4 bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-4 sm:p-6 hover:bg-black/10 transition-colors duration-300"
								>
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
										<Mail className="w-6 h-6 text-black" />
									</div>
									<div>
										<h3 className="text-black font-semibold mb-1">Email Us</h3>
										<p className="text-gray-700 text-sm sm:text-base break-all">
											viragafoundation@gmail.com
										</p>
									</div>
								</motion.div>

								{/* Phone */}
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.3 }}
									className="flex items-start gap-4 bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-4 sm:p-6 hover:bg-black/10 transition-colors duration-300"
								>
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
										<Phone className="w-6 h-6 text-black" />
									</div>
									<div>
										<h3 className="text-black font-semibold mb-1">Call Us</h3>
										<p className="text-gray-700 text-sm sm:text-base">+91 9492940941</p>
									</div>
								</motion.div>

								{/* Location */}
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.3 }}
									className="flex items-start gap-4 bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-4 sm:p-6 hover:bg-black/10 transition-colors duration-300"
								>
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
										<MapPin className="w-6 h-6 text-black" />
									</div>
									<div>
										<h3 className="text-black font-semibold mb-1">Visit Us</h3>
										<p className="text-gray-700 text-sm sm:text-base">
											Ayodhya nagar, Vijayawada, 520003
										</p>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactCTA;
