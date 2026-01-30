import EducationProgrammeSection from '@/components/home/EducationProgrammeSection';
import HeroSection from '@/components/home/HeroSection'
import InfoCards from '@/components/home/InfoCards';
import OurImpact from '@/components/home/OurImpact';
//import ViragaFoundation from '@/components/home/ViragaFoundation';
import SubscribeModal from '@/components/ui/SubscribeModal'
import { useState } from "react";
// import Services from '@/components/home/Services'
// import ServicesMobile from '@/components/home/ServicesMobile'
//import Clients from '@/components/home/Clients'
//import ProcessSection from '@/components/home/ProcessSection'
// import FAQSection from '@/components/home/FAQSection'
// import TestimonialScroll from '@/components/home/Testimonials'
// import ProjectTimeline from '@/components/home/ProjectTimeline'
//import UsVsOthers from '@/components/home/UsVsOthers'
// import LetsWork from '@/components/home/LetsWork'
const Home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className=" min-h-screen">
       {showModal && (
        <SubscribeModal onClose={() => setShowModal(false)} />
      )}
     
      <HeroSection />
      <OurImpact/>
      <InfoCards/>
      <EducationProgrammeSection/>
      {/* <ViragaFoundation/> */}
     
    </div>
  )
}

export default Home