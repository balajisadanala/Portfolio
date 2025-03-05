import React, { useState, useEffect } from 'react';
import {
  About, Blog, Contacts, Education,
  Experience, Landing, Navbar, Projects, Skills
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';

function HomePage({ blogs }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined to ensure this code runs only in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
      };

      // Set initial state
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <BackToTop />
      {/* <ChangeTheme /> */}
      <Navbar />
      <Landing />

      <div className="pt-11" style={{ marginTop: isMobile ? '35rem' : '0' }}>
        <Experience />
      </div>

      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <Contacts />
    </>
  )
}



export default HomePage
