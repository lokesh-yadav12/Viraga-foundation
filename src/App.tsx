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
//import TeluguContent from './pages/TeluguContent';
import Announcement from './pages/Announcement';
import Extra from './pages/Activities/Extra';
import AnandamPage from './pages/Activities/AnandamPage';
import DisasterReliefGallery from './pages/Activities/DisasterReliefGallery';
import OrphanageGallery from './pages/Activities/OrphanageGallery';
import ScholarshipGallery from './pages/Activities/ScholarshipGallery';
import InaugurationGallery from './pages/Activities/anandam/InaugurationGallery';
import Nov2020Gallery from './pages/Activities/anandam/Nov2020Gallery';
import Feb7Gallery from './pages/Activities/anandam/Feb7Gallery';
import Feb21Gallery from './pages/Activities/anandam/Feb21Gallery';
import Feb25Gallery from './pages/Activities/anandam/Feb25Gallery';
import May2023Gallery from './pages/Activities/anandam/May2023Gallery';
import Mar2023Gallery from './pages/Activities/anandam/Mar2023Gallery';
import Mar2024food from './pages/Activities/anandam/March2024food';
import August2024 from './pages/Activities/anandam/August2024';
import Skilldevelopment from './pages/Activities/Skilldevelopment';
import Healthawareness from './pages/Activities/Healthawareness';

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
			<ScrollToTop />
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
					<Route path='volunteers' element={<Volunteer />} />
					<Route path="contactPage" element={<ContactPage />} />
					<Route path="donation" element={<DonationsPage />} />
					<Route path="yearly-reports" element={<YearlyReportsPage />} />
					<Route path="activities/*" element={<ActivitiesPage />} />
					<Route path="/activities/2025-2026" element={<Year2025 />} />
					<Route path="/activities/closingceremony" element={<Year2024 />} />
					<Route path="/activities/guestlecture" element={<Year2023 />} />
					<Route path="/activities/prizedistribution" element={<Year2022 />} />
					<Route path="/activities/other-activity" element={<Year2021 />} />
					<Route path='/activities/registration' element={<Extra />} />
					<Route path='/activities/anandam' element={<AnandamPage />} />
					<Route path='/activities/disaster-relief' element={<DisasterReliefGallery />} />
					<Route path='/activities/orphanage' element={<OrphanageGallery />} />
					<Route path='/activities/scholarship' element={<ScholarshipGallery />} />
					<Route path='/activities/skilldevelopment' element={<Skilldevelopment />} />
					<Route path='/activities/healthawareness' element={<Healthawareness />} />
					<Route path='/activities/anandam/inauguration' element={<InaugurationGallery />} />
					<Route path='/activities/anandam/29-11-2020' element={<Nov2020Gallery />} />
					<Route path='/activities/anandam/7-2-2021' element={<Feb7Gallery />} />
					<Route path='/activities/anandam/21-02-2021' element={<Feb21Gallery />} />
					<Route path='/activities/anandam/25-02-2021' element={<Feb25Gallery />} />
					<Route path='/activities/anandam/2-5-2023' element={<May2023Gallery />} />
					<Route path='/activities/anandam/12-3-2023' element={<Mar2023Gallery />} />
					<Route path='/activities/anandam/3-3-2024' element={<Mar2024food/>} />
					<Route path='/activities/anandam/31-8-2024' element={<August2024 />} />

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
