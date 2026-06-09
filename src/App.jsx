import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Verify from './components/Verify';
import CertificateVerifier from './components/Certificateverifier';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Programs />
      <Testimonials />
      <Certificate />
      <CertificateVerifier/>
      <Contact />
    </>
  );
}

// ✅ Separate component so it can use useLocation inside BrowserRouter
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // ✅ Re-runs every time the route changes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // ✅ Small delay lets the new page's DOM render first
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      elements.forEach((el) => {
        el.classList.remove('visible'); // reset so they can re-animate
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]); // ✅ re-runs when route changes

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}