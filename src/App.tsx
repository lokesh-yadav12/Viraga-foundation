import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
import AboutUs from './pages/About';
import 'remixicon/fonts/remixicon.css';
import ScrollToTop from './components/layout/ScrollToTop';
import WhoWeAre from './pages/WhoWeAre';
import Whatwedo from './pages/Whatwedo';
import Wherewework from './pages/Wherewework';
import Objectives from './pages/Objectives';
import AboutLogo from './pages/AboutLogo';
import Administration from './components/home/Administration';
import ContactPage from './pages/ContactPage';
import DonationsPage from './pages/DonationsPage';
import YearlyReportsPage from './pages/YearlyReportsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import Year2024 from './pages/Activities/YearTfour';
import Year2023 from './pages/Activities/YearTthree';
import Year2022 from './pages/Activities/YearTtwo';
import Year2025 from './pages/Activities/YearTfive';
import Year2021 from './pages/Activities/YearTone';
import VibrantFuturesPage from './components/home/VibrantFuturesPage';
import Volunteer from './pages/Volunteer';
import TeluguContent from './pages/TeluguContent';
import Announcement from './pages/Announcement';


// 🧭 Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));

function App() {

	return (
		<Suspense
			// fallback={
			// 	<div className="flex items-center justify-center min-h-screen bg-[#690B22]">
			// 		<div className="scale-[2]">
			// 			<DPSLoading mode="suspense" size="md" />
			// 		</div>
			// 	</div>
			// }
		>
			<ScrollToTop/>
			<Routes>
				{/* 🏠 Main Layout Wrapper */}
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					{/* ✅ Main Pages */}
					<Route index element={<Home />} />
					{/* <Route path="portfolio" element={<Portfolio />} /> */}
					{/* <Route path="contact" element={<ContactSection />} /> */}
					<Route path="about" element={<AboutUs />} />
					<Route path="who-we-are" element={<WhoWeAre />} />
					<Route path="what-we-do" element={<Whatwedo />} />
					<Route path="where-we-work" element={<Wherewework />} />
					<Route path="objectives" element={<Objectives />} />
					<Route path="about-logo" element={<AboutLogo />} />
					<Route path="administration" element={<Administration />} />
					<Route path='volunteers' element={<Volunteer/>} />
					<Route path="contactPage" element={<ContactPage />} />
					<Route path="donation" element={<DonationsPage />} />
					<Route path="yearly-reports" element={<YearlyReportsPage />} />
					<Route path="activities/*" element={<ActivitiesPage />} />
					<Route path="/activities/2025-2026" element={<Year2025 />} />
					<Route path="/activities/2024-2025" element={<Year2024 />} />
					<Route path="/activities/2023-2024" element={<Year2023 />} />
					<Route path="/activities/2022-2023" element={<Year2022 />} />
					<Route path="/activities/2020-2021" element={<Year2021 />} />
					 <Route path='/vibrantfuture' element={<VibrantFuturesPage />} />
					 <Route path='/announcement' element={<Announcement />} />

					{/* 🚫 Catch-all for invalid routes */}
					{/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
				</Route>

				{/* 🧱 Standalone 404 page */}
				{/* <Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/> */}
			</Routes>
		</Suspense>
	);
}

export default App;
