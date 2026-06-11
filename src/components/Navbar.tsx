/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '.01 Space', target: 'hero' },
    { label: '.02 Simulator', target: 'simulator' },
    { label: '.03 Value', target: 'value-prop' },
    { label: '.04 Press', target: 'testimonials' },
    { label: '.05 Commission', target: 'contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-ink/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Brushmark Mascot */}
        <button
          id="nav-logo"
          onClick={() => onScrollTo('hero')}
          className="flex items-center space-x-3 group cursor-pointer text-left"
        >
          {/* SVG Brushmark mascot from page 6 & 10 */}
          <div className="relative w-9 h-9 rounded-full bg-porcelain flex items-center justify-center transition-transform duration-500 group-hover:scale-110 overflow-hidden ring-1 ring-white/10 shadow-md">
            {/* Paint drip background */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight to-twilight opacity-10"></div>
            <svg
              className="w-5 h-5 text-ink relative z-10 transition-transform duration-500 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 11.5V14a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-2.5" />
              <path d="M12 2v10" strokeWidth="2.5" />
              <path d="M12 12c.5 0 2-1 2-2.5V6c0-1.5-1.5-2-2-2s-2 .5-2 2v3.5c0 1.5 1.5 2.5 2 2.5z" fill="currentColor" />
              {/* Dripping dots visual elements */}
              <circle cx="8" cy="19" r="1" fill="currentColor" />
              <circle cx="12" cy="21" r="1.5" fill="currentColor" />
              <circle cx="16" cy="18.5" r="1.2" fill="currentColor" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-lg tracking-[0.25em] font-bold text-white group-hover:text-rose transition-colors duration-300">
              INSOMNIA
            </span>
            <span className="text-[9px] font-sans tracking-[0.4em] uppercase text-white/50 -mt-1 group-hover:text-porcelain transition-colors duration-300">
              MURALS
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              onClick={() => onScrollTo(item.target)}
              className="text-sm font-sans tracking-widest text-white/70 hover:text-rose transition-colors duration-300 cursor-pointer text-left relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Spark Star Divider */}
          <span className="text-twilight font-sans font-bold">✦</span>

          {/* Action Button */}
          <button
            id="nav-action-cta"
            onClick={() => onScrollTo('contact')}
            className="flex items-center space-x-2 text-xs font-sans tracking-widest uppercase bg-rose hover:bg-porcelain text-ink hover:text-midnight transition-colors duration-300 px-4 py-2 rounded-full cursor-pointer shadow-md font-bold"
          >
            <span>Commission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-rose transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-ink border-b border-white/5 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  id={`mobile-nav-link-${item.target}`}
                  onClick={() => {
                    setIsOpen(false);
                    onScrollTo(item.target);
                  }}
                  className="text-left py-2 text-base font-sans tracking-widest text-white/80 hover:text-rose transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  id="mobile-nav-action-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onScrollTo('contact');
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-sm font-sans tracking-widest uppercase bg-rose text-ink py-3 rounded-full cursor-pointer shadow-md font-bold"
                >
                  <span>Book Commission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
