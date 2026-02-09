
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  Menu, 
  X, 
  PhoneCall, 
  BookOpen, 
  Info, 
  ShieldCheck, 
  AlertTriangle,
  Stethoscope,
  ChevronLeft,
  Mail,
  Cookie
} from 'lucide-react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CookieBanner = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:bottom-24 md:left-auto md:right-8 md:max-w-md bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 z-[200] animate-in slide-in-from-bottom-10">
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0">
          <Cookie className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900">Cookie Notice</h4>
          <p className="text-sm text-slate-600">
            We use cookies to improve your experience and for site analytics. By using HealPath AI, you agree to our <Link to="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
          </p>
          <button 
            onClick={accept}
            className="w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Ensuring it is a reliable Link */}
          <Link to="/" className="flex items-center gap-2 group relative z-[70]">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">HealPath <span className="text-blue-600">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Health Blog</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <Link to="/disclaimer" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm">Disclaimer</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Health Blog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Contact Us</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Privacy Policy</Link>
          <Link to="/disclaimer" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 text-center bg-blue-600 text-white rounded-lg font-medium">Medical Disclaimer</Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-32 md:pb-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <Stethoscope className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold text-white">HealPath AI</span>
        </div>
        <p className="text-slate-400 max-w-sm mb-6">
          Advanced health education powered by Gemini 3. Promoting health literacy and informed patient care worldwide.
        </p>
        <div className="flex gap-4">
          <Link to="/contact" className="bg-slate-800 p-2 rounded-full cursor-pointer hover:bg-slate-700">
            <Mail className="w-5 h-5 text-blue-400" />
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/blog" className="hover:text-blue-400">Health Blog</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Support & Legal</h4>
        <ul className="space-y-2">
          <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          <li><Link to="/disclaimer" className="hover:text-blue-400">Medical Disclaimer</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
      <p>© 2026 HealPath AI. All rights reserved. Professional medical education assistant.</p>
    </div>
  </footer>
);

const EmergencyBanner = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-3 px-4 z-[150] shadow-2xl flex items-center justify-center gap-4 md:gap-8">
    <div className="flex items-center gap-2">
      <AlertTriangle className="w-5 h-5 animate-pulse" />
      <span className="font-bold text-xs md:text-sm">EMERGENCY: Call 911 or local emergency services if you are in immediate danger.</span>
    </div>
    <a href="tel:911" className="hidden md:flex items-center gap-2 bg-white text-red-600 px-4 py-1 rounded-full font-bold text-xs hover:bg-slate-100 transition-colors">
      <PhoneCall className="w-3 h-3" />
      Emergency Call
    </a>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
        <EmergencyBanner />
        <CookieBanner />
      </div>
    </HashRouter>
  );
};

export default App;
