import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

// Import your actual images
import bgpic from '../../assets/level4.png';
// Foundation Inception Images
import inception1 from '../../assets/i1.png';
import inception2 from '../../assets/i2.png';
import inception3 from '../../assets/i3.png';
import inception4 from '../../assets/i4.png';
import inception5 from '../../assets/i5.png';
import inception6 from '../../assets/i6.png';
import inception7 from '../../assets/i7.png';
import inception8 from '../../assets/i8.png';
import inception9 from '../../assets/i9.png';
import inception10 from '../../assets/i10.png';
import inception11 from '../../assets/i11.png';
import inception12 from '../../assets/i12.png';
import inception13 from '../../assets/i13.png';
import inception14 from '../../assets/i14.png';
import inception15 from '../../assets/i15.png';
// import inception16 from '../../assets/i16.png';

// Food Donation Feb 7 Images
import feb7_1 from '../../assets/f1.png';
import feb7_2 from '../../assets/f2.png';
import feb7_3 from '../../assets/f3.png';
// Food Donation Feb 21 Images
import feb21_1 from '../../assets/p1.png';
import feb21_2 from '../../assets/p1.png';
import feb21_3 from '../../assets/p2.png';
import feb21_4 from '../../assets/p3.png';
 import feb21_5 from '../../assets/p4.png';
 import feb21_6 from '../../assets/p5.png';
 import feb21_7 from '../../assets/p6.png';
 import feb21_8 from '../../assets/p7.png';
 import feb21_9 from '../../assets/p8.png';
 import feb21_10 from '../../assets/p9.png';
 import feb21_11 from '../../assets/p10.png';
 import feb21_12 from '../../assets/p11.png';

// Food Donation Feb 25 Images
import feb25_1 from '../../assets/fd1.png';
import feb25_2 from '../../assets/fd1.png';
import feb25_3 from '../../assets/fd2.png';
import feb25_4 from '../../assets/fd3.png';
import feb25_5 from '../../assets/fd4.png';
import feb25_6 from '../../assets/fd5.png';
import feb25_7 from '../../assets/fd6.png';
import feb25_8 from '../../assets/fd7.png';
import feb25_9 from '../../assets/fd8.png';
import feb25_10 from '../../assets/fd9.png';
import feb25_11 from '../../assets/fd10.png';
// import feb25_12 from '../../assets/fd11.png';


// Food Donation Nov 29 Images
import nov29_1 from '../../assets/l1.png';
import nov29_2 from '../../assets/l2.png';
import nov29_3 from '../../assets/l3.png';
import nov29_4 from '../../assets/l4.png';
import nov29_5 from '../../assets/l5.png';
import nov29_6 from '../../assets/l6.png';
import nov29_7 from '../../assets/l7.png';
import nov29_8 from '../../assets/l8.png';
import nov29_9 from '../../assets/l9.png';
import nov29_10 from '../../assets/l10.png';
import nov29_11 from '../../assets/l11.png';
import nov29_12 from '../../assets/l12.png';
import nov29_13 from '../../assets/l13.png';
import nov29_14 from '../../assets/l14.png';

interface GalleryImage {
	id: number;
	src: string;
	alt: string;
}

const Year2021: React.FC = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
	const [zoom, setZoom] = useState<number>(1);
	const [currentGallery, setCurrentGallery] = useState<GalleryImage[]>([]);

	// Foundation Inception Gallery
	const inceptionGallery: GalleryImage[] = [
		{ id: 1, src: inception1, alt: 'Foundation inception ceremony' },
		{ id: 2, src: inception2, alt: 'Team members at inauguration' },
		{ id: 3, src: inception3, alt: 'Certificate presentation' },
		{ id: 4, src: inception4, alt: 'Foundation banner display' },
		{ id: 5, src: inception5, alt: 'Group photo with officials' },
		{ id: 6, src: inception6, alt: 'Swami Vivekananda shrine' },
		{ id: 7, src: inception7, alt: 'Volunteers at event' },
		{ id: 8, src: inception8, alt: 'Foundation founders portrait' },
		{ id: 9, src: inception9, alt: 'Inauguration speech' },
		{ id: 10, src: inception10, alt: 'Ceremonial lamp lighting' },
		{ id: 11, src: inception11, alt: 'Group discussion' },
		{ id: 12, src: inception12, alt: 'Event attendees' },
		{ id: 13, src: inception13, alt: 'Foundation logo unveiling' },
		{ id: 14, src: inception14, alt: 'Volunteer activities' },
		{ id: 15, src: inception15, alt: 'Closing ceremony' },
	];

	// Food Donation Feb 7 Gallery
	const feb7Gallery: GalleryImage[] = [
		{ id: 1, src: feb7_1, alt: 'Children at Nirmala Sishu Bhavan' },
		{ id: 2, src: feb7_2, alt: 'Food distribution to children' },
		{ id: 3, src: feb7_3, alt: 'Group photo with volunteers' },
	];

	// Food Donation Feb 21 Gallery
	const feb21Gallery: GalleryImage[] = [
		{ id: 1, src: feb21_1, alt: 'Food distribution ceremony' },
		{ id: 2, src: feb21_2, alt: 'Volunteers with recipients' },
		{ id: 3, src: feb21_3, alt: 'Foundation founders portrait' },
		{ id: 4, src: feb21_4, alt: 'Serving meals to elderly' },
		{ id: 5, src: feb21_5, alt: 'Community gathering' },
		{ id: 6, src: feb21_6, alt: 'Meal distribution' },
		{ id: 7, src: feb21_7, alt: 'Volunteers in action' },
		{ id: 8, src: feb21_8, alt: 'Happy recipients' },
		{ id: 9, src: feb21_9, alt: 'Group interaction' },
		{ id: 10, src: feb21_10, alt: 'Food distribution ceremony' },
		{ id: 11, src: feb21_11, alt: 'Volunteers with recipients' },
		{ id: 12, src: feb21_12, alt: 'Foundation founders portrait' },
	];

	// Food Donation Feb 25 Gallery
	const feb25Gallery: GalleryImage[] = [
		{ id: 1, src: feb25_1, alt: 'Tanmayi Old Age Home gathering' },
		{ id: 2, src: feb25_2, alt: 'Distribution ceremony' },
		{ id: 3, src: feb25_3, alt: 'Volunteers with residents' },
		{ id: 4, src: feb25_4, alt: 'Food service activity' },
		{ id: 5, src: feb25_5, alt: 'Care and support' },
		{ id: 6, src: feb25_6, alt: 'Group interaction' },
		{ id: 7, src: feb25_7, alt: 'Meal distribution' },
		{ id: 8, src: feb25_8, alt: 'Volunteers in action' },
		{ id: 9, src: feb25_9, alt: 'Happy residents' },
		{ id: 10, src: feb25_10, alt: 'Community gathering' },
		{ id: 11, src: feb25_11, alt: 'Serving meals to elderly' },
		
	];

	// Food Donation Nov 29 Gallery
	const nov29Gallery: GalleryImage[] = [
		{ id: 1, src: nov29_1, alt: 'Food preparation' },
		{ id: 2, src: nov29_2, alt: 'Cooking process' },
		{ id: 3, src: nov29_3, alt: 'Team preparing meals' },
		{ id: 4, src: nov29_4, alt: 'Foundation banner' },
		{ id: 5, src: nov29_5, alt: 'Prepared food' },
		{ id: 6, src: nov29_6, alt: 'Mission location' },
		{ id: 7, src: nov29_7, alt: 'Volunteers at mission' },
		{ id: 8, src: nov29_8, alt: 'Distributing food' },
		{ id: 9, src: nov29_9, alt: 'Serving meals' },
		{ id: 10, src: nov29_10, alt: 'Group photo' },
		{ id: 11, src: nov29_11, alt: 'Happy recipients' },
		{ id: 12, src: nov29_12, alt: 'Community gathering' },
		{ id: 13, src: nov29_13, alt: 'Volunteers in action' },
		{ id: 14, src: nov29_14, alt: 'Closing ceremony' },
	];

	const openLightbox = (index: number, gallery: GalleryImage[]) => {
		setCurrentGallery(gallery);
		setSelectedImageIndex(index);
		setZoom(1);
	};

	const closeLightbox = () => {
		setSelectedImageIndex(null);
		setZoom(1);
	};

	const goToPrevious = () => {
		if (selectedImageIndex !== null) {
			setSelectedImageIndex((selectedImageIndex - 1 + currentGallery.length) % currentGallery.length);
			setZoom(1);
		}
	};

	const goToNext = () => {
		if (selectedImageIndex !== null) {
			setSelectedImageIndex((selectedImageIndex + 1) % currentGallery.length);
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
			link.href = currentGallery[selectedImageIndex].src;
			link.download = `viraga-foundation-${currentGallery[selectedImageIndex].id}.jpg`;
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
				{/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-pink-800/30 to-orange-700/40"></div> */}
				<div className="relative z-10 text-center">
					<h1 className="text-white text-5xl sm:text-7xl font-bold tracking-wider drop-shadow-2xl mb-4 animate-fade-in">
						2020-2021
					</h1>
					<div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Main Content Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Foundation Inception Section */}
				<section className="mb-24">
					<div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-4 md:p-8 mb-4 transform hover:scale-[1.01] transition-transform duration-300">
						<h2 className="text-red-700 text-xl md:text-3xl font-bold mb-4 border-l-8 border-red-600 pl-6">
							Foundation Inception, November 25, 2020
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
						{/* Large Image */}
						<div className="group cursor-pointer" onClick={() => openLightbox(0, inceptionGallery)}>
							<div className="relative overflow-hidden rounded-2xl shadow-2xl">
								<img
									src={inception1}
									alt="Foundation inception ceremony"
									className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
									<div className="p-6 text-white">
										<p className="text-lg font-semibold">Click to view full image</p>
									</div>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Foundation Inception</h3>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									Viraga Foundation was established on{' '}
									<span className="font-bold text-gray-900">November 25, 2020</span>, inspired by the
									teachings of <span className="font-bold text-orange-600">Swami Vivekananda</span>. A
									group of dedicated individuals came together with a vision to serve humanity with
									compassion.
								</p>
								<p>
									The foundation was inaugurated by{' '}
									<span className="font-bold text-orange-600">Swami Hridananadji Maharaj</span>,
									Secretary of{' '}
									<span className="font-bold text-orange-600">Ramakrishna Mission, Vijayawada</span>,
									marking the beginning of our mission to uplift and support those in need.
								</p>
							</div>
						</div>
					</div>

					{/* Image Gallery */}
					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">Inception Gallery</h3>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{inceptionGallery.map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white aspect-square"
								onClick={() => openLightbox(index, inceptionGallery)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full sm:h-72 h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<ZoomIn size={32} className="text-white" />
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Food Donation Feb 7, 2021 */}
				<section className="mb-24">
					<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-4 md:p-8 mb-8">
						<h2 className="text-red-700 text-3xl md:text-4xl font-bold mb-4 border-l-8 border-red-600 pl-6">
							Food Donation 07-02-2021
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
						{/* Large Image */}
						<div className="group cursor-pointer" onClick={() => openLightbox(0, feb7Gallery)}>
							<div className="relative overflow-hidden rounded-2xl shadow-2xl">
								<img
									src={feb7_1}
									alt="Food distribution at Nirmala Sishu Bhavan"
									className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
									<div className="p-6 text-white">
										<p className="text-lg font-semibold">Click to view full image</p>
									</div>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Food Distribution at Nirmala Sishu Bhavan
							</h3>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									On <span className="font-bold text-gray-900">February 7, 2021</span>, Viraga
									Foundation, with the support of{' '}
									<span className="font-bold text-orange-600">Ch. Apparao</span>, distributed food to{' '}
									<span className="font-bold text-gray-900">
										50 physically and mentally challenged children under 10 years
									</span>{' '}
									at{' '}
									<span className="font-bold text-orange-600">
										Nirmala Sishu Bhavan, Krishnalanka
									</span>
									.
								</p>
								<p>
									This initiative aimed to provide nourishment and spread kindness to those in need.
								</p>
							</div>
						</div>
					</div>

					{/* Gallery */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{feb7Gallery.slice(1).map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white"
								onClick={() => openLightbox(index + 1, feb7Gallery)}
							>
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<ZoomIn size={40} className="text-white" />
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Food Donation Feb 21, 2021 */}
				<section className="mb-24">
					<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-4 md:p-8 mb-8">
						<h2 className="text-red-700 text-3xl md:text-4xl font-bold mb-4 border-l-8 border-red-600 pl-6">
							Food Donation 21-02-2021
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
						{/* Large Image */}
						<div className="group cursor-pointer" onClick={() => openLightbox(0, feb21Gallery)}>
							<div className="relative overflow-hidden rounded-2xl shadow-2xl">
								<img
									src={feb21_1}
									alt="Food distribution ceremony"
									className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
									<div className="p-6 text-white">
										<p className="text-lg font-semibold">Click to view full image</p>
									</div>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Food Distribution at Nirmala Sishu Bhavan
							</h3>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									On <span className="font-bold text-gray-900">February 7, 2021</span>, Viraga
									Foundation, with the support of{' '}
									<span className="font-bold text-orange-600">Ch. Apparao</span>, distributed food to{' '}
									<span className="font-bold text-gray-900">
										50 physically and mentally challenged children under 10 years
									</span>{' '}
									at{' '}
									<span className="font-bold text-orange-600">
										Nirmala Sishu Bhavan, Krishnalanka
									</span>
									.
								</p>
								<p>
									This initiative aimed to provide nourishment and spread kindness to those in need.
								</p>
							</div>
						</div>
					</div>

					{/* Gallery */}
					<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{feb21Gallery.slice(1).map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white aspect-square"
								onClick={() => openLightbox(index + 1, feb21Gallery)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full sm:h-72 h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<ZoomIn size={32} className="text-white" />
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Food Donation Feb 25, 2021 */}
				<section className="mb-24">
					<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-4 md:p-8 mb-8">
						<h2 className="text-red-700 text-3xl md:text-4xl font-bold mb-4 border-l-8 border-red-600 pl-6">
							Food Donation 25-02-2021
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-12">
						{/* Large Image */}
						<div className="group cursor-pointer" onClick={() => openLightbox(0, feb25Gallery)}>
							<div className="relative overflow-hidden rounded-2xl shadow-2xl">
								<img
									src={feb25_1}
									alt="Food donation at Tanmayi Old Age Home"
									className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
									<div className="p-6 text-white">
										<p className="text-lg font-semibold">Click to view full image</p>
									</div>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Food Donation at Tanmayi Old Age Home
							</h3>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									On <span className="font-bold text-gray-900">February 25, 2021</span>, Viraga
									Foundation, with the support of{' '}
									<span className="font-bold text-orange-600">B. Ramesh Kumar & B. Madhavi</span>,
									organized a <span className="font-bold text-gray-900">food donation program</span>{' '}
									at{' '}
									<span className="font-bold text-orange-600">Tanmayi Old Age Home, Vijayawada</span>.
								</p>
								<p>
									Nutritious <span className="font-bold text-gray-900">breakfast and lunch</span> were
									provided, offering care and support to the elderly residents.
								</p>
							</div>
						</div>
					</div>

					{/* Gallery */}
					<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{feb25Gallery.slice(1).map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white aspect-square"
								onClick={() => openLightbox(index + 1, feb25Gallery)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-40 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<ZoomIn size={32} className="text-white" />
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Food Donation Nov 29, 2020 */}
				<section className="mb-24">
					<div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl p-4 md:p-8 mb-8">
						<h2 className="text-red-700 text-3xl md:text-4xl font-bold mb-4 border-l-8 border-red-600 pl-6">
							Food Donation 29-11-2020
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-12 items-center mb-12">
						{/* YouTube Video Section */}
						<div className="group cursor-pointer md:col-span-2">
							<div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video ">
								<iframe
									// width="800"
									// height="400"
									src="https://www.youtube.com/embed/OXNX5cS9EaU"
									title="viraga"
									frameBorder={0}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className='md:w-[800px] md:h-[400px]'
								/>
							</div>
						</div>

						{/* Text Content */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Food Donation at Tanmayi Old Age Home
							</h3>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									On <span className="font-bold text-gray-900">February 25, 2021</span>, Viraga
									Foundation, with the support of{' '}
									<span className="font-bold text-orange-600">B. Ramesh Kumar & B. Madhavi</span>,
									organized a <span className="font-bold text-gray-900">food donation program</span>{' '}
									at{' '}
									<span className="font-bold text-orange-600">Tanmayi Old Age Home, Vijayawada</span>.
								</p>
								<p>
									Nutritious <span className="font-bold text-gray-900">breakfast and lunch</span> were
									provided, offering care and support to the elderly residents.
								</p>
							</div>
						</div>
					</div>

					{/* Gallery */}
					<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{nov29Gallery.map((image, index) => (
							<div
								key={image.id}
								className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white aspect-square"
								onClick={() => openLightbox(index, nov29Gallery)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-40 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
									<ZoomIn size={32} className="text-white" />
								</div>
							</div>
						))}
					</div>
				</section>
			</div>

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
						{selectedImageIndex + 1} / {currentGallery.length}
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
						className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black/70 rounded-full p-3 z-20 hover:bg-orange-500 hover:scale-110"
						onClick={(e) => {
							e.stopPropagation();
							goToPrevious();
						}}
					>
						<ChevronLeft size={40} />
					</button>

					{/* Next Button */}
					<button
						className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black/70 rounded-full p-3 z-20 hover:bg-orange-500 hover:scale-110"
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
							src={currentGallery[selectedImageIndex].src}
							alt={currentGallery[selectedImageIndex].alt}
							className="max-w-full max-h-full object-contain transition-transform duration-300"
							style={{ transform: `scale(${zoom})` }}
						/>
					</div>

					{/* Image Caption */}
					<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/70 px-6 py-2 rounded-full max-w-md z-20">
						{currentGallery[selectedImageIndex].alt}
					</div>
				</div>
			)}
		</div>
	);
};

export default Year2021;


