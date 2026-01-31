import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
import img1 from '../../assets/cele1.png';
import bgpic from '../../assets/bgpic.jpg';
import e1 from '../../assets/e1.png';
import e2 from '../../assets/e2.png';
import e3 from '../../assets/e3.png';		
import e4 from '../../assets/e4.png';
import e5 from '../../assets/e5.png';
import e6 from '../../assets/e6.png';
import e7 from '../../assets/e7.png';
import e8 from '../../assets/e8.png';
import e9 from '../../assets/e9.png';
import e10 from '../../assets/e10.png';
import e11 from '../../assets/e11.png';
import e12 from '../../assets/e12.png';
import e13 from '../../assets/e13.png';
import e14 from '../../assets/e14.png';
import e15 from '../../assets/e15.png';
import e16 from '../../assets/e16.png';
import e17 from '../../assets/e17.png';
import e18 from '../../assets/e18.png';
import e19 from '../../assets/e19.png';
import e20 from '../../assets/e20.png';
import e21 from '../../assets/e21.png';
import e22 from '../../assets/e22.png';
import e23 from '../../assets/e23.png';
import e24 from '../../assets/e24.png';
import e25 from '../../assets/e25.png';
import e26 from '../../assets/e26.png';
import e27 from '../../assets/e27.png';
import e28 from '../../assets/e28.png';
import e29 from '../../assets/e29.png';
import e30 from '../../assets/e30.png';
import e31 from '../../assets/e31.png';
interface GalleryImage {
	id: number;
	src: string;
	alt: string;
}

const Year2022: React.FC = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
	const [zoom, setZoom] = useState<number>(1);

	// Gallery images - replace with your actual image imports
	const galleryImages: GalleryImage[] = [
		{ id: 1, src: e1, alt: 'Food distribution event' },
		{ id: 2, src: e2, alt: 'Children receiving gifts' },
		{ id: 3, src: e3, alt: 'Community gathering' },
		{ id: 4, src: e4, alt: 'Volunteers with children' },
		{ id: 5, src: e5, alt: 'Distribution of clothes' },
		{ id: 6, src: e6, alt: 'Fresh fruits distribution' },
		{ id: 7, src: e7, alt: 'Children receiving items' },
		{ id: 8, src: e8, alt: 'Clothing donation' },
		{ id: 9, src: e9, alt: 'Packed items ready for distribution' },
		{ id: 10, src: e10, alt: 'UGADI celebration group photo' },
		{ id: 11, src: e11, alt: 'Food distribution event' },
		{ id: 12, src: e12, alt: 'Children receiving gifts' },
		{ id: 13, src: e13, alt: 'Community gathering' },
		{ id: 14, src: e14, alt: 'Volunteers with children' },
		{ id: 15, src: e15, alt: 'Distribution of clothes' },
		{ id: 16, src: e16, alt: 'Fresh fruits distribution' },
		{ id: 17, src: e17, alt: 'Children receiving items' },
		{ id: 18, src: e18, alt: 'Clothing donation' },
		{ id: 19, src: e19, alt: 'Packed items ready for distribution' },
		{ id: 20, src: e20, alt: 'UGADI celebration group photo' },
		{ id: 21, src: e21, alt: 'UGADI celebration group photo' },
		{ id: 22, src: e22, alt: 'UGADI celebration group photo' },
		{ id: 23, src: e23, alt: 'UGADI celebration group photo' },
		{ id: 24, src: e24, alt: 'UGADI celebration group photo' },
		{ id: 25, src: e25, alt: 'UGADI celebration group photo' },
		{ id: 26, src: e26, alt: 'UGADI celebration group photo' },
		{ id: 27, src: e27, alt: 'UGADI celebration group photo' },
		{ id: 28, src: e28, alt: 'UGADI celebration group photo' },
		{ id: 29, src: e29, alt: 'UGADI celebration group photo' },
		{ id: 30, src: e30, alt: 'UGADI celebration group photo' },
		{ id: 31, src: e31, alt: 'UGADI celebration group photo' },
	];

	const openLightbox = (index: number) => {
		setSelectedImageIndex(index);
		setZoom(1);
	};

	const closeLightbox = () => {
		setSelectedImageIndex(null);
		setZoom(1);
	};

	const goToPrevious = () => {
	if (selectedImageIndex !== null) {
		setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
		setZoom(1);
	}
};

const goToNext = () => {
	if (selectedImageIndex !== null) {
		setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
		setZoom(1);
	}
};

	const handleZoomIn = () => {
		setZoom((prev) => Math.min(prev + 0.25, 3));
	};

	const handleZoomOut = () => {
		setZoom((prev) => Math.max(prev - 0.25, 0.5));
	};

	const handleDownload = () => {
		if (selectedImageIndex !== null) {
			const link = document.createElement('a');
			link.href = galleryImages[selectedImageIndex].src;
			link.download = `viraga-foundation-${galleryImages[selectedImageIndex].id}.jpg`;
			link.click();
		}
	};

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (selectedImageIndex === null) return;

			switch (e.key) {
				case 'ArrowLeft':
					goToPrevious();
					break;
				case 'ArrowRight':
					goToNext();
					break;
				case 'Escape':
					closeLightbox();
					break;
				case '+':
				case '=':
					handleZoomIn();
					break;
				case '-':
					handleZoomOut();
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [selectedImageIndex]);

	return (
		<div className="w-full bg-gray-50">
			{/* Hero Section */}
			<div
				className="relative w-full h-[70vh] sm:h-[80vh] bg-cover bg-center flex items-center justify-center"
				style={{
					backgroundImage: `url('${bgpic}')`,
				}}
			>
				<div className="text-center">
					<h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wider drop-shadow-2xl mb-2">2022-2023</h1>
					<div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Main Content Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Food Donation Program */}
				<div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
					<div className="prose prose-lg max-w-none">
						<p className="text-gray-700 text-lg leading-relaxed mb-6">
							On <span className="font-bold text-gray-900">March 12, 2023</span>, as part of the{' '}
							<span className="font-bold text-orange-600">Food Donation Program</span>, the{' '}
							<span className="font-bold text-orange-600">Viraga Foundation</span> successfully prepared
							and distributed nutritious meals to{' '}
							<span className="font-bold text-gray-900">100 needy individuals</span>. The food was{' '}
							<span className="font-bold text-gray-900">self-prepared with care and dedication</span>,
							ensuring quality and hygiene. This initiative aimed to support underprivileged communities
							by providing them with wholesome meals, reinforcing the foundation's commitment to{' '}
							<span className="font-bold text-orange-600">
								eradicating hunger and promoting social welfare
							</span>
							.
						</p>
						<p className="text-gray-700 text-lg leading-relaxed">
							Through such efforts, Viraga Foundation continues to make a positive impact, fostering a
							spirit of compassion and community service.
						</p>
					</div>
				</div>

				{/* UGADI Celebration Section */}
				<div className="mb-16">
					<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 md:p-12 mb-12">
						<h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-8 border-l-8 border-red-600 pl-6">
							UGADI Celebration – Spreading Joy Through Giving
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								On <span className="font-bold text-gray-900">March 22, 2023</span>, in celebration of{' '}
								<span className="font-bold text-orange-600">UGADI (Telugu Samvatsaraadi)</span>,{' '}
								<span className="font-bold text-orange-600">Viraga Foundation</span> organized a special
								donation drive to support underprivileged children. As part of this initiative, the
								foundation distributed{' '}
								<span className="font-bold text-gray-900">new clothes and fresh fruits</span> to{' '}
								<span className="font-bold text-gray-900">single-parent children and orphans</span>{' '}
								residing at <span className="font-bold text-orange-600">Mathruchaya Organization</span>.
							</p>

							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								This effort aimed to bring festive joy to these children, ensuring they could celebrate
								Ugadi with happiness and dignity. By providing essential items and fostering a sense of
								belonging,{' '}
								<span className="font-bold text-orange-600">
									Viraga Foundation remains committed to its mission of uplifting vulnerable
									communities
								</span>
								. Through such initiatives, the foundation continues to spread kindness and make a
								meaningful impact on society.
							</p>

							<p className="text-gray-700 text-lg leading-relaxed">
								This event is a part of{' '}
								<span className="font-bold text-orange-600">
									Viraga Foundation's ongoing Food Donation Program
								</span>
								, which focuses on{' '}
								<span className="font-bold text-gray-900">
									nourishing lives, spreading smiles, and promoting social welfare
								</span>
								.
							</p>
						</div>
					</div>

					{/* Large Featured Image */}
					<div className="mb-2  grid grid-cols-1 sm:grid-cols-3 flex-row items-center gap-5">
						<div className="relative overflow-hidden sm:col-span-2 rounded-2xl shadow-2xl">
							<img
								src={img1}
								alt="UGADI celebration group photo"
								className=" cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
								onClick={() => openLightbox(0)}
							/>
							{/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
								<div className="p-6 text-white">
									<p className="text-lg font-semibold">Click to view full image</p>
								</div>
							</div> */}
						</div>
						<div className='px-5 top-0'>
							<p className='font-bold text-2xl'>UGADI Celebration – Spreading Joy Through Giving</p>
							<p className=" text-gray-600 text-md  mt-4">On March 22, 2023, in celebration of UGADI (Telugu Samvatsaraadi), Viraga Foundation organized a special donation drive to support underprivileged children. As part of this initiative, the foundation distributed new clothes and fresh fruits to single-parent children and orphans residing at Mathruchaya Organization.</p>
						</div>
					</div>

					{/* Text Block */}
					<div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								This effort aimed to bring festive joy to these children, ensuring they could celebrate
								Ugadi with happiness and dignity. By providing essential items and fostering a sense of
								belonging,{' '}
								<span className="font-bold text-orange-600">
									Viraga Foundation remains committed to its mission of uplifting vulnerable
									communities
								</span>
								. Through such initiatives, the foundation continues to spread kindness and make a
								meaningful impact on society.
							</p>

							<p className="text-gray-700 text-lg leading-relaxed">
								This event is a part of{' '}
								<span className="font-bold text-orange-600">
									Viraga Foundation's ongoing Food Donation Program
								</span>
								, which focuses on{' '}
								<span className="font-bold text-gray-900">
									nourishing lives, spreading smiles, and promoting social welfare
								</span>
								.
							</p>
						</div>
					</div>

					{/* Image Gallery Section Header */}
					<div className="mb-8">
						<h3 className="text-3xl font-bold text-gray-800 mb-2">Event Gallery</h3>
						<p className="text-gray-600">Click on any image to view in full screen</p>
					</div>

					{/* Image Gallery Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{galleryImages.map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white"
								onClick={() => openLightbox(index)}
							>
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
										<ZoomIn size={40} className="mx-auto mb-2" />
										<p className="text-sm font-medium px-4">{image.alt}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Enhanced Lightbox Modal */}
			{/* Enhanced Lightbox Modal */}
{selectedImageIndex !== null && (
	<div
		className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
		onClick={closeLightbox}
	>
		{/* Close Button */}
		<button
			className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-20 bg-black/70 rounded-full p-2"
			onClick={closeLightbox}
		>
			<X size={32} />
		</button>

		{/* Image Counter */}
		<div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/70 px-4 py-2 rounded-full z-20">
			{selectedImageIndex + 1} / {galleryImages.length}
		</div>

		{/* Control Buttons */}
		<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/70 px-6 py-3 rounded-full z-20">
			<button
				onClick={(e) => {
					e.stopPropagation();
					handleZoomOut();
				}}
				className="text-white hover:text-orange-400 transition-colors"
				title="Zoom Out"
			>
				<ZoomOut size={24} />
			</button>
			<button
				onClick={(e) => {
					e.stopPropagation();
					handleZoomIn();
				}}
				className="text-white hover:text-orange-400 transition-colors"
				title="Zoom In"
			>
				<ZoomIn size={24} />
			</button>
			<button
				onClick={(e) => {
					e.stopPropagation();
					handleDownload();
				}}
				className="text-white hover:text-orange-400 transition-colors"
				title="Download"
			>
				<Download size={24} />
			</button>
		</div>

		{/* Previous Button */}
		<button
			className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white transition-colors bg-black/40 rounded-full p-1 sm:p-3 z-20 hover:bg-orange-500 hover:scale-110"
			onClick={(e) => {
				e.stopPropagation();
				goToPrevious();
			}}
		>
			<ChevronLeft size={40} />
		</button>

		{/* Next Button */}
		<button
			className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white transition-colors bg-black/40 rounded-full p-1 sm:p-3 z-20 hover:bg-orange-500 hover:scale-110"
			onClick={(e) => {
				e.stopPropagation();
				goToNext();
			}}
		>
			<ChevronRight size={40} />
		</button>

		{/* Image */}
		<div className="max-w-7xl max-h-[80vh] p-4 overflow-auto z-10" onClick={(e) => e.stopPropagation()}>
			<img
				src={galleryImages[selectedImageIndex].src}
				alt={galleryImages[selectedImageIndex].alt}
				className="max-w-full max-h-full object-contain transition-transform duration-300"
				style={{ transform: `scale(${zoom})` }}
			/>
		</div>

		{/* Image Caption */}
		<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/70 px-6 py-2 rounded-full max-w-md z-20">
			{galleryImages[selectedImageIndex].alt}
		</div>
	</div>
)}
		</div>
	);
};

export default Year2022;
