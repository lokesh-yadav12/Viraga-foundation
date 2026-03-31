import { motion } from 'framer-motion';
import bgpic from '../assets/do1.png';
const objectives = [
	{
		icon: '🌿',
		title: 'Food Donation (Narayana Seva)',
		subtitle: 'Nourishing Lives, One Meal at a Time',
		desc: 'No one should go hungry. Through Narayana Seva, we provide nutritious meals to the underprivileged, ensuring sustenance, vitality, and dignity for all.',
	},
	{
		icon: '📚',
		title: 'Scholarship Assistance & Guidance',
		subtitle: 'Empowering Dreams Through Education',
		desc: 'Education is the foundation of a brighter future. We offer scholarships, mentorship, and career guidance to deserving students, helping them break barriers and achieve their aspirations.',
	},
	{
		icon: '🏥',
		title: 'Health Awareness & Medical Support',
		subtitle: 'Spreading Knowledge for a Healthier Society',
		desc: 'Good health is a fundamental right. We raise awareness about healthcare, guide people to medical resources, and promote preventive and wellness programs.',
	},
	{
		icon: '🛠',
		title: 'Skill Development & Career Guidance',
		subtitle: 'Shaping Self-Reliant Individuals',
		desc: 'True empowerment comes from self-reliance. Our skill development programs equip individuals with practical knowledge and career guidance for economic independence.',
	},
	{
		icon: '📖',
		title: 'Promoting the Teachings of Great Leaders',
		subtitle: 'Inspiring Positive Change',
		desc: 'The wisdom of great leaders transforms lives. By spreading the teachings of Swami Vivekananda and other visionaries, we inspire values, purpose, and social responsibility.',
	},
	{
		icon: '🏡',
		title: 'Orphanage for Street Children',
		subtitle: 'A Safe Haven for Every Child',
		desc: 'Every child deserves love, security, and a bright future. We provide shelter, education, and holistic care to homeless and orphaned children.',
	},
	{
		icon: '🤝',
		title: 'Disaster Relief & Humanitarian Aid',
		subtitle: 'Extending Hope in Crisis',
		desc: 'In times of calamity, immediate support can save lives. We provide emergency relief, rehabilitation, and long-term recovery assistance to affected communities.',
	},
];

const Objectives = () => {
	return (
		<div className="bg-white">
			{/* ================= HERO SECTION ================= */}
			<section className="relative h-[70vh] sm:h-[90vh] overflow-hidden">
				<motion.img
					initial={{ scale: 1.2 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
					src={bgpic}
					alt="NGO service work"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0  flex items-center">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9 }}
						className="mx-auto max-w-6xl px-6 text-white underline"
					>
						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-3xl sm:text-6xl pr-3 font-bold mb-4"
						>
							Our Objectives
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-xl max-w-3xl leading-relaxed"
						>
							{/* Our Key Initiatives – Lighting the Path of Service */}
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* ================= INTRO ================= */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="text-lg leading-relaxed text-gray-700"
				>
					Just as <strong>Surya Bhagavan's seven horses</strong> drive away darkness and bring light,{' '}
					<strong>VIRAGA FOUNDATION</strong> is dedicated to uplifting society through seven transformative
					initiatives. Each initiative reflects our commitment to compassion, empowerment, and selfless
					service.
				</motion.p>
			</section>

			{/* ================= OBJECTIVES ================= */}
			<section className="bg-gray-50 py-4 sm:py-12">
				<div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
					{objectives.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
							className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition ${
								objectives.length % 2 !== 0 && index === objectives.length - 1
									? 'md:col-span-2 md:w-1/2 md:mx-auto'
									: ''
							}`}
						>
							<div className="flex flex-col items-start gap-4">

                <div className="flex items-center gap-4 flex-row">
								<motion.span
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.1 + 0.2,
										type: 'spring',
										stiffness: 200,
									}}
									whileHover={{
										scale: 1.2,
										rotate: 10,
										transition: { duration: 0.3 },
									}}
									className="text-4xl"
								>
									{item.icon}
								</motion.span>
                 
                <motion.h3
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1 + 0.3,
										}}
										className="text-xl font-semibold text-gray-900"
									>
										{item.title}
								</motion.h3>
                      </div>

                  

								<div>

									{/* <motion.h3
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1 + 0.3,
										}}
										className="text-xl font-semibold text-gray-900"
									>
										{item.title}
									</motion.h3> */}


									<motion.p
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1 + 0.4,
										}}
										className="text-sm font-medium text-blue-700 mb-2"
									>
										{item.subtitle}
									</motion.p>

									<motion.p
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: index * 0.1 + 0.5,
										}}
										className="text-gray-700 leading-relaxed"
									>
										{item.desc}
									</motion.p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* ================= PHILOSOPHY ================= */}
			<section className="max-w-6xl mx-auto px-6 py-20 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className="text-3xl font-bold mb-6"
				>
					Our Guiding Philosophy
				</motion.h2>

				<motion.blockquote
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						duration: 0.7,
						delay: 0.2,
						ease: 'easeOut',
					}}
					className="text-2xl font-semibold text-gray-900 italic mb-6"
				>
					"Service to humanity is service to God."
				</motion.blockquote>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						delay: 0.4,
						duration: 0.7,
						ease: 'easeOut',
					}}
					className="text-lg text-gray-700"
				>
					💙 Join us in our mission. Together, we can create a world filled with kindness, opportunity, and
					hope.
				</motion.p>
			</section>
		</div>
	);
};

export default Objectives;
