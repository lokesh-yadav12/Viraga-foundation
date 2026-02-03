import { motion, Variants } from 'framer-motion';
// import { useState } from 'react';
import bgpic from '../../assets/bgpic.jpg';

const VibrantFuturesPage = () => {
	//const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const fadeInUp: Variants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const scaleIn: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const cardHover: Variants = {
		rest: {
			scale: 1,
			y: 0,
		},
		hover: {
			scale: 1.05,
			y: -10,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="relative h-[70vh] md:h-[80vh] overflow-hidden"
			>
				<div className="absolute inset-0">
					<img src={bgpic} alt="Vibrant Futures Hero" className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
				</div>
				<div className="relative z-10 h-full flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-center"
					>
						<h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">
							VIBRANT FUTURES
						</h1>
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
						></motion.div>
					</motion.div>
				</div>
			</motion.section>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-10 py-16 md:py-24">
				{/* Introduction Card */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}
					className="mb-20"
				>
					<motion.div
						initial="rest"
						whileHover="hover"
						variants={cardHover}
						className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-orange-500 overflow-hidden relative"
					>
						<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
						<div className="relative z-10">
							<h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 flex items-center gap-4">
								<span className="w-2 h-12 bg-orange-500 rounded-full"></span>
								POINTS ON EDUCATION PROGRAMME
							</h2>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
								We are initiating a project on the education-based program, which enhances educational
								opportunities and empowers the students through equitable access to high-quality
								education, irrespective of their socio-economic backgrounds. We aspire to create a
								brighter future for these young minds by fostering a learning environment that nurtures
								their talents, inspires creativity, and instills a lifelong love of knowledge.
							</p>
						</div>
					</motion.div>
				</motion.div>

				{/* Project Name Card */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={scaleIn}
					className="mb-20"
				>
					<motion.div
						initial="rest"
						whileHover="hover"
						variants={cardHover}
						className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-sm:10 p-5 rounded-3xl shadow-2xl relative overflow-hidden"
					>
						<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
						<div className="relative z-10 text-center">
							<h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-3">Project Name</h3>
							<h2 className="text-xl md:text-3xl font-bold text-white tracking-wide">
								VIBRANT FUTURES—TRANSFORMING LIVES
							</h2>
						</div>
					</motion.div>
				</motion.div>

				{/* Program Objectives */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 flex items-center gap-4"
					>
						<span className="w-3 h-12 bg-orange-500 rounded-full"></span>
						Program Objectives
					</motion.h2>

					<div className="grid gap-6">
						{[
							{
								title: 'Identification',
								description:
									'Identify the children who are enthusiastic/unaware of the available opportunities that are offered by the state, central government, and other platforms.',
								icon: '🎯',
								gradient: 'from-blue-500 to-cyan-500',
							},
							{
								title: 'Enhance Academic Proficiency',
								description:
									'Our primary objective is to significantly improve the academic performance of children. We aim to raise their proficiency in core subjects, such as mathematics, science, and language arts, to meet or exceed grade-level standards',
								icon: '📚',
								gradient: 'from-orange-500 to-amber-500',
							},
							{
								title: 'Foster Holistic Development',
								description:
									'Beyond academics, we are committed to nurturing the holistic development of children. This includes promoting critical thinking, problem-solving skills, creativity, and emotional intelligence to prepare them for the challenges of the future.',
								icon: '🌱',
								gradient: 'from-green-500 to-emerald-500',
							},
							{
								title: 'Promote Lifelong Learning',
								description:
									'Beyond the immediate academic objectives, we aim to instill a passion for lifelong learning in children. Our objective is to foster a love for knowledge that extends beyond their time in the program and continues throughout their lives.',
								icon: '💡',
								gradient: 'from-purple-500 to-pink-500',
							},
							{
								title: 'Empower Future Leaders',
								description:
									'Ultimately, our goal is to empower children to become future leaders and change-makers in their communities and society. We aspire to equip them with the skills, knowledge, and confidence needed to make a positive impact on the world.',
								icon: '👑',
								gradient: 'from-red-500 to-rose-500',
							},
						].map((objective, index) => (
							<motion.div key={index} variants={fadeInUp} initial="rest" whileHover="hover">
								<motion.div
									variants={cardHover}
									className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
								>
									<div className="flex flex-col md:flex-row">
										<div
											className={`md:w-2 w-full h-2 md:h-auto bg-gradient-to-br ${objective.gradient}`}
										></div>
										<div className="flex-1 p-6 md:p-8">
											<div className="flex items-start gap-4">
												<motion.div
													whileHover={{ rotate: 360, scale: 1.2 }}
													transition={{ duration: 0.5 }}
													className="text-4xl flex-shrink-0"
												>
													{objective.icon}
												</motion.div>
												<div className="flex-1">
													<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
														{objective.title}
													</h4>
													<p className="text-gray-700 leading-relaxed">
														{objective.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Planning Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 flex items-center gap-4"
					>
						<span className="w-3 h-12 bg-orange-500 rounded-full"></span>
						Planning
					</motion.h2>

					<motion.div
						initial="rest"
						whileHover="hover"
						variants={cardHover}
						className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-orange-500"
					>
						<div className="space-y-6">
							{[
								'Visit local government school principals and teachers to explain about our project, and some points are as below:',
								"We will consider the best students from the Class V, VI, VII, and VIII standards, based on the class teacher's opinion. We also rechecked the same with the principals and other possible ways.",
								"We will interact with the parents of the selected children, duly explaining the details of our project; based on the parents' acceptance, we will process the application.",
								'For the selected students, we will provide mathematical reasoning & English books for preparation.',
								'With the selected children, we are going to make arrangements to write entrance exams for the following central government institutions for free education and boarding:',
							].map((point, index) => (
								<motion.div key={index} variants={fadeInUp} className="flex gap-4 items-start group">
									<motion.div
										whileHover={{ scale: 1.3 }}
										className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300"
									>
										{index + 1}
									</motion.div>
									<p className="text-gray-700 leading-relaxed flex-1 pt-1">{point}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Exam Prep Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 flex items-center gap-4"
					>
						<span className="w-3 h-12 bg-orange-500 rounded-full"></span>
						Exam Prep
					</motion.h2>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								step: '01',
								title: 'Study Materials',
								description:
									'After giving mathematical reasoning & English books, we will guide the children on how to prepare for the above-mentioned entrance exam.',
								icon: '📖',
								gradient: 'from-blue-500 to-purple-600',
							},
							{
								step: '02',
								title: 'Training Classes',
								description:
									'On feasibility, we will provide teaching classes by way of online/offline with the selected children to train them for the entrance exam.',
								icon: '🎓',
								gradient: 'from-orange-500 to-red-600',
							},
							{
								step: '03',
								title: 'Expert Faculty',
								description:
									'Pertaining to faculty, we have to hire math and English teachers to teach the above purpose.',
								icon: '👨‍🏫',
								gradient: 'from-green-500 to-teal-600',
							},
						].map((item, index) => (
							<motion.div key={index} variants={fadeInUp} initial="rest" whileHover="hover">
								<motion.div
									variants={cardHover}
									className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
								>
									<div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
									<div className="p-6 md:p-8">
										<div className="flex items-center gap-4 mb-4">
											<motion.div
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.5 }}
												className="text-5xl"
											>
												{item.icon}
											</motion.div>
											<div
												className={`text-6xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-20`}
											>
												{item.step}
											</div>
										</div>
										<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
											{item.title}
										</h3>
										<p className="text-gray-700 leading-relaxed">{item.description}</p>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Project Cost */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 flex items-center gap-4"
					>
						<span className="w-3 h-12 bg-orange-500 rounded-full"></span>
						Approximate Project Cost
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-8 mb-8">
						<motion.div variants={scaleIn} initial="rest" whileHover="hover">
							<motion.div
								variants={cardHover}
								className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 h-full"
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
										📚
									</div>
									<h3 className="text-2xl font-bold text-gray-900">Books Estimation</h3>
								</div>
								<p className="text-gray-700 leading-relaxed">
									There is a requirement for 4 types of books for the above schools' entrance exam.
									The cost of 4 books at Rs. 500/- each is Rs. 2,000/- per student, totalling Rs.
									2,000/- x 30 students ={' '}
									<span className="font-bold text-blue-600">Rs. 60,000/-</span>
								</p>
							</motion.div>
						</motion.div>

						<motion.div variants={scaleIn} initial="rest" whileHover="hover">
							<motion.div
								variants={cardHover}
								className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 h-full"
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
										👨‍🏫
									</div>
									<h3 className="text-2xl font-bold text-gray-900">Faculty Estimation</h3>
								</div>
								<ul className="space-y-4 text-gray-700">
									<li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
										<span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
										<span>
											Maths teacher for a single payment:{' '}
											<span className="font-bold text-orange-600">Rs. 45,000/-</span>
										</span>
									</li>
									<li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
										<span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
										<span>
											English teacher for a single payment of{' '}
											<span className="font-bold text-orange-600">Rs. 45,000/-</span>
										</span>
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</div>

					<motion.div variants={scaleIn} initial="rest" whileHover="hover">
						<motion.div
							variants={cardHover}
							className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-400 p-10 rounded-3xl shadow-2xl relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
							<div className="relative z-10 text-center">
								<div className="inline-block mb-4 p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
									<span className="text-4xl">💰</span>
								</div>
								<h3 className="text-xl md:text-3xl font-bold text-white mb-2">Total Estimated Cost</h3>
								<div className="text-3xl md:text-4xl font-bold text-white mt-4">Rs. 150,000/-</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Video Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}
					className="mb-12"
				>
					<motion.div
						initial="rest"
						whileHover="hover"
						variants={cardHover}
						className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4 md:p-6"
					>
						<div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
							{/* <iframe
								width="1170"
								height="658"
								src="https://www.youtube.com/embed/NWmYBLZMioc"
								title="Vibrant futures transforming lives programme"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe> */}
							<iframe
								// width="1170"
								// height="658"
								src="https://www.youtube.com/embed/NWmYBLZMioc"
								title="Vibrant futures transforming lives programmer"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className='sm:w-full sm:h-[600px]'
							/>
						</div>
						<motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 italic text-lg">
							Vibrant futures—transforming lives activities—28-7-25
						</motion.p>
					</motion.div>
				</motion.div>

				{/* Call to Action */}
				{/* <motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={scaleIn}
				>
					<motion.div
						initial="rest"
						whileHover="hover"
						variants={cardHover}
						className="relative overflow-hidden rounded-3xl shadow-2xl"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-pink-400 to-orange-300"></div>
						<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
						<div className="relative z-10 text-center py-10 px-6">
							<motion.div
								animate={{
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className="inline-block mb-6 text-4xl"
							>
								🌟
							</motion.div>
							<h2 className="text-xl md:text-3xl font-bold text-white mb-6">
								Join Us in Transforming Lives
							</h2>
							<p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
								Together, we can create vibrant futures for the next generation
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-orange-600 font-bold px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
							>
								Get Involved
								<motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
									→
								</motion.span>
							</motion.button>
						</div>
					</motion.div>
				</motion.div> */}
			</div>
		</div>
	);
};

export default VibrantFuturesPage;
