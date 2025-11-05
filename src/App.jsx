import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import SkillsProjects from './components/SkillsProjects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = 'Hamid Ali | Software Engineer • Project Manager • Data Analyst (Karachi)';
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', 'Portfolio of Hamid Ali — Software Engineer, Project Manager, and Data Analyst based in Karachi, Pakistan. View work, experience, education, skills, and contact.');
    document.head.appendChild(metaDesc);

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Hamid Ali Portfolio, Software Engineer Karachi, Project Manager, Data Analyst, Pakistan IT, TechNova Solutions');
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#05070d] font-sans">
      <Hero />
      <Profile />
      <SkillsProjects />
      <Contact />
    </div>
  );
}

export default App;
