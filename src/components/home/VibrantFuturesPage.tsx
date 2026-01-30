import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import bgpic from '../../assets/bgpic.jpg';

const VibrantFuturesPage = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 sm:px-6 to-white">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="relative h-[70vh] md:h-[80vh] overflow-hidden"
			>
				<div className="absolute inset-0">
					<img src={bgpic} alt="Vibrant Futures Hero" className="w-full h-full object-cover" />
					<div className="absolute inset-0 "></div>
				</div>
				<div className="relative z-10 h-full flex items-center justify-center">
					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-5xl md:text-7xl font-bold text-white text-center tracking-wider"
					>
						VIBRANT FUTURES
					</motion.h1>
				</div>
			</motion.section>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
				{/* Introduction */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}
					className="mb-20"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 border-b-4 border-orange-500 inline-block pb-2">
						POINTS ON EDUCATION PROGRAMME
					</h2>
					<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
						We are initiating a project on the education-based program, which enhances educational
						opportunities and empowers the students through equitable access to high-quality education,
						irrespective of their socio-economic backgrounds. We aspire to create a brighter future for
						these young minds by fostering a learning environment that nurtures their talents, inspires
						creativity, and instills a lifelong love of knowledge.
					</p>
				</motion.div>

				{/* Project Name */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}
					className="mb-20 bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg"
				>
					<div className="flex flex-wrap items-center gap-8">
						<h3 className="text-xl md:text-2xl font-bold text-orange-600">Project Name:</h3>
						<h3 className="text-xl md:text-2xl font-bold text-orange-700">
							VIBRANT FUTURES—TRANSFORMING LIVES
						</h3>
					</div>
				</motion.div>

				{/* Program Objectives */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20"
				>
					<motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-orange-600 mb-12">
						Program Objectives:
					</motion.h2>

					<div className="space-y-8">
						{[
							{
								title: 'Identification:',
								description:
									'Identify the children who are enthusiastic/unaware of the available opportunities that are offered by the state, central government, and other platforms.',
							},
							{
								title: 'Enhance Academic Proficiency:',
								description:
									'Our primary objective is to significantly improve the academic performance of children. We aim to raise their proficiency in core subjects, such as mathematics, science, and language arts, to meet or exceed grade-level standards',
							},
							{
								title: 'Foster Holistic Development:',
								description:
									'Beyond academics, we are committed to nurturing the holistic development of children. This includes promoting critical thinking, problem-solving skills, creativity, and emotional intelligence to prepare them for the challenges of the future.',
							},
							{
								title: 'Promote Lifelong Learning:',
								description:
									'Beyond the immediate academic objectives, we aim to instill a passion for lifelong learning in children. Our objective is to foster a love for knowledge that extends beyond their time in the program and continues throughout their lives.',
							},
							{
								title: 'Empower Future Leaders:',
								description:
									'Ultimately, our goal is to empower children to become future leaders and change-makers in their communities and society. We aspire to equip them with the skills, knowledge, and confidence needed to make a positive impact on the world.',
							},
						].map((objective, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="flex gap-4 group hover:translate-x-2 transition-transform duration-300"
							>
								<div className="flex-shrink-0 w-3 h-3 mt-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
								<div className="flex-1">
									<h4 className="text-xl font-bold text-gray-900 mb-2">{objective.title}</h4>
									<p className="text-gray-700 leading-relaxed">{objective.description}</p>
								</div>
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
					<motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-orange-600 mb-12">
						Planning:
					</motion.h2>

					<div className="space-y-6">
						{[
							'Visit local government school principals and teachers to explain about our project, and some points are as below:',
							"We will consider the best students from the Class V, VI, VII, and VIII standards, based on the class teacher's opinion. We also rechecked the same with the principals and other possible ways.",
							"We will interact with the parents of the selected children, duly explaining the details of our project; based on the parents' acceptance, we will process the application.",
							'For the selected students, we will provide mathematical reasoning & English books for preparation.',
							'With the selected children, we are going to make arrangements to write entrance exams for the following central government institutions for free education and boarding:',
						].map((point, index) => (
							<motion.div key={index} variants={fadeInUp} className="flex gap-4 items-start group">
								<div className="flex-shrink-0 w-2 h-2 mt-2.5 bg-gray-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></div>
								<p className="text-gray-700 leading-relaxed flex-1">{point}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Exam Prep Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className="mb-20 bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 p-8 md:p-12 rounded-3xl shadow-xl"
				>
					<motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-orange-600 mb-10">
						Exam Prep:
					</motion.h2>

					<div className="space-y-6">
						{[
							'After giving mathematical reasoning & English books, we will guide the children on how to prepare for the above-mentioned entrance exam.',
							'On feasibility, we will provide teaching classes by way of online/offline with the selected children to train them for the entrance exam.',
							'Pertaining to faculty, we have to hire math and English teachers to teach the above purpose.',
						].map((point, index) => (
							<motion.div key={index} variants={fadeInUp} className="flex gap-4 items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
									{index + 1}
								</div>
								<p className="text-gray-700 leading-relaxed flex-1 pt-1">{point}</p>
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
					<motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-orange-600 mb-12">
						Approximate project cost:
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-8">
						<motion.div
							variants={scaleIn}
							className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Books estimation:</h3>
							<p className="text-gray-700 mb-4">
								There is a requirement for 4 types of books for the above schools' entrance exam. The
								cost of 4 books at Rs. 500/- each is Rs. 2,000/- per student, totalling Rs. 2,000/- x 30
								students = Rs. 60,000/-.
							</p>
						</motion.div>

						<motion.div
							variants={scaleIn}
							className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300"
						>
							<h3 className="text-2xl font-bold text-orange-600 mb-4">Faculty estimation:</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
									Maths teacher for a single payment: Rs. 45,000/-
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
									English teacher for a single payment of Rs. 45,000/-
								</li>
							</ul>
						</motion.div>
					</div>

					<motion.div
						variants={scaleIn}
						className="mt-8 bg-gradient-to-r from-orange-500 to-purple-600 p-8 rounded-2xl shadow-2xl"
					>
						<h3 className="text-3xl font-bold text-white text-center">
							Total estimated cost of the project—Rs. 150,000/-
						</h3>
					</motion.div>
				</motion.div>

				{/* Video Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}
					className="mb-20"
				>
					{/* <motion.h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 text-center">
						Vibrant Futures—Transforming Lives Activities
					</motion.h2> */}

					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
						className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl "
					>
						<iframe
							width="800"
							height="400"
							src="https://www.youtube.com/embed/OXNX5cS9EaU"
							title="viraga"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>

						{/* {!isVideoPlaying && (
							<div className="absolute inset-0 flex items-center justify-center ">
								<div className="text-center text-white">
									<svg
										className="w-24 h-24 mx-auto mb-4 animate-pulse"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
									</svg>
									<p className="text-xl font-semibold">Loading Video...</p>
								</div>
							</div>
						)} */}
					</motion.div>

					<motion.p variants={fadeInUp} className="text-center text-gray-600 mt-6 italic">
						Vibrant futures—transforming lives activities—28-7-25
					</motion.p>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={scaleIn}
					className="text-center py-16 bg-gradient-to-r from-orange-600 via-pink-500 to-orange-500 rounded-3xl shadow-2xl"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Transforming Lives</h2>
					<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
						Together, we can create vibrant futures for the next generation
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-white text-orange-600 font-bold px-12 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
					>
						Get Involved
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
};

export default VibrantFuturesPage;
