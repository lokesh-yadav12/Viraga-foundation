import { useState, useEffect } from 'react';
import { HandHeart, Copy, Check, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import bgpic from '../assets/bgpic.jpg'
import upi from '../assets/upi.png';
const DonationsPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [copiedField, setCopiedField] = useState('');

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const copyToClipboard = (text: string, field: string): void => {

		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(''), 2000);
	};

	const initiatives = [
		{ icon: '🍲', text: 'Food Donation (Narayana Seva) – Because no one should sleep hungry' },
		{ icon: '📚', text: 'Scholarship Assistance – Helping young minds reach for the stars' },
		{ icon: '🏥', text: 'Health Services Information – Guiding people toward a healthier future' },
		{ icon: '🛠️', text: 'Skill Development & Career Guidance – Empowering individuals to stand on their feet' },
		{ icon: '📖', text: 'Promoting Teachings of Great Leaders—Spreading wisdom for a better world' },
		{ icon: '🧒', text: 'Orphanage for Street Children – Giving love, care, and a home to the abandoned' },
		{ icon: '🤝', text: 'Disaster Relief & Support – Extending a helping hand in times of crisis' },
	];

	const accountDetails = [
		{ label: 'Account Number', value: '22201101000036 (CD General)' },
		{ label: 'Customer ID/Name', value: '901449184/ Viraga Foundation' },
		{ label: 'IFSC', value: 'UBIN0822205' },
		{ label: 'MICR Code', value: '520026021' },
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 md:px-6 via-pink-50 to-orange-50">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="relative h-[70vh] sm:h-[80vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
				style={{
					backgroundImage:
						'url("' + bgpic + '")',
				}}
			>
				<div className="absolute inset-0 "></div>
				<div className="absolute inset-0 "></div>
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="relative text-center px-4"
				>
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider mb-4">
						DONATIONS
					</h1>
					<p className="text-white text-lg sm:text-xl md:text-2xl font-light">
						Every contribution creates ripples of hope
					</p>
				</motion.div>
			</motion.div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				{/* Tagline */}
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-8 sm:mb-12 lg:mb-16"
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
						<Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light italic px-4">
						Give from the Heart—Change a Life Today
					</h2>
				</motion.div>

				{/* Introduction */}
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="mb-12 sm:mb-16 lg:mb-20"
				>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-purple-100">
						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
							At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">VIRAGA FOUNDATION</span>, we believe in the
							power of selfless service. Inspired by Swami Vivekananda's teachings, we are on a mission to
							spread kindness, uplift lives, and bring hope to those in need.
						</p>
						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
							Every day, a hungry soul waits for a meal, a child dreams of education, and a homeless heart
							longs for shelter. With your generosity, we can turn their dreams into reality.
						</p>
					</div>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
					{/* Left Column - Initiatives */}
					<motion.div
						initial={{ x: -60, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Donate Illustration */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
							className="mb-8 flex justify-center"
						>
							<div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
								<div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
								<div className="text-center relative z-10">
									<HandHeart className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-purple-600 mx-auto mb-3 sm:mb-4 animate-pulse" />
									<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
										DONATE
									</h3>
								</div>
							</div>
						</motion.div>

						<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center lg:text-left">
							Your Gift Can Make a Difference!
						</h3>
						<p className="text-base sm:text-lg text-gray-700 mb-6 text-center lg:text-left">
							Your donation will support our seven life-changing initiatives:
						</p>

						<div className="space-y-3 sm:space-y-4">
							{initiatives.map((initiative, index) => (
								<motion.div
									key={index}
									initial={{ x: -40, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
									whileHover={{ x: 5, transition: { duration: 0.3 } }}
									className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-50"
								>
									<span className="text-2xl sm:text-3xl flex-shrink-0">{initiative.icon}</span>
									<p className="text-sm sm:text-base text-gray-700 leading-relaxed">{initiative.text}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right Column - Account Details */}
					<motion.div
						initial={{ x: 60, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					>
						<div className="lg:sticky lg:top-8 space-y-6 sm:space-y-8">
							{/* Account Details Card */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
							>
								<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
									Account Details for Donation
								</h3>

								{accountDetails.map((detail, index) => (
									<motion.div
										key={index}
										initial={{ y: 20, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
										className="mb-4 group"
									>
										<p className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">{detail.label}:</p>
										<div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 rounded-lg group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
											<p className="font-semibold text-gray-800 text-sm sm:text-base break-all pr-2">{detail.value}</p>
											<button
												onClick={() => copyToClipboard(detail.value, detail.label)}
												className="text-gray-400 hover:text-purple-600 transition-colors duration-300 flex-shrink-0"
												aria-label={`Copy ${detail.label}`}
											>
												{copiedField === detail.label ? (
													<Check className="w-5 h-5 text-green-500" />
												) : (
													<Copy className="w-5 h-5" />
												)}
											</button>
										</div>
									</motion.div>
								))}
							</motion.div>

							{/* Bank and QR Code Section */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
								className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl border-2 border-purple-100"
							>
								<img src={upi} alt="UPI QR Code" className="w-full h-full object-contain mb-4" />
								{/* Bank Header */}
								{/* <div className="mb-6">
									<div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 sm:p-6 mb-4">
										<div className="flex items-center justify-center gap-3 mb-3">
											<div className="bg-white rounded-lg p-2">
												<p className="text-red-600 font-bold text-sm sm:text-base">Union Bank</p>
											</div>
										</div>
										<p className="text-white text-center text-xs sm:text-sm">A Government of India Undertaking</p>
									</div>
									<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
										<div className="bg-yellow-400 text-black font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
											BHIM Andhra
										</div>
										<div className="bg-green-700 text-white font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
											Swachh Bharat
										</div>
									</div>
								</div> */}

								{/* Foundation Name */}
								{/* <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-2">
									VIRAGA FOUNDATION
								</h3>
								<p className="text-center text-xs sm:text-sm text-gray-700 mb-6 break-all px-2">
									QR19492940941-0036@unionbankofindia
								</p> */}

								{/* QR Code */}
								{/* <motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
									className="flex justify-center mb-8"
								>
									<div className="bg-white p-3 sm:p-4 border-2 border-gray-300 rounded-xl shadow-lg">
										<img
											src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=QR19492940941-0036@unionbankofindia%26pn=VIRAGA%20FOUNDATION"
											alt="UPI QR Code"
											className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 max-w-full"
											loading="lazy"
										/>
									</div>
								</motion.div> */}

								{/* Payment Options */}
								{/* <div className="border-t border-gray-200 pt-6">
									<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
										<div className="text-center">
											<div className="mb-2">
												<svg className="w-20 h-10 sm:w-24 sm:h-12 mx-auto" viewBox="0 0 200 80" fill="none">
													<rect width="200" height="80" rx="8" fill="#6B2C91" />
													<text
														x="50%"
														y="50%"
														fill="white"
														fontSize="28"
														fontWeight="bold"
														textAnchor="middle"
														dy=".3em"
													>
														BHIM
													</text>
												</svg>
											</div>
											<p className="text-xs text-gray-600 max-w-[140px] sm:max-w-[120px] mx-auto">BHARAT INTERFACE FOR MONEY</p>
										</div>
										<div className="text-center">
											<div className="mb-2">
												<svg className="w-20 h-10 sm:w-24 sm:h-12 mx-auto" viewBox="0 0 200 80" fill="none">
													<rect width="200" height="80" rx="8" fill="#097939" />
													<text
														x="50%"
														y="50%"
														fill="white"
														fontSize="28"
														fontWeight="bold"
														textAnchor="middle"
														dy=".3em"
													>
														UPI
													</text>
												</svg>
											</div>
											<p className="text-xs text-gray-600 max-w-[140px] sm:max-w-[120px] mx-auto">UNIFIED PAYMENTS INTERFACE</p>
										</div>
									</div>
								</div> */}
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-12"
				>
					<div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-purple-200">
						<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
							Your Kindness Can Change Lives
						</h3>
						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
							A single act of generosity can bring a smile, a warm meal, and a new beginning. Open your heart
							and donate today—because a small act of love can create a lifetime of change.
						</p>

						<div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-lg max-w-3xl mx-auto">
							<p className="text-sm sm:text-base text-gray-800 text-left">
								Please donate either through the Bank account which was mentioned above or through the QR
								code given aside and send a screenshot or receipt to the{' '}
								<a href="https://wa.me/919492940941" className="font-bold text-red-600 hover:text-red-700 underline break-all">
									Whatsapp no. 9492940941
								</a>{' '}
								for generation of donation receipt
							</p>
						</div>

						<p className="text-lg sm:text-xl lg:text-2xl text-gray-800 italic font-medium px-4">
							🙏 Be the reason someone believes in goodness. Give with love. Give with heart.
						</p>
					</div>
				</motion.div>
			</div>

			{/* Floating Hearts Animation */}
			<div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden z-10">
				<motion.div
					animate={{ y: [-100, 0] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					className="absolute bottom-0 left-1/4"
				>
					{/* <Heart className="w-6 h-6 text-pink-400 opacity-50" /> */}
				</motion.div>
				<motion.div
					animate={{ y: [-100, 0] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					className="absolute bottom-0 right-1/4"
				>
					{/* <Heart className="w-8 h-8 text-purple-400 opacity-50" /> */}
				</motion.div>
			</div>
		</div>
	);
};

export default DonationsPage;






// import { useState, useEffect } from 'react';
// import { HandHeart, Copy, Check, Heart, Sparkles } from 'lucide-react';

// const DonationsPage = () => {
// 	const [isVisible, setIsVisible] = useState(false);
// 	const [copiedField, setCopiedField] = useState('');

// 	useEffect(() => {
// 		setIsVisible(true);
// 	}, []);

// 	const copyToClipboard = (text, field) => {
// 		navigator.clipboard.writeText(text);
// 		setCopiedField(field);
// 		setTimeout(() => setCopiedField(''), 2000);
// 	};

// 	const initiatives = [
// 		{ icon: '🍲', text: 'Food Donation (Narayana Seva) – Because no one should sleep hungry' },
// 		{ icon: '📚', text: 'Scholarship Assistance – Helping young minds reach for the stars' },
// 		{ icon: '🏥', text: 'Health Services Information – Guiding people toward a healthier future' },
// 		{ icon: '🛠️', text: 'Skill Development & Career Guidance – Empowering individuals to stand on their feet' },
// 		{ icon: '📖', text: 'Promoting Teachings of Great Leaders—Spreading wisdom for a better world' },
// 		{ icon: '🧒', text: 'Orphanage for Street Children – Giving love, care, and a home to the abandoned' },
// 		{ icon: '🤝', text: 'Disaster Relief & Support – Extending a helping hand in times of crisis' },
// 	];

// 	const accountDetails = [
// 		{ label: 'Account Number', value: '22201101000036 (CD General)' },
// 		{ label: 'Customer ID/Name', value: '901449184/ Viraga Foundation' },
// 		{ label: 'IFSC', value: 'UBIN0822205' },
// 		{ label: 'MICR Code', value: '520026021' },
// 	];

// 	return (
// 		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
// 			{/* Hero Section */}
// 			<div
// 				className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
// 				style={{
// 					backgroundImage:
// 						'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop")',
// 				}}
// 			>
// 				<div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50"></div>
// 				<div className="absolute inset-0 backdrop-blur-sm"></div>
// 				<div
// 					className={`relative text-center px-4 transition-all duration-1000 transform ${
// 						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// 					}`}
// 				>
// 					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider mb-4">
// 						DONATIONS
// 					</h1>
// 					<p className="text-white text-lg sm:text-xl md:text-2xl font-light">
// 						Every contribution creates ripples of hope
// 					</p>
// 				</div>
// 			</div>

// 			{/* Main Content */}
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
// 				{/* Tagline */}
// 				<div
// 					className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 transform ${
// 						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// 					}`}
// 				>
// 					<div className="flex items-center justify-center gap-2 mb-4">
// 						<Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
// 						<Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
// 					</div>
// 					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light italic px-4">
// 						Give from the Heart—Change a Life Today
// 					</h2>
// 				</div>

// 				{/* Introduction */}
// 				<div
// 					className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 transform ${
// 						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// 					}`}
// 				>
// 					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-purple-100">
// 						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
// 							At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">VIRAGA FOUNDATION</span>, we believe in the
// 							power of selfless service. Inspired by Swami Vivekananda's teachings, we are on a mission to
// 							spread kindness, uplift lives, and bring hope to those in need.
// 						</p>
// 						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
// 							Every day, a hungry soul waits for a meal, a child dreams of education, and a homeless heart
// 							longs for shelter. With your generosity, we can turn their dreams into reality.
// 						</p>
// 					</div>
// 				</div>

// 				{/* Two Column Layout */}
// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
// 					{/* Left Column - Initiatives */}
// 					<div
// 						className={`transition-all duration-1000 delay-400 transform ${
// 							isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
// 						}`}
// 					>
// 						{/* Donate Illustration */}
// 						<div className="mb-8 flex justify-center">
// 							<div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
// 								<div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
// 								<div className="text-center relative z-10">
// 									<HandHeart className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-purple-600 mx-auto mb-3 sm:mb-4 animate-pulse" />
// 									<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// 										DONATE
// 									</h3>
// 								</div>
// 							</div>
// 						</div>

// 						<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center lg:text-left">
// 							Your Gift Can Make a Difference!
// 						</h3>
// 						<p className="text-base sm:text-lg text-gray-700 mb-6 text-center lg:text-left">
// 							Your donation will support our seven life-changing initiatives:
// 						</p>

// 						<div className="space-y-3 sm:space-y-4">
// 							{initiatives.map((initiative, index) => (
// 								<div
// 									key={index}
// 									className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-50"
// 									style={{ animationDelay: `${index * 100}ms` }}
// 								>
// 									<span className="text-2xl sm:text-3xl flex-shrink-0">{initiative.icon}</span>
// 									<p className="text-sm sm:text-base text-gray-700 leading-relaxed">{initiative.text}</p>
// 								</div>
// 							))}
// 						</div>
// 					</div>

// 					{/* Right Column - Account Details */}
// 					<div
// 						className={`transition-all duration-1000 delay-500 transform ${
// 							isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
// 						}`}
// 					>
// 						<div className="lg:sticky lg:top-8 space-y-6 sm:space-y-8">
// 							{/* Account Details Card */}
// 							<div className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
// 								<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
// 									Account Details for Donation
// 								</h3>

// 								{accountDetails.map((detail, index) => (
// 									<div key={index} className="mb-4 group">
// 										<p className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">{detail.label}:</p>
// 										<div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 rounded-lg group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
// 											<p className="font-semibold text-gray-800 text-sm sm:text-base break-all pr-2">{detail.value}</p>
// 											<button
// 												onClick={() => copyToClipboard(detail.value, detail.label)}
// 												className="text-gray-400 hover:text-purple-600 transition-colors duration-300 flex-shrink-0"
// 												aria-label={`Copy ${detail.label}`}
// 											>
// 												{copiedField === detail.label ? (
// 													<Check className="w-5 h-5 text-green-500" />
// 												) : (
// 													<Copy className="w-5 h-5" />
// 												)}
// 											</button>
// 										</div>
// 									</div>
// 								))}
// 							</div>

// 							{/* Bank and QR Code Section */}
// 							<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-100">
// 								{/* Bank Header */}
// 								<div className="mb-6">
// 									<div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 sm:p-6 mb-4">
// 										<div className="flex items-center justify-center gap-3 mb-3">
// 											<div className="bg-white rounded-lg p-2">
// 												<p className="text-red-600 font-bold text-sm sm:text-base">Union Bank</p>
// 											</div>
// 										</div>
// 										<p className="text-white text-center text-xs sm:text-sm">A Government of India Undertaking</p>
// 									</div>
// 									<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
// 										<div className="bg-yellow-400 text-black font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
// 											BHIM Andhra
// 										</div>
// 										<div className="bg-green-700 text-white font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
// 											Swachh Bharat
// 										</div>
// 									</div>
// 								</div>

// 								{/* Foundation Name */}
// 								<h3 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-2">
// 									VIRAGA FOUNDATION
// 								</h3>
// 								<p className="text-center text-xs sm:text-sm text-gray-700 mb-6 break-all px-2">
// 									QR19492940941-0036@unionbankofindia
// 								</p>

// 								{/* QR Code */}
// 								<div className="flex justify-center mb-8">
// 									<div className="bg-white p-3 sm:p-4 border-2 border-gray-300 rounded-xl shadow-lg">
// 										<img
// 											src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=QR19492940941-0036@unionbankofindia%26pn=VIRAGA%20FOUNDATION"
// 											alt="UPI QR Code"
// 											className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
// 										/>
// 									</div>
// 								</div>

// 								{/* Payment Options */}
// 								<div className="border-t border-gray-200 pt-6">
// 									<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
// 										<div className="text-center">
// 											<div className="mb-2">
// 												<svg className="w-20 h-10 sm:w-24 sm:h-12 mx-auto" viewBox="0 0 200 80" fill="none">
// 													<rect width="200" height="80" rx="8" fill="#6B2C91" />
// 													<text
// 														x="50%"
// 														y="50%"
// 														fill="white"
// 														fontSize="28"
// 														fontWeight="bold"
// 														textAnchor="middle"
// 														dy=".3em"
// 													>
// 														BHIM
// 													</text>
// 												</svg>
// 											</div>
// 											<p className="text-xs text-gray-600 max-w-[120px]">BHARAT INTERFACE FOR MONEY</p>
// 										</div>
// 										<div className="text-center">
// 											<div className="mb-2">
// 												<svg className="w-20 h-10 sm:w-24 sm:h-12 mx-auto" viewBox="0 0 200 80" fill="none">
// 													<rect width="200" height="80" rx="8" fill="#097939" />
// 													<text
// 														x="50%"
// 														y="50%"
// 														fill="white"
// 														fontSize="28"
// 														fontWeight="bold"
// 														textAnchor="middle"
// 														dy=".3em"
// 													>
// 														UPI
// 													</text>
// 												</svg>
// 											</div>
// 											<p className="text-xs text-gray-600 max-w-[120px]">UNIFIED PAYMENTS INTERFACE</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Call to Action */}
// 				<div
// 					className={`text-center mb-12 transition-all duration-1000 delay-600 transform ${
// 						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// 					}`}
// 				>
// 					<div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-purple-200">
// 						<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
// 							Your Kindness Can Change Lives
// 						</h3>
// 						<p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
// 							A single act of generosity can bring a smile, a warm meal, and a new beginning. Open your heart
// 							and donate today—because a small act of love can create a lifetime of change.
// 						</p>

// 						<div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-lg max-w-3xl mx-auto">
// 							<p className="text-sm sm:text-base text-gray-800 text-left">
// 								Please donate either through the Bank account which was mentioned above or through the QR
// 								code given aside and send a screenshot or receipt to the{' '}
// 								<a href="https://wa.me/919492940941" className="font-bold text-red-600 hover:text-red-700 underline">
// 									Whatsapp no. 9492940941
// 								</a>{' '}
// 								for generation of donation receipt
// 							</p>
// 						</div>

// 						<p className="text-lg sm:text-xl lg:text-2xl text-gray-800 italic font-medium">
// 							🙏 Be the reason someone believes in goodness. Give with love. Give with heart.
// 						</p>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Floating Hearts Animation */}
// 			<div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden">
// 				<div className="absolute bottom-0 left-1/4 animate-bounce">
// 					<Heart className="w-6 h-6 text-pink-400 opacity-50" />
// 				</div>
// 				<div className="absolute bottom-0 right-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
// 					<Heart className="w-8 h-8 text-purple-400 opacity-50" />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DonationsPage;