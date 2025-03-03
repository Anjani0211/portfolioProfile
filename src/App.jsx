import { BrowserRouter, Route, Routes } from "react-router-dom";
import EducationalSection from "./components/EducationalSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProfessionalExperienceSection from "./components/ProfessionalExperienceSection";
import "./index.css";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="max-w-4xl mx-auto chakra-petch-medium p-8 flex flex-col gap-22">
            <div className="flex flex-col gap-16 md:gap-4">
              <Navbar />
              <HeroSection />
            </div>
            <ProfessionalExperienceSection />
            <EducationalSection />
            <Footer />
          </div>
        } />
        <Route path="/contact" element={<div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:gap-1"><Navbar /><Contact /><Footer /></div>} />
        <Route path="/blogs" element={<div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:gap-1"><Navbar /><Blogs /><Footer /></div>} />
        <Route path="/projects" element={<div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:gap-1"><Navbar /><Projects /><Footer /></div>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
