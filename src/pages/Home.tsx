import EducationProgrammeSection from '@/components/home/EducationProgrammeSection';
import HeroSection from '@/components/home/HeroSection'
import InfoCards from '@/components/home/InfoCards';
import OurImpact from '@/components/home/OurImpact';
import SubscribeModal from '@/components/ui/SubscribeModal'
import { useState,useEffect } from "react";
import AllInfo from '@/components/home/AllInfo';
import DonationCTA from '@/components/home/DonationCTA';
import ContactCTA from '@/components/home/ContactCTA';
import ImageGallery from '@/components/home/ImageGallery';
import About from '@/components/home/About';
const Home = () => {
//   const [showModal, setShowModal] = useState(true);
	const [showSubscribeModal, setShowSubscribeModal] = useState(false);

	useEffect(() => {
		// Check if user has already subscribed (using localStorage)
		const hasSubscribed = localStorage.getItem('hasSubscribed');
		
		if (!hasSubscribed) {
			// Show modal after a small delay for smooth entrance
			const timer = setTimeout(() => {
				setShowSubscribeModal(true);
			}, 1500); // 1.5 second delay after page load
			
			return () => clearTimeout(timer);
		}
	}, []);

	const handleCloseModal = () => {
		setShowSubscribeModal(false);
		// Optionally, mark as subscribed so it doesn't show again
		// localStorage.setItem('hasSubscribed', 'true');
	};


  return (
    <div className=" min-h-screen">
      	

			{/* Subscribe Modal */}
			<SubscribeModal 
				isOpen={showSubscribeModal} 
				onClose={handleCloseModal} 
			/>
     
      <HeroSection />
	  <About/>
      <OurImpact/>
	  <AllInfo/>
	  <ImageGallery/>
      <InfoCards/>
	  <DonationCTA/>
      <EducationProgrammeSection/>
	  <ContactCTA/>
      {/* <ViragaFoundation/> */}
     
    </div>
  )
}

export default Home