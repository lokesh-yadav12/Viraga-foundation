import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 bg-white py-10 sm:py-12 lg:py-16">
				<div className="bg-white rounded-3xl shadow-2xl p-3 sm:p-6 lg:p-10 border border-purple-100">
					<h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
						About Us
					</h1>
					
					<div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
						<p>
							We are <span className="font-semibold text-purple-700">VIRAGA Foundation</span>, a non-governmental organization established on November 25, 2020, by dedicated individuals inspired by the timeless teachings of Swami Vivekananda. Our foundation was graciously inaugurated by Swami Hridananadji Maharaj, Secretary of Ramakrishna Mission, Vijayawada. Guided by Dharma, driven by Karma, and serving with selflessness, we believe in Swami Vivekananda's profound words—<span className="italic text-purple-600">"They alone live who live for others."</span>
						</p>

						{/* <p>
							Just as Surya Bhagavan's seven horses lead the world from darkness to light, VIRAGA Foundation brings hope and transformation through seven key initiatives. We provide nutritious meals to the underprivileged through Narayana Seva, offer scholarships and mentorship to deserving students, promote health awareness and medical support, equip individuals with skill development and career guidance for self-reliance, spread the teachings of great leaders like Swami Vivekananda, provide disaster relief and humanitarian aid in times of crisis, and offer shelter, education, and holistic care to homeless and orphaned children.
						</p> */}

						<p>
							VIRAGA Foundation is a movement of compassionate hearts working together to create positive change. Through our seven transformative initiatives, we work tirelessly to build a society rooted in kindness, dignity, and selfless service. Together, we can light up lives, because <span className="font-semibold text-purple-700">service to humanity is service to God.</span>
						</p>
					</div>

					<Link
						to="/about"
						className="mt-8 inline-block text-purple-700 font-bold hover:underline"
					>
						Learn more about our mission &rarr;
					</Link>

					<div className="mt-12 flex items-center justify-center gap-2">
						<div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
						<div className="w-2 h-2 bg-orange-500 rounded-full" />
						<div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;