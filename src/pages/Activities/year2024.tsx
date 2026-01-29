import React, { useState } from 'react';
import pic1 from '../../assets/image1.png';
import pic2 from '../../assets/image2.png';
import hero from '../../assets/hero4.mp4';
interface ImageData {
	src: string;
	alt: string;
}

const Year2024: React.FC = () => {
	const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

	const images: ImageData[] = [
		{
			src: pic1,
			alt: 'Distribution Image 1',
		},
		{
			src: pic2,
			alt: 'Distribution Image 2',
		},
		{
			src: pic1,
			alt: 'Distribution Image 3',
		},
		{
			src: pic2,
			alt: 'Distribution Image 4',
		},
		{
			src: pic1,
			alt: 'Distribution Image 5',
		},
		{
			src: pic2,
			alt: 'Distribution Image 6',
		},
	];

	const openLightbox = (index: number): void => {
		setCurrentImageIndex(index);
		setIsLightboxOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeLightbox = (): void => {
		setIsLightboxOpen(false);
		document.body.style.overflow = 'auto';
	};

	const changeImage = (direction: number): void => {
		let newIndex = currentImageIndex + direction;

		if (newIndex < 0) {
			newIndex = images.length - 1;
		} else if (newIndex >= images.length) {
			newIndex = 0;
		}

		setCurrentImageIndex(newIndex);
	};

	const handleKeyDown = (e: React.KeyboardEvent): void => {
		if (e.key === 'Escape') {
			closeLightbox();
		} else if (e.key === 'ArrowLeft') {
			changeImage(-1);
		} else if (e.key === 'ArrowRight') {
			changeImage(1);
		}
	};

	React.useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (!isLightboxOpen) return;

			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowLeft') {
				changeImage(-1);
			} else if (e.key === 'ArrowRight') {
				changeImage(1);
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [isLightboxOpen, currentImageIndex]);

	const handlePlayVideo = (): void => {
		setIsVideoPlaying(true);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div
        className="relative h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/60 via-purple-400/60 to-pink-300/60"></div>
        <h1 className="relative text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
          2024-2025
        </h1>
      </div>

			{/* Main Content Container */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Video Section */}
				{/* Video Section */}
				<section className="mb-1">
					<h2 className="text-2xl font-bold text-black mb-8">
						Food Distribution Provisions Cloths - 15-09-2024
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						{/* Video Container */}
						<div>
							

							<div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
								<video className="w-full h-full object-cover" controls preload="metadata">
									<source src={hero} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>

						{/* Text Content */}
						<div className="space-y-4 text-gray-700">
							<h3 className="text-2xl font-bold text-gray-900 leading-tight">
								Flood Relief Assistance – Distribution of Provisions, Clothing & Vegetables by Viraga
								Foundation
							</h3>
							<p className="text-justify leading-relaxed">
								On <span className="font-semibold text-gray-900">August 31, 2024</span>, severe floods
								caused by the <span className="font-semibold text-gray-900">Budameru River</span>{' '}
								submerged several homes in the{' '}
								<span className="font-semibold text-gray-900">Payakapuram area</span>, leaving families
								without basic necessities for over a week. In response,{' '}
								<span className="font-semibold text-gray-900">Viraga Foundation</span> extended its
								support to <span className="font-semibold text-gray-900">14 affected families</span>,
								ensuring they received essential relief materials.
							</p>
							<p className="text-justify leading-relaxed">
								As part of the initiative, the foundation{' '}
								<span className="font-semibold text-gray-900">distributed 27 types of provisions</span>,
								including{' '}
								<span className="font-semibold text-gray-900">
									grains, pulses, cooking essentials, and fresh vegetables
								</span>
								, along with{' '}
								<span className="font-semibold text-gray-900">sarees, lungis, tshirt and blankets</span>{' '}
								to provide comfort and warmth to the affected individuals. Additionally,{' '}
								<span className="font-semibold text-gray-900">fancy items</span> were also distributed
								to help families regain a sense of normalcy.
							</p>
							{/* <p className="text-justify leading-relaxed">
								This relief effort reflects{' '}
								<span className="font-semibold text-gray-900">
									Viraga Foundation's commitment to humanitarian aid
								</span>
								, providing timely support to those impacted by natural disasters. By offering essential
								supplies and care, the foundation continues to stand with communities in need, fostering
								resilience and hope during challenging times.
							</p> */}
						</div>
					</div>
				</section>

				{/* Mathematics Section */}
				<section className="mb-16 mt-12">
					<h2 className="text-3xl font-bold text-red-600 mb-4">
						Distribution of Mathematics Handbooks – Supporting Needy Students in Government Schools
					</h2>

					<div className="space-y-4 text-gray-700">
						<p className="text-justify leading-relaxed">
							As part of its commitment to{' '}
							<span className="font-semibold text-gray-900">promoting education</span>,{' '}
							<span className="font-semibold text-gray-900">Viraga Foundation</span>, in collaboration
							with{' '}
							<span className="font-semibold text-gray-900">
								MTG Learning Media Private Limited (content provided by MTG)
							</span>
							, is distributing{' '}
							<span className="font-semibold text-gray-900">100 Mathematics Handbooks</span> to{' '}
							<span className="font-semibold text-gray-900">
								needy students studying in government schools
							</span>
							.
						</p>

						<p className="text-justify leading-relaxed">
							This specially designed handbook contains{' '}
							<span className="font-semibold text-gray-900">all essential mathematical formulas</span>{' '}
							from <span className="font-semibold text-gray-900">Class VI to Class XII</span>, serving as
							a <span className="font-semibold text-gray-900">quick reference guide</span> to help
							students strengthen their understanding of the subject and enhance their academic
							performance. Each book has been{' '}
							<span className="font-semibold text-gray-900">
								customized with a VIRAGA Foundation cover
							</span>
							, making it a personalized resource for students while reinforcing the foundation's
							dedication to their educational growth.
						</p>

						<p className="text-justify leading-relaxed mb-6">
							By providing these handbooks, the foundation aims to:
						</p>

						<div className="space-y-3 my-6">
							<div className="flex items-start gap-3">
								<span className="text-green-600 text-2xl font-bold mt-1">✓</span>
								<span className="text-lg font-medium text-gray-900">
									Support students in their academic journey
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-green-600 text-2xl font-bold mt-1">✓</span>
								<span className="text-lg font-medium text-gray-900">
									Boost their confidence in mathematics
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-green-600 text-2xl font-bold mt-1">✓</span>
								<span className="text-lg font-medium text-gray-900">
									Help them prepare for competitive exams and future studies
								</span>
							</div>
						</div>

						<p className="text-justify leading-relaxed">
							This initiative is designed to{' '}
							<span className="font-semibold text-gray-900">empower underprivileged students</span>,
							ensuring they have access to the resources they need to{' '}
							<span className="font-semibold text-gray-900">
								build a strong foundation for their careers
							</span>
							.
						</p>

						<p className="text-justify leading-relaxed">
							Through such efforts, <span className="font-semibold text-gray-900">Viraga Foundation</span>
							, in partnership with{' '}
							<span className="font-semibold text-gray-900">MTG Learning Media Private Limited</span>,
							continues to{' '}
							<span className="font-semibold text-gray-900">
								inspire, uplift, and make education accessible
							</span>
							, helping students{' '}
							<span className="font-semibold text-gray-900">
								shape a brighter and more promising future.
							</span>
						</p>
					</div>
				</section>

				{/* Image Gallery */}
				<section>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{images.map((image, index) => (
							<div
								key={index}
								className="relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
								onClick={() => openLightbox(index)}
							>
								<img src={image.src} alt={image.alt} className="w-full h-72 object-cover" />
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
							</div>
						))}
					</div>
				</section>
			</div>

			{/* Lightbox */}
			{isLightboxOpen && (
				<div
					className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
					onClick={closeLightbox}
				>
					{/* Close Button */}
					<button
						className="absolute top-5 right-5 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-3xl flex items-center justify-center transition-all duration-300 z-50"
						onClick={closeLightbox}
						aria-label="Close lightbox"
					>
						×
					</button>

					{/* Previous Button */}
					<button
						className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all duration-300"
						onClick={(e) => {
							e.stopPropagation();
							changeImage(-1);
						}}
						aria-label="Previous image"
					>
						‹
					</button>

					{/* Image */}
					<div className="relative max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
						<img
							src={images[currentImageIndex].src}
							alt={images[currentImageIndex].alt}
							className="max-w-full max-h-[90vh] object-contain"
						/>
					</div>

					{/* Next Button */}
					<button
						className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all duration-300"
						onClick={(e) => {
							e.stopPropagation();
							changeImage(1);
						}}
						aria-label="Next image"
					>
						›
					</button>
				</div>
			)}
		</div>
	);
};

export default Year2024;
