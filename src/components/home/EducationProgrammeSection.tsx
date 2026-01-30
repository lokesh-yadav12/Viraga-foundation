import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pic1 from '../../assets/vibrant1.png';

const EducationProgrammeSection = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/vibrantfuture');
	};

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 sm:py-20 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
					{/* IMAGE SIDE */}
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true, margin: "-100px" }}
						className="relative cursor-pointer group order-2 lg:order-1"
						onClick={handleClick}
					>
						<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
						<img
							src={pic1}
							alt="Education programme"
							className="relative rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl w-full h-auto"
						/>
					</motion.div>

					{/* CONTENT SIDE */}
					<motion.div
						initial={{ opacity: 0, x: 80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
						viewport={{ once: true, margin: "-100px" }}
						className="order-1 lg:order-2"
					>
						<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
								className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600 mb-3 tracking-wide"
							>
								— TRANSFORMING LIVES
							</motion.h1>

							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight"
							>
								POINTS ON EDUCATION PROGRAMME
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
								className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg"
							>
								We are initiating project on the education based programme which enhancing educational
								opportunities and empower the students through equitable access to high-quality education,
								irrespective of their socio-economic backgrounds. We aspire to create a brighter future for
								these young minds by fostering a learning environment that nurtures their talents, inspires
								creativity, and instills a lifelong love of knowledge.
							</motion.p>

							<motion.button
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={handleClick}
								className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
							>
								Learn More
							</motion.button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default EducationProgrammeSection;