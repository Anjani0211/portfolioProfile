

import EducationalSection from './components/EducationalSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProfessionalExperienceSection from './components/ProfessionalExperienceSection'
import './index.css'
const App = () => {
  return (

    // bg-slate-900 text-white min-h-dvh

    <div className='max-w-4xl mx-auto chakra-petch-medium p-8 flex flex-col gap-22'>
     <div className='flex flex-col gap-16 md:gap-4'>
     <Navbar />
     <HeroSection />
     </div>
      <ProfessionalExperienceSection />
      <EducationalSection />
      <Footer />
    </div>
  )
}

export default App
