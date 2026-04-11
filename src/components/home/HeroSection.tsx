import React, { useState, useEffect } from 'react';
import img1 from '../../assets/home1.jpeg'
import img2 from '../../assets/home2.jpeg'
import img4 from '../../assets/home4.jpeg'
import img6 from '../../assets/home6.jpeg'
import img7 from '../../assets/home11.jpg'
import img8 from '../../assets/home8.jpeg'
import img9 from '../../assets/home9.jpeg'
import splashImage from '../../assets/newbacha.png' // 👈 Replace with your image

interface Slide {
  id: number;
  image: string;
  heading: string;
  content: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  const slides: Slide[] = [
    { id: 9, image: img9, heading: 'Food Donation (Narayana Seva)', content: 'No one should go hungry. Through Narayana Seva, we provide nutritious meals to the underprivileged.' },
    { id: 1, image: img1, heading: 'Scholarship Assistance & Guidance', content: 'Education is the foundation of a brighter future. We offer scholarships, mentorship, and career guidance.' },
    { id: 7, image: img7, heading: 'Health Awareness & Medical Support', content: 'Good health is a fundamental right. We work towards raising awareness about healthcare, guiding people.' },
    { id: 2, image: img2, heading: 'Skill Development & Career Guidance', content: 'True empowerment comes from self-reliance. Our skill development programs equip individuals with practical knowledge.' },
    { id: 3, image: img4, heading: 'Promoting the Teachings of Great Leaders', content: 'The wisdom of great leaders transforms lives. By spreading the teachings of Swami Vivekananda and other visionaries.' },
    { id: 5, image: img6, heading: 'Orphanage for Street Children', content: 'Every child deserves love, security, and a bright future. Our mission is to provide shelter, education, and holistic care.' },
    { id: 6, image: img8, heading: 'Disaster Relief & Humanitarian Aid', content: 'In times of calamity, immediate support can save lives. We provide emergency relief, rehabilitation, and long-term recovery.' },
  ];

  // Auto-close splash after 8 seconds
  useEffect(() => {
    if (!showSplash) return;
    const autoClose = setTimeout(() => closeSplash(), 5000);
    return () => clearTimeout(autoClose);
  }, [showSplash]);

  // Slider auto-advance (only when splash is gone)
  useEffect(() => {
    if (showSplash) return;
    const timer = setInterval(() => handleNext(), 4000);
    return () => clearInterval(timer);
  }, [currentSlide, showSplash]);

  const closeSplash = () => {
    setSplashFading(true);
    setTimeout(() => {
      setShowSplash(false);
      setSplashFading(false);
    }, 500);
  };

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
    <>
      {/* ── Splash Screen ── */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40  transition-opacity duration-500 ${splashFading ? 'opacity-0' : 'opacity-100'}`}
          onClick={closeSplash} // click outside (anywhere on backdrop) closes
        >
          {/* Image — stop click propagation so clicking image itself also closes (same as outside) */}
          <img
            src={splashImage}
            alt="Welcome"
            className="max-w-full max-h-full w-full h-full object-contain"
          />

          {/* Auto-close progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-orange-500"
              style={{ animation: 'shrink 5s linear forwards' }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeSplash(); }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white text-xl font-bold transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
            aria-label="Close"
          >
            ✕
          </button>

          {/* "Tap anywhere to continue" hint */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wide">
            Tap anywhere to continue
          </p>

          <style>{`
            @keyframes shrink {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}</style>
        </div>
      )}

      {/* ── Hero Slider ── */}
      <div className="relative w-full h-screen sm:h-[90vh] overflow-hidden -mt-32 lg:-mt-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`w-full h-full transition-transform duration-500 ${isZooming && index === currentSlide && !showSplash ? 'scale-110' : 'scale-100'}`}>
              <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className={`absolute bottom-0 left-0 right-0 text-center text-white p-8 pb-24 transition-all duration-700 ${index === currentSlide && !isZooming ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.heading}</h1>
              <p className="text-md md:text-2xl max-w-3xl mx-auto drop-shadow-md">{slide.content}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 h-3 bg-orange-500' : 'w-3 h-3 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;



// import React, { useState, useEffect } from 'react';
// //import { ChevronLeft, ChevronRight } from 'lucide-react';
// import img1 from '../../assets/home1.jpeg'
// import img2 from '../../assets/home2.jpeg'
// //import img3 from '../../assets/home2.jpeg';
// import img4 from '../../assets/home4.jpeg'
// //import img5 from '../../assets/home5.jpeg'
// import img6 from '../../assets/home6.jpeg'
// import img7 from '../../assets/home11.jpg'
// import img8 from '../../assets/home8.jpeg'
// import img9 from '../../assets/home9.jpeg'
// //import img10 from '../../assets/home10.jpg'

// interface Slide {
// 	id: number;
// 	image: string;
// 	heading: string;
// 	content: string;
// }


// const HeroSection: React.FC = () => {
// 	const [currentSlide, setCurrentSlide] = useState(0);
// 	const [isZooming, setIsZooming] = useState(false);

// 	const slides: Slide[] = [
// 		{
//         id: 9,
//         image: img9,
//         heading: 'Food Donation (Narayana Seva)',
//         content: 'No one should go hungry. Through Narayana Seva, we provide nutritious meals to the underprivileged.',
//     },
//     {
//         id: 1,
//         image: img1,
//         heading: 'Scholarship Assistance & Guidance ',
//         content: 'Education is the foundation of a brighter future. We offer scholarships, mentorship, and career guidance .',
//     },
// 	 {
//         id: 7,
//         image: img7,
//         heading: 'Health Awareness & Medical Support',
//         content: 'Good health is a fundamental right. We work towards raising awareness about healthcare, guiding people.',
//     },
	
//     {
//         id: 2,
//         image: img2,
//         heading: 'Skill Development & Career Guidance',
//         content: 'True empowerment comes from self-reliance. Our skill development programs equip individuals with practical knowledge.',
//     },
//     {
//         id: 3,
//         image: img4,
//         heading: 'Promoting the Teachings of Great Leaders',
//         content: 'The wisdom of great leaders transforms lives. By spreading the teachings of Swami Vivekananda and other visionaries.',
//     },
   
//     {
//         id: 5,
//         image: img6,
//         heading: 'Orphanage for Street Children',
//         content: 'Every child deserves love, security, and a bright future. Our mission is to provide shelter, education, and holistic care .',
//     },
//     {
//         id: 6,
//         image: img8,
//         heading: 'Disaster Relief & Humanitarian Aid',
//         content: 'In times of calamity, immediate support can save lives. We provide emergency relief, rehabilitation, and long-term recovery.',
//     },
   
  
// ];

// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			handleNext();
// 		}, 4000);

// 		return () => clearInterval(timer);
// 	}, [currentSlide]);

// 	const handleNext = () => {
// 		setIsZooming(true);
// 		setTimeout(() => {
// 			setCurrentSlide((prev) => (prev + 1) % slides.length);
// 			setIsZooming(false);
// 		}, 500);
// 	};

// 	const handlePrev = () => {
// 		setIsZooming(true);
// 		setTimeout(() => {
// 			setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// 			setIsZooming(false);
// 		}, 500);
// 	};

// 	const goToSlide = (index: number) => {
// 		if (index !== currentSlide) {
// 			setIsZooming(true);
// 			setTimeout(() => {
// 				setCurrentSlide(index);
// 				setIsZooming(false);
// 			}, 500);
// 		}
// 	};

// 	return (
// 		<div className="relative w-full h-screen sm:h-[90vh] overflow-hidden -mt-32 lg:-mt-0">
// 			{/* Slides */}
// 			{slides.map((slide, index) => (
// 				<div
// 					key={slide.id}
// 					className={`absolute inset-0 transition-opacity duration-500 ${
// 						index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
// 					}`}
// 				>
// 					{/* Image with zoom effect */}
// 					<div
// 						className={`w-full h-full transition-transform duration-500 ${
// 							isZooming && index === currentSlide ? 'scale-110' : 'scale-100'
// 						}`}
// 					>
// 						<img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
// 					</div>

// 					{/* Overlay */}
// 					<div className="absolute inset-0 bg-black/40"></div>

// 					{/* Text Content - Bottom Center */}
// 					<div
// 						className={`absolute bottom-0 left-0 right-0 text-center text-white p-8 pb-24 transition-all duration-700 ${
// 							index === currentSlide && !isZooming
// 								? 'opacity-100 translate-y-0'
// 								: 'opacity-0 translate-y-10'
// 						}`}
// 					>
// 						<h1 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.heading}</h1>
// 						<p className="text-md md:text-2xl max-w-3xl mx-auto drop-shadow-md">{slide.content}</p>
// 					</div>
// 				</div>
// 			))}

// 			{/* Navigation Arrows */}
// 			{/* <button
// 				onClick={handlePrev}
// 				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
// 				aria-label="Previous slide"
// 			>
// 				<ChevronLeft size={32} />
// 			</button>

// 			<button
// 				onClick={handleNext}
// 				className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
// 				aria-label="Next slide"
// 			>
// 				<ChevronRight size={32} />
// 			</button> */}

// 			{/* Dots Indicator */}
// 			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
// 				{slides.map((_, index) => (
// 					<button
// 						key={index}
// 						onClick={() => goToSlide(index)}
// 						className={`transition-all duration-300 rounded-full ${
// 							index === currentSlide ? 'w-12 h-3 bg-orange-500' : 'w-3 h-3 bg-white/50 hover:bg-white/80'
// 						}`}
// 						aria-label={`Go to slide ${index + 1}`}
// 					/>
// 				))}
// 			</div>

// 			{/* Slide Counter */}
// 			{/* <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
// 				{currentSlide + 1} / {slides.length}
// 			</div> */}
// 		</div>
// 	);
// };

// export default HeroSection;