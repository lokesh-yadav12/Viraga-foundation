import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import g1 from '../../assets/Gallery1.png';
import g2 from '../../assets/Gallery2.png';
import g3 from '../../assets/Gallery3.png';
import g4 from '../../assets/Gallery4.png';
import g5 from '../../assets/Gallery5.png';
import g6 from '../../assets/Gallery6.png';

// Sample event data - replace with your actual images and details
const events = [
	{
		id: 1,
		image: g5,
		title: 'UGADI Celebration',
		location: 'Mathruchaya Organization',
		date: 'March 22, 2023',
		description: 'Distributed meals to 200+ children in need',
	},
	{
		id: 2,
		image: g6,
		title: 'Food Donation at Ferry Orphanage',
		location: 'Ferry, Ibrahimpatnam',
		date: 'May 2, 2023',
		description: 'Provided school supplies to underprivileged children',
	},
	{
		id: 3,
		image: g3,
		title: 'Food Donation at Nirmala Sishu Bhavan',
		location: 'Tanmayi Old Age Home, Vijayawada.',
		date: ' February 25, 2021',
		description: ' Nutritious breakfast and lunch were provided, offering care and support.',
	},
	{
		id: 4,
		image: g4,
		title: 'Foundation Inception Day',
		location: 'Ayodhya nagar, Vijayawada',
		date: 'November 25, 2020',
		description: 'inaugurated by Swami Hridananadji Maharaj',
	},
	{
		id: 5,
		image: g1,
		title: 'Food Distribution at Nirmala Sishu Bhavan',
		location: 'Nirmala Sishu Bhavan',
		date: 'February 7, 2021',
		description: ' distributed food to 50 physically and mentally challenged children under 10 years ',
	},
	{
		id: 6,
		image: g2,
		title: 'Food Donation at Tanmayi Old Age Home',
		location: ' Vijayawada',
		date: 'February 25, 2021',
		description: 'Nutritious breakfast and lunch were provided',
	},
];

const ImageGallery = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [direction, setDirection] = useState(0);
	const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

	// Auto-scroll functionality
	useEffect(() => {
		if (isAutoPlaying) {
			autoPlayRef.current = setInterval(() => {
				setDirection(1);
				setCurrentIndex((prev) => (prev + 1) % events.length);
			}, 4000); // Change slide every 4 seconds
		}

		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [isAutoPlaying]);

	const goToSlide = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	const goToPrevious = () => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
	};

	const goToNext = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % events.length);
	};

	const toggleAutoPlay = () => {
		setIsAutoPlaying(!isAutoPlaying);
	};

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.8,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.8,
		}),
	};

	return (
		<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-orange-50 to-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="text-center mb-12 sm:mb-16"
				>
					<motion.h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						Our{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
							Impact Stories
						</span>
					</motion.h2>
					<motion.p
						className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Every moment captured is a step towards positive change
					</motion.p>

					{/* Decorative line */}
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: '100%' }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.4 }}
						className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent max-w-md mx-auto mt-6"
					/>
				</motion.div>

				{/* Main Gallery Container */}
				<div className="relative">
					{/* Main Image Display */}
					<div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
						{/* Image Slider */}
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: 'spring', stiffness: 300, damping: 30 },
								opacity: { duration: 0.5 },
								scale: { duration: 0.5 },
							}}
							className="absolute inset-0"
						>
							<img
								src={events[currentIndex].image}
								alt={events[currentIndex].title}
								className="w-full h-full object-cover"
							/>

							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
						</motion.div>

						{/* Event Information Overlay */}
						<motion.div
							key={`info-${currentIndex}`}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className="absolute bottom-0 left-0 right-0 p-3 pl-4 sm:p-8 lg:p-10 text-white z-10"
						>
							<motion.h3
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
								className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 pl-3 sm:pl-0 sm:mb-4"
							>
								{events[currentIndex].title}
							</motion.h3>

							<motion.p
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="text-base sm:text-lg text-gray-200 mb-1"
							>
								{events[currentIndex].description}
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.5 }}
								className="flex flex-wrap gap-1 sm:gap-4"
							>
								<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
									<MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
									<span className="text-sm sm:text-base">{events[currentIndex].location}</span>
								</div>
								<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
									<Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
									<span className="text-sm sm:text-base">{events[currentIndex].date}</span>
								</div>
							</motion.div>
						</motion.div>

						{/* Navigation Arrows */}
						<button
							onClick={goToPrevious}
							className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 sm:backdrop-blur-md hover:bg-white/30 text-white p-1 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-6 h-6 sm:w-6 sm:h-6" />
						</button>

						<button
							onClick={goToNext}
							className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 sm:backdrop-blur-md hover:bg-white/30 text-white p-1 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
							aria-label="Next slide"
						>
							<ChevronRight className="w-6 h-6 sm:w-6 sm:h-6" />
						</button>

						{/* Auto-play Toggle */}
						<button
							onClick={toggleAutoPlay}
							className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
							aria-label={isAutoPlaying ? 'Pause autoplay' : 'Play autoplay'}
						>
							{isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
						</button>

						{/* Progress Bar */}
						<div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
							<motion.div
								key={`progress-${currentIndex}`}
								className="h-full bg-orange-500"
								initial={{ width: '0%' }}
								animate={{ width: isAutoPlaying ? '100%' : '0%' }}
								transition={{ duration: 4, ease: 'linear' }}
							/>
						</div>
					</div>

					{/* Thumbnail Navigation */}
					<div className="mt-6 sm:mt-8">
						<div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
							{events.map((event, index) => (
								<motion.button
									key={event.id}
									onClick={() => goToSlide(index)}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.5 }}
									whileHover={{ scale: 1.05, y: -5 }}
									className={`relative h-20 sm:h-24 lg:h-28 rounded-xl overflow-hidden transition-all duration-300 ${
										currentIndex === index
											? 'ring-4 ring-orange-500 shadow-xl'
											: 'ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100'
									}`}
								>
									<img src={event.image} alt={event.title} className="w-full h-full object-cover" />
									<div
										className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
											currentIndex === index ? 'opacity-50' : 'opacity-80'
										}`}
									/>

									{/* Active indicator */}
									{currentIndex === index && (
										<motion.div
											layoutId="activeIndicator"
											className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
											transition={{ type: 'spring', stiffness: 300, damping: 30 }}
										/>
									)}

									{/* Thumbnail number */}
									<div className="absolute top-1 right-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
										{index + 1}
									</div>
								</motion.button>
							))}
						</div>
					</div>

					{/* Event Counter */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center mt-6 text-gray-600 text-sm sm:text-base"
					>
						<span className="font-semibold text-orange-600">{currentIndex + 1}</span> / {events.length}
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.7 }}
					className="text-center mt-12 sm:mt-16"
				>
					<p className="text-lg sm:text-xl text-gray-700 mb-6">
						Want to be part of these meaningful moments?
					</p>
					<Link to="/contactpage">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							Join Our Mission
						</motion.button>
					</Link>
				</motion.div>
			</div>

			{/* Floating decorative elements */}
			<motion.div
				className="absolute top-20 right-10 w-20 h-20 bg-orange-200/30 rounded-full blur-2xl"
				animate={{
					y: [0, -20, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"
				animate={{
					y: [0, 20, 0],
					scale: [1, 1.3, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
		</section>
	);
};

export default ImageGallery;
