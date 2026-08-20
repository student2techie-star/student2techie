import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Eager components (Critical for LCP/FCP)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';
import logo from './assets/logo.jpg';

// Lazy components (Below the fold)
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Programs = lazy(() => import('./components/Programs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Certificate = lazy(() => import('./components/Certificate'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Verify = lazy(() => import('./components/Verify'));
const CertificateVerifier = lazy(() => import('./components/Certificateverifier'));

function HomePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Student2Techie Academy",
      "url": "https://student2techie.in/",
      "logo": `https://student2techie.in${logo}`,
      "email": "student2techie@gmail.com",
      "telephone": "+91 93602 93815"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Student2Techie Academy",
      "url": "https://student2techie.in/"
    }
  ];

  return (
    <>
      <SEO 
        title="Tech Internships & Training for Students | Student2Techie"
        description="Student2Techie offers tech internships and online training for students in web development, MERN, Python, UI/UX and more. Build real projects and career-ready skills."
        url="/"
        schemaMarkup={schema}
      />
      <Hero />
      <Suspense fallback={null}>
        <Features />
        <HowItWorks />
        <Programs />
        <Testimonials />
        <Certificate />
        <CertificateVerifier/>
        <Contact />
      </Suspense>
    </>
  );
}

// ✅ Separate component so it can use useLocation inside BrowserRouter
function AppContent() {
  const location = useLocation();

  useEffect(() => {
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

    const observedSet = new WeakSet();

    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      elements.forEach((el) => {
        if (!observedSet.has(el)) {
          el.classList.remove('visible'); // reset so they can re-animate
          observer.observe(el);
          observedSet.add(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.getElementById('root') || document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]); // ✅ re-runs when route changes

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
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