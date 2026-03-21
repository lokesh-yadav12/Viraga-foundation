import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
//import img1 from '../../assets/class5.jpeg';
import bgpic from '../../assets/class5.jpeg';


// import prize6 from '../../assets/prize6.jpeg';
// import prize7 from '../../assets/prize7.jpeg';
// import prize8 from '../../assets/prize8.jpeg';
// import prize9 from '../../assets/prize9.jpeg';
// import prize10 from '../../assets/prize10.jpeg';
// import prize11 from '../../assets/prize11.jpeg';
import class1 from '../../assets/class1.jpeg';
import class2 from '../../assets/class2.jpeg';
import class3 from '../../assets/class3.jpeg';
import class4 from '../../assets/class4.jpeg';
import class5 from '../../assets/class5.jpeg';
import class6 from '../../assets/class6.jpeg';
import class7 from '../../assets/class7.jpeg';
import class8 from '../../assets/class8.jpeg';
import class9 from '../../assets/class9.jpeg';
import class10 from '../../assets/class10.jpeg';
import class11 from '../../assets/class11.jpeg';
import class12 from '../../assets/class12.jpeg';
import class13 from '../../assets/class13.jpeg';
import class14 from '../../assets/class14.jpeg';
import class15 from '../../assets/class15.jpeg';
import class16 from '../../assets/class16.jpeg';
import class17 from '../../assets/class17.jpeg';
import class18 from '../../assets/class18.jpeg';
import class19 from '../../assets/class19.jpeg';
import class20 from '../../assets/class20.jpeg';
import class21 from '../../assets/class21.jpeg';
import class22 from '../../assets/class22.jpeg';
import class23 from '../../assets/class23.jpeg';
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
		{ id: 1, src: class1, alt: 'Prize distribution event' },
		{ id: 2, src: class2, alt: 'Children receiving gifts' },
		{ id: 3, src: class3, alt: 'Community gathering' },
		{ id: 4, src: class4, alt: 'Volunteers with children' },
		{ id: 5, src: class5, alt: 'Distribution of clothes' },
		{ id: 6, src: class6, alt: 'Fresh fruits distribution' },
		{ id: 7, src: class7, alt: 'Children receiving items' },
		{ id: 8, src: class8, alt: 'Clothing donation' },
		{ id: 9, src: class9, alt: 'Packed items ready for distribution' },
		{ id: 10, src: class10, alt: 'UGADI celebration group photo' },
		{ id: 11, src: class11, alt: 'Food distribution event' },
		{ id: 12, src: class12, alt: 'Children receiving gifts' },
		{ id: 13, src: class13, alt: 'Community gathering' },
		{ id: 14, src: class14, alt: 'Volunteers with children' },
		{ id: 15, src: class15, alt: 'Distribution of clothes' },
		{ id: 16, src: class16, alt: 'Fresh fruits distribution' },
		{ id: 17, src: class17, alt: 'Children receiving items' },
		{ id: 18, src: class18, alt: 'Clothing donation' },
		{ id: 19, src: class19, alt: 'Packed items ready for distribution' },
		{ id: 20, src: class20, alt: 'UGADI celebration group photo' },
		{ id: 21, src: class21, alt: 'UGADI celebration group photo' },
		{ id: 22, src: class22, alt: 'UGADI celebration group photo' },
		{ id: 23, src: class23, alt: 'UGADI celebration group photo' },
		// { id: 24, src: class24, alt: 'UGADI celebration group photo' },
		// { id: 25, src: class25, alt: 'UGADI celebration group photo' },
		// { id: 26, src: class26, alt: 'UGADI celebration group photo' },
		// { id: 27, src: class27, alt: 'UGADI celebration group photo' },
		// { id: 28, src: class28, alt: 'UGADI celebration group photo' },
		// { id: 29, src: class29, alt: 'UGADI celebration group photo' },
		// { id: 30, src: class30, alt: 'UGADI celebration group photo' },
		// { id: 31, src: class31, alt: 'UGADI celebration group photo' },
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
					<h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wider drop-shadow-2xl mb-2">
						V F T L Registration, Class and Exam
					</h1>
					<div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Main Content Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* UGADI Celebration Section */}
				<div className="mb-16">
					{/* Text Block */}
					{/* <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
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
                    </div> */}

					{/* Image Gallery Section Header */}
					<div className="mb-8">
						<h3 className="text-3xl font-bold text-gray-800 mb-2">Event Gallery</h3>
						<p className="text-gray-600">Click on any image to view in full screen</p>
					</div>

					{/* Image Gallery Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mb-10">
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

					{/* Food Donation Program */}
					

					

					{/* Large Featured Image */}
					
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
