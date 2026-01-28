import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ActivitiesPage = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const activities = [
		{
			year: '2024-2025',
			image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
			link: '/activities/2024-2025'
		},
		{
			year: '2023-2024',
			image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
			link: '/activities/2023-2024'
		},
		{
			year: '2022-2023',
			image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
			link: '/activities/2022-2023'
		},
		{
			year: '2020-2021',
			image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
			link: '/activities/2020-2021'
		}
	];

	const handleActivityClick = (link: string): void => {

		// Navigate to activity detail page
		window.location.href = link;
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div
				className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&h=600&fit=crop")',
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-pink-200/40 via-purple-200/40 to-pink-300/40"></div>
				<h1
					className={`relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider transition-all duration-1000 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					ACTIVITIES
				</h1>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				{/* First Row - 3 Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
					{activities.slice(0, 3).map((activity, index) => (
						<div
							key={activity.year}
							className={`transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: `${(index + 1) * 150}ms` }}
						>
							<div
								onClick={() => handleActivityClick(activity.link)}
								className="group cursor-pointer"
							>
								{/* Image Card */}
								<div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-gray-300 hover:border-purple-400 transition-all duration-300 bg-white">
									<div className="aspect-[4/3] overflow-hidden">
										<img
											src={activity.image}
											alt={`Activities ${activity.year}`}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									{/* Overlay on Hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
										<div className="flex items-center gap-2 text-white font-semibold text-lg">
											<span>View Activities</span>
											<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</div>

								{/* Year Label */}
								<div className="mt-4 text-center">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 underline">
										{activity.year}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Divider Line */}
				<div className="border-t-2 border-gray-300 mb-6 sm:mb-8 lg:mb-10"></div>

				{/* Second Row - 1 Card (Left Aligned) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
					{activities.slice(3, 4).map((activity, index) => (
						<div
							key={activity.year}
							className={`transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: `${(index + 4) * 150}ms` }}
						>
							<div
								onClick={() => handleActivityClick(activity.link)}
								className="group cursor-pointer"
							>
								{/* Image Card */}
								<div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-gray-300 hover:border-purple-400 transition-all duration-300 bg-white">
									<div className="aspect-[4/3] overflow-hidden">
										<img
											src={activity.image}
											alt={`Activities ${activity.year}`}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									{/* Overlay on Hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
										<div className="flex items-center gap-2 text-white font-semibold text-lg">
											<span>View Activities</span>
											<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</div>

								{/* Year Label */}
								<div className="mt-4 text-center">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 underline">
										{activity.year}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Info Text */}
				<div
					className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-700 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					<div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 border border-purple-200">
						<p className="text-gray-700 text-sm sm:text-base lg:text-lg">
							Click on any year to view detailed activities and photos from that period.
							<br />
							Experience the journey of compassion and service through our documented efforts.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivitiesPage;