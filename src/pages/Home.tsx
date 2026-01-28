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
      {/* <LetsWork /> */}
      {/* <div className="flex justify-center items-center py-16">
        <Clients />
        
      </div> */}
      {/* Show ServicesMobile on small screens, Services on md and above */}
      {/* <div className="md:hidden">
        <ServicesMobile />
      </div>
      <div className="hidden md:block">
        <Services />
      </div>
      <ProjectTimeline/> */}
      {/* <UsVsOthers/> */}
      {/* <TestimonialScroll />
      <FAQSection /> */}
      {/* <ProcessSection /> */}
    </div>
  )
}

export default Home