import React, { useEffect } from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/FooterSection'
function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <>
    <div className="min-h-screen">
    
    {/* //theme toggle */}
    <ThemeToggle/>

    {/* //background effects */}
    <StarBackground/>


    {/* //navbar  */}
    <Navbar/>

    {/* //Main contenet */}
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    {/* //footer */}
    </div>
    </>
  )
}

export default Home