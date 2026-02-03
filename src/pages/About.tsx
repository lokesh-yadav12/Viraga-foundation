import { motion } from 'framer-motion';
import bgpic from '../assets/cele1.png';
const AboutUs = () => {
	return (
		<div className="bg-white">
			{/* ================= HERO SECTION ================= */}
			<section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
	<img
		src={bgpic}
		alt="NGO community service"
		className="h-full w-full object-cover"
	/>

	<div className="absolute inset-0 flex items-center justify-center">
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.9 }}
			className="max-w-5xl px-4 text-center text-white"
		>
			<h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
				About Us
			</h1>

			<p className="text-base  font-serif sm:text-lg md:text-3xl max-w-3xl mx-auto">
				Guided by Dharma,
				<br />
				Driven by Karma,
				<br />
				Serving with Selflessness
			</p>
		</motion.div>
	</div>
</section>

			{/* ================= CONTENT SECTION ================= */}
			<section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-8 sm:space-y-10">
				{/* Intro Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-blue-600"
				>
					<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
						Guided by Dharma, Driven by Karma, Serving with Selflessness
					</h2>

					<p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
						<strong className="text-blue-700">VIRAGA FOUNDATION</strong> was established on November 25,
						2020, by a group of dedicated individuals inspired by the timeless teachings of Swami
						Vivekananda. Our journey began with a shared vision to serve humanity with compassion,
						integrity, and purpose.
					</p>

					<p className="text-base sm:text-lg leading-relaxed text-gray-700">
						Our foundation was graciously inaugurated by Swami Hridananadji Maharaj, Secretary of
						Ramakrishna Mission, Vijayawada. Since our inception, we have remained committed to uplifting
						lives through selfless service and community empowerment.
					</p>
				</motion.div>

				{/* Quote Card */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
				>
					<div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
					<div className="flex items-start gap-3 sm:gap-4 mb-4">
						<span className="text-4xl sm:text-5xl md:text-6xl text-blue-600">"</span>
						<blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 italic">
							They alone live who live for others.
						</blockquote>
					</div>
					<p className="text-gray-700 text-base sm:text-lg pl-12 sm:pl-16">
						Inspired by these profound words, we dedicate ourselves to uplifting society through acts of
						kindness, education, and empowerment.
					</p>
				</motion.div>

				{/* Mission Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg mt-12 sm:mt-16"
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center">
							<span className="text-2xl sm:text-3xl">🎯</span>
						</div>
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
					</div>

					<p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
						Just as <strong className="text-orange-600">Surya Bhagavan's seven horses</strong> lead the
						world from darkness to light, our seven key initiatives are designed to bring hope, dignity, and
						transformation to those in need.
					</p>

					<p className="text-base sm:text-lg leading-relaxed text-gray-700">
						Through nourishment, education, healthcare, skill development, moral guidance, shelter, and
						disaster relief, we strive to create a brighter and more compassionate world.
					</p>
				</motion.div>

				{/* ================= NGO POINTS CARDS ================= */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.1 } },
					}}
					className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10"
				>
					{[
						{
							icon: '🍽️',
							text: 'Providing nutritious food and basic necessities to the underprivileged',
							color: 'from-red-500 to-orange-500',
						},
						{
							icon: '📚',
							text: 'Empowering students through education and scholarships',
							color: 'from-blue-500 to-cyan-500',
						},
						{
							icon: '🏥',
							text: 'Promoting health awareness and access to medical support',
							color: 'from-green-500 to-emerald-500',
						},
						{
							icon: '💼',
							text: 'Developing skills for self-reliance and sustainable livelihoods',
							color: 'from-purple-500 to-pink-500',
						},
						{
							icon: '📖',
							text: 'Spreading moral values and teachings of great leaders',
							color: 'from-yellow-500 to-amber-500',
						},
						{
							icon: '🆘',
							text: 'Supporting communities during disasters and emergencies',
							color: 'from-rose-500 to-red-500',
						},
						{
							icon: '🤝',
							text: 'Encouraging volunteerism and community participation',
							color: 'from-indigo-500 to-blue-500',
						},
						{
							icon: '✅',
							text: 'Ensuring transparency, accountability, and ethical service',
							color: 'from-teal-500 to-green-500',
						},
					].map((point, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5 }}
							className="group relative"
						>
							<div
								className={`absolute -inset-0.5 bg-gradient-to-r ${point.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
							></div>
							<div className="relative bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
								<div className="flex items-start gap-3 sm:gap-4">
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center shadow-sm">
										<span className="text-xl sm:text-2xl">{point.icon}</span>
									</div>
									<p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
										{point.text}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* ================= CLOSING CARDS ================= */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg mt-8 sm:mt-12 border-l-4 border-purple-600"
				>
					<p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
						With <strong className="text-purple-600">Dharma</strong> as our foundation and{' '}
						<strong className="text-purple-600">Karma</strong> as our driving force, we continue our journey
						of selfless service—ensuring that every action we take creates meaningful and lasting impact.
					</p>

					<div className="flex items-center gap-3 mt-6 p-4 bg-white rounded-xl shadow-sm">
						<span className="text-2xl sm:text-3xl">🌱</span>
						<p className="text-base sm:text-lg font-medium text-gray-900">
							Join us in making a difference. Together, we can light up lives.
						</p>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default AboutUs;
