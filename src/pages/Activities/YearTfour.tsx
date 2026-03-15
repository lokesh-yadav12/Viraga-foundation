import React, { useState } from 'react';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';
import bgpic from '../../assets/closing10.jpeg';
// import pic1 from '../../assets/image1.png';
// import pic2 from '../../assets/image2.png';
// import hero from '../../assets/hero4.mp4';
// import vi1 from '../../assets/vi1.png';
// import vi2 from '../../assets/vi2.png';
// import vi3 from '../../assets/vi3.png';

import closing1 from '../../assets/closing1.jpeg';
import closing2 from '../../assets/closing2.jpeg';
import closing3 from '../../assets/closing3.jpeg';
import closing4 from '../../assets/closing4.jpeg';
import closing5 from '../../assets/closing5.jpeg';
import closing6 from '../../assets/closing6.jpeg';
import closing7 from '../../assets/closing7.jpeg';
import closing8 from '../../assets/closing8.jpeg';
import closing9 from '../../assets/closing9.jpeg';
import closing10 from '../../assets/closing10.jpeg';
import closing11 from '../../assets/closing11.jpeg';
import closing12 from '../../assets/closing12.jpeg';
import closing13 from '../../assets/closing13.jpeg';
import closing14 from '../../assets/closing14.jpeg';
import closing15 from '../../assets/closing15.jpeg';
import closing16 from '../../assets/closing16.jpeg';
import closing17 from '../../assets/closing17.jpeg';
import closing18 from '../../assets/closing18.jpeg';
import closing19 from '../../assets/closing19.jpeg';
import closing20 from '../../assets/closing20.jpeg';
import closing21 from '../../assets/closing21.jpeg';
import closing22 from '../../assets/closing22.jpeg';
import closing23 from '../../assets/closing23.jpeg';
import closing24 from '../../assets/closing24.jpeg';
import closing25 from '../../assets/closing25.jpeg';
//import closing26 from '../../assets/closing26.jpeg';
interface ImageData {
	src: string;
	alt: string;
}

const Year2024: React.FC = () => {
	const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [zoomLevel, setZoomLevel] = useState<number>(1);
	// const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

	const images: ImageData[] = [
		{
			src: closing1,
			alt: 'Distribution Image 1',
		},
		{
			src: closing2,
			alt: 'Distribution Image 2',
		},
		{
			src: closing3,
			alt: 'Distribution Image 3',
		},
		{
			src: closing4,
			alt: 'Distribution Image 4',
		},
		{
			src: closing5,
			alt: 'Distribution Image 5',
		},
		{
			src: closing6,
			alt: 'Distribution Image 6',
		},
		{
			src: closing7,
			alt: 'Distribution Image 7',
		},	
		{
			src: closing8,
			alt: 'Distribution Image 8',
		},	
		{
			src: closing9,
			alt: 'Distribution Image 9',
		},
		{
			src: closing10,	
			alt: 'Distribution Image 10',
		},
		{
			src: closing11,
			alt: 'Distribution Image 11',
		},
		{
			src: closing12,
			alt: 'Distribution Image 12',
		},
		{
			src: closing13,
			alt: 'Distribution Image 13',
		},
		{
			src: closing14,
			alt: 'Distribution Image 14',
		},
		{
			src: closing15,
			alt: 'Distribution Image 15',
		},
		{
			src: closing16,
			alt: 'Distribution Image 16',
		},
		{
			src: closing17,
			alt: 'Distribution Image 17',
		},
		{
			src: closing18,
			alt: 'Distribution Image 18',
		},
		{
			src: closing19,
			alt: 'Distribution Image 19',
		},
		{
			src: closing20,
			alt: 'Distribution Image 20',
		},
		{
			src: closing21,
			alt: 'Distribution Image 21',
		},
		{
			src: closing22,
			alt: 'Distribution Image 22',
		},
		{
			src: closing23,
			alt: 'Distribution Image 23',
		},
		{
			src: closing24,
			alt: 'Distribution Image 24',
		},
		{
			src: closing25,
			alt: 'Distribution Image 25',
		},
		// {
		// 	src: closing26,
		// 	alt: 'Distribution Image 26',
		// }
	];

	const openLightbox = (index: number): void => {
		setCurrentImageIndex(index);
		setIsLightboxOpen(true);
		setZoomLevel(1); // Reset zoom when opening
		document.body.style.overflow = 'hidden';
	};

	const closeLightbox = (): void => {
		setIsLightboxOpen(false);
		setZoomLevel(1); // Reset zoom when closing
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
		setZoomLevel(1); // Reset zoom when changing image
	};

	const handleZoomIn = (e: React.MouseEvent): void => {
		e.stopPropagation();
		setZoomLevel((prev) => Math.min(prev + 0.5, 3)); // Max zoom 3x
	};

	const handleZoomOut = (e: React.MouseEvent): void => {
		e.stopPropagation();
		setZoomLevel((prev) => Math.max(prev - 0.5, 1)); // Min zoom 1x
	};

	const handleDownload = async (e: React.MouseEvent): Promise<void> => {
		e.stopPropagation();
		const image = images[currentImageIndex];
		
		try {
			const response = await fetch(image.src);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `viraga-${image.alt.replace(/\s+/g, '-').toLowerCase()}.jpg`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Download failed:', error);
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

	// const handlePlayVideo = (): void => {
	// 	setIsVideoPlaying(true);
	// };

	return (
		<div className="min-h-screen bg-white ">
			{/* Hero Section */}
			<div
				className="relative h-[70vh] sm:h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: `url('${bgpic}')`,
				}}
			>
				{/* <div className="absolute inset-0 bg-gradient-to-r from-pink-400/60 via-purple-400/60 to-pink-300/60"></div> */}
				<h1 className="relative text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
					V F T L Closing Ceremony
				</h1>
			</div>

			{/* Main Content Container */}
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-12">
				{/* Video Section */}
				{/* Video Section */}
				

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

				<section className="my-16">
					<h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-8">
						Food Distribution Provisions Cloths - 15-09-2024
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
						{/* Video Container - 2/3 width */}
						<div className="md:hidden lg:col-span-2  flex justify-center">
							<div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video bg-black">
								<iframe
									// width="800"
									// height="400"
									src="https://www.youtube.com/embed/kjNa5jbG9TU"
									title="viraga"
									frameBorder={0}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className='md:h-[400px] md:w-[800px]'
								/>
							</div>
						</div>
						<div className="hidden md:block lg:col-span-2 lg:w-full sm:w-full">
							<div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video bg-black">
								<iframe
									// width="800"
									// height="400"
									src="https://www.youtube.com/embed/kjNa5jbG9TU"
									title="viraga"
									frameBorder={0}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className='md:h-[400px] md:w-[800px]'
								/>
							</div>
						</div>

						{/* <div className="lg:col-span-2 w-full">
							<div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video bg-black">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/kjNa5jbG9TU"
									title="viraga"
									frameBorder={0}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								/>
							</div>
						</div> */}

						{/* Text Content - 1/3 width */}
						<div className="lg:col-span-1 space-y-4 text-gray-700">
							<h3 className="text-xl font-bold text-gray-900 leading-tight">
								Flood Relief Assistance – Distribution of Provisions, Clothing & Vegetables by Viraga
								Foundation
							</h3>
							<p className="text-justify leading-relaxed text-md">
								On <span className="font-semibold text-gray-900">August 31, 2024</span>, severe floods
								caused by the <span className="font-semibold text-gray-900">Budameru River</span>{' '}
								submerged several homes in the{' '}
								<span className="font-semibold text-gray-900">Payakapuram area</span>, leaving families
								without basic necessities for over a week. In response,{' '}
								<span className="font-semibold text-gray-900">Viraga Foundation</span> extended its
								support to <span className="font-semibold text-gray-900">14 affected families</span>,
								ensuring they received essential relief materials.
							</p>
						</div>
					</div>
				</section>

				<div>
					<p className="text-justify leading-relaxed text-sm">
						As part of the initiative, the foundation{' '}
						<span className="font-semibold text-gray-900">distributed 27 types of provisions</span>,
						including{' '}
						<span className="font-semibold text-gray-900">
							grains, pulses, cooking essentials, and fresh vegetables
						</span>
						, along with{' '}
						<span className="font-semibold text-gray-900">sarees, lungis, t-shirts and blankets</span> to
						provide comfort and warmth to the affected individuals. Additionally,{' '}
						<span className="font-semibold text-gray-900">fancy items</span> were also distributed to help
						families regain a sense of normalcy.
					</p>
					<p className="text-justify leading-relaxed text-md py-4">
						This relief effort reflects{' '}
						<span className="font-semibold text-gray-900">
							Viraga Foundation's commitment to humanitarian aid
						</span>
						, providing timely support to those impacted by natural disasters. By offering essential
						supplies and care, the foundation continues to stand with communities in need, fostering
						resilience and hope during challenging times.
					</p>
				</div>

				{/* Mathematics Section */}
				{/* <section className="mb-16 mt-12">
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
				</section> */}
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

					{/* Zoom Controls */}
					<div className="absolute top-5 left-5 flex gap-2 z-50">
						<button
							className="w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300"
							onClick={handleZoomIn}
							aria-label="Zoom in"
							disabled={zoomLevel >= 3}
						>
							<ZoomIn className="w-6 h-6" />
						</button>
						<button
							className="w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300"
							onClick={handleZoomOut}
							aria-label="Zoom out"
							disabled={zoomLevel <= 1}
						>
							<ZoomOut className="w-6 h-6" />
						</button>
						<button
							className="w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300"
							onClick={handleDownload}
							aria-label="Download image"
						>
							<Download className="w-6 h-6" />
						</button>
					</div>

					{/* Zoom Level Indicator */}
					<div className="absolute top-20 left-5 text-white text-sm bg-black/50 px-3 py-1 rounded-full z-50">
						{Math.round(zoomLevel * 100)}%
					</div>

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

					{/* Image Container with Zoom */}
					<div 
						className="relative max-w-[90%] max-h-[90vh] overflow-auto" 
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={images[currentImageIndex].src}
							alt={images[currentImageIndex].alt}
							className="max-w-full max-h-[90vh] object-contain transition-transform duration-300"
							style={{ 
								transform: `scale(${zoomLevel})`,
								cursor: zoomLevel > 1 ? 'move' : 'default'
							}}
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

					{/* Image Counter */}
					<div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full z-50">
						{currentImageIndex + 1} / {images.length}
					</div>
				</div>
			)}
		</div>
	);
};

export default Year2024;