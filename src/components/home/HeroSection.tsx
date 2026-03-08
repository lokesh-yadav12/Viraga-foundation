import React, { useState, useEffect } from 'react';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/home1.jpeg'
import img2 from '../../assets/home2.jpeg'
//import img3 from '../../assets/home2.jpeg';
import img4 from '../../assets/home4.jpeg'
//import img5 from '../../assets/home5.jpeg'
import img6 from '../../assets/home6.jpeg'
import img7 from '../../assets/home11.jpg'
import img8 from '../../assets/home8.jpeg'
import img9 from '../../assets/home9.jpeg'
import img10 from '../../assets/home10.jpg'
interface Slide {
	id: number;
	image: string;
	heading: string;
	content: string;
}

const HeroSection: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isZooming, setIsZooming] = useState(false);

	const slides: Slide[] = [
		{
        id: 9,
        image: img9,
        heading: 'Child Leadership Programs',
        content: 'Nurturing the next generation of changemakers through mentorship and training',
    },
    {
        id: 1,
        image: img1,
        heading: 'Empowering Communities Together',
        content: 'Join us in making a difference through compassion and dedication to serve humanity',
    },
	 {
        id: 7,
        image: img7,
        heading: 'Dedicated Team of Volunteers',
        content: 'Ensuring every contribution is maximized to create lasting impact in the communities we serve',
    },
	
    {
        id: 2,
        image: img2,
        heading: 'Building a Better Tomorrow',
        content: 'Creating sustainable solutions for communities in need across the nation',
    },
    {
        id: 3,
        image: img4,
        heading: 'Education for All',
        content: 'Providing quality education and resources to underprivileged children',
    },
   
    {
        id: 5,
        image: img6,
        heading: 'Women Empowerment',
        content: 'Supporting women through skill development and entrepreneurship programs',
    },
    {
        id: 6,
        image: img9,
        heading: 'Environmental Conservation',
        content: 'Protecting our planet through sustainable practices and awareness campaigns',
    },
   
    {
        id: 8,
        image: img8,
        heading: 'Online teaching and learning',
        content: 'Bridging the digital divide by providing online education resources to remote areas',
    },
	//  {
    //     id: 4,
    //     image: img3,
    //     heading: 'Healthcare Initiatives',
    //     content: 'Delivering essential healthcare services to remote and underserved areas',
    // },
    
    {
        id: 10,
        image: img10,
        heading: 'Our mission ',
        content: 'To empower underprivileged communities through education, healthcare, and sustainable development initiatives, fostering a brighter future for all.',
    },
];

	useEffect(() => {
		const timer = setInterval(() => {
			handleNext();
		}, 4000);

		return () => clearInterval(timer);
	}, [currentSlide]);

	const handleNext = () => {
		setIsZooming(true);
		setTimeout(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
			setIsZooming(false);
		}, 500);
	};

	const handlePrev = () => {
		setIsZooming(true);
		setTimeout(() => {
			setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
			setIsZooming(false);
		}, 500);
	};

	const goToSlide = (index: number) => {
		if (index !== currentSlide) {
			setIsZooming(true);
			setTimeout(() => {
				setCurrentSlide(index);
				setIsZooming(false);
			}, 500);
		}
	};

	return (
		<div className="relative w-full h-screen overflow-hidden -mt-32 lg:-mt-0">
			{/* Slides */}
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`absolute inset-0 transition-opacity duration-500 ${
						index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
					}`}
				>
					{/* Image with zoom effect */}
					<div
						className={`w-full h-full transition-transform duration-500 ${
							isZooming && index === currentSlide ? 'scale-110' : 'scale-100'
						}`}
					>
						<img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
					</div>

					{/* Overlay */}
					<div className="absolute inset-0 bg-black/40"></div>

					{/* Text Content - Bottom Center */}
					<div
						className={`absolute bottom-0 left-0 right-0 text-center text-white p-8 pb-24 transition-all duration-700 ${
							index === currentSlide && !isZooming
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-10'
						}`}
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.heading}</h1>
						<p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">{slide.content}</p>
					</div>
				</div>
			))}

			{/* Navigation Arrows */}
			{/* <button
				onClick={handlePrev}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
				aria-label="Previous slide"
			>
				<ChevronLeft size={32} />
			</button>

			<button
				onClick={handleNext}
				className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
				aria-label="Next slide"
			>
				<ChevronRight size={32} />
			</button> */}

			{/* Dots Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`transition-all duration-300 rounded-full ${
							index === currentSlide ? 'w-12 h-3 bg-orange-500' : 'w-3 h-3 bg-white/50 hover:bg-white/80'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Slide Counter */}
			{/* <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
				{currentSlide + 1} / {slides.length}
			</div> */}
		</div>
	);
};

export default HeroSection;