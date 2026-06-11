/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Instagram, Twitter, Facebook, ExternalLink, Brush } from 'lucide-react';
import Navbar from './components/Navbar';
import CredibilityLogos from './components/CredibilityLogos';
import InteractiveVolumeVisualizer from './components/InteractiveVolumeVisualizer';
import Testimonials from './components/Testimonials';
import CommissionForm from './components/CommissionForm';
import DripDivider from './components/DripDivider';
import { VALUE_PROPS, CLIENT_SECTORS } from './data';

export default function App() {
  
  // Custom scroll controller for navigation clicks
  const scrollToSection = (id: string) => {
    let targetId = id;
    if (id === 'hero') targetId = 'home-hero';
    if (id === 'simulator') targetId = 'interactive-simulator-section';
    if (id === 'value-prop') targetId = 'atelier-foundation-section';
    if (id === 'testimonials') targetId = 'testimonials-section';
    if (id === 'contact') targetId = 'contact-section';

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-ink font-sans text-white/90 selection:bg-rose selection:text-ink relative overflow-hidden">
      
      {/* Floating Vertical Social Indicators - Left Margin (Screen 1 & 3 visual mockup) */}
      <div className="hidden xl:flex flex-col items-center space-y-6 fixed left-10 top-1/2 -translate-y-1/2 z-40 text-white/30 hover:text-white/70 transition-colors duration-300 select-none">
        <a href="#instagram" className="hover:text-rose transition-colors"><Instagram className="w-4 h-4" /></a>
        <a href="#twitter" className="hover:text-rose transition-colors"><Twitter className="w-4 h-4" /></a>
        <a href="#facebook" className="hover:text-rose transition-colors"><Facebook className="w-4 h-4" /></a>
        <div className="h-10 w-[1px] bg-white/20"></div>
        <span className="text-[9px] uppercase tracking-[0.4em] origin-top-left rotate-90 translate-x-[4px] font-sans">
          ATELIER INSOMNIA
        </span>
      </div>

      {/* Floating Scroll Down Indicator - Right Margin (Screen 1, 2, 3 visual mockup) */}
      <div className="hidden xl:flex flex-col items-center space-y-3 fixed right-10 top-1/2 -translate-y-1/2 z-40 text-rose/60 select-none">
        <span className="text-[8px] uppercase tracking-[0.4em] origin-top font-sans text-center">
          SCROLL
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-rose/80 to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 96, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-1.5 h-1.5 rounded-full bg-porcelain absolute left-1/2 -translate-x-1/2"
          />
        </div>
      </div>

      {/* Modern High-End Floating Navbar Header */}
      <Navbar onScrollTo={scrollToSection} />

      {/* SECTION 1: MASTER LANDING HERO (Screen 1 Visual representation) */}
      <div 
        id="home-hero"
        className="min-h-screen flex flex-col justify-between pt-32 pb-16 relative overflow-hidden border-b border-white/5"
      >
        {/* Immersive "Nocturne Gradient" Atmospheric Backdrop Canvas */}
        <div className="absolute inset-0 z-0">
          {/* Base brand colors blended together */}
          <div className="absolute inset-0 bg-ink"></div>
          {/* Top-Mid Ocean Midnight deep blue */}
          <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-midnight to-[#2A344C] opacity-80"></div>
          {/* Radial soft sunrise arc overlay: Midnight -> Twilight -> Rose -> Porcelain */}
          <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] h-[80%] rounded-full bg-gradient-to-tr from-midnight via-twilight to-rose opacity-40 blur-[130px]" />
          {/* Top subtle organic shade */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>

        {/* Hero Central Typography (Screen 1 & 13) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col items-center justify-center relative z-10 text-center select-none pt-12 md:pt-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Version Badge (Screen 1 guidelines) */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-[10px] font-sans tracking-[0.5em] text-porcelain uppercase font-bold bg-white/5 py-1 px-3 rounded-full border border-white/10 uppercase">
                BRAND GUIDELINE v1.0
              </span>
              <span className="text-rose text-xs">✦</span>
              <span className="text-[10px] font-sans tracking-[0.4em] text-white/50 uppercase">
                EST. 2026
              </span>
            </div>

            {/* Massive Brand Title Wordmark */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-[0.25em] font-bold text-white relative flex flex-wrap justify-center items-center gap-1 md:gap-4 select-text">
              <span>INS</span>
              {/* O replaced with custom paintbrush dapple mascot */}
              <span className="inline-flex w-12 h-12 md:w-24 md:h-24 rounded-full bg-porcelain text-ink items-center justify-center shadow-2xl relative overflow-hidden transform hover:rotate-12 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/40 to-transparent"></div>
                {/* Paintbrush inline icon */}
                <svg
                  className="w-8 h-8 md:w-14 md:h-14 stroke-current fill-none relative z-10 text-[#252C3E]"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 11.5V14a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-2.5" />
                  <path d="M12 2v10" strokeWidth="2.5" />
                  <path d="M12 12c.5 0 2-1 2-2.5V6c0-1.5-1.5-2-2-2s-2 .5-2 2v3.5c0 1.5 1.5 2.5 2 2.5z" fill="currentColor" />
                </svg>
              </span>
              <span>MNIA</span>
            </h1>

            {/* Signature Slogan (Screen 1, 5, 13) */}
            <p className="font-display text-xl sm:text-2xl md:text-3.5xl italic text-[#FFE0DB] tracking-wide mt-6 font-medium">
              &ldquo;Walls worth losing sleep over.&rdquo;
            </p>

            {/* Secondary subtitle line description */}
            <p className="text-white/60 text-xs sm:text-sm font-sans max-w-xl mx-auto tracking-widest uppercase leading-loose pt-4">
              Bespoke large-scale murals for discerning architectural spaces.
            </p>
          </motion.div>

          {/* Interactive Trigger Arrow to start experience */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => scrollToSection('simulator')}
            className="mt-14 p-4 rounded-full bg-white/5 hover:bg-[#FFE0DB] border border-white/10 hover:border-[#FFE0DB] hover:text-ink transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <ArrowDown className="w-5 h-5 text-rose group-hover:text-[#252C3E] animate-bounce" />
          </motion.button>
        </div>

        {/* Footer info line of screen 1 (Insomnia Murals . Bespoke Large-Scale Murals) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-[0.3em] font-sans font-bold uppercase space-y-2 md:space-y-0">
          <span>INSOMNIA MURALS</span>
          <div className="flex items-center space-x-2">
            <span className="text-rose">✦</span>
            <span>2026 EDITION</span>
            <span className="text-rose">✦</span>
          </div>
          <span>BESPOKE LARGE-SCALE ARTWORKS</span>
        </div>
      </div>

      {/* SECTION 2: LIVE SIMULATOR & VOLUMETRIC METRICS (The user's key volume prop request) */}
      <InteractiveVolumeVisualizer />

      {/* SECTION 3: CREDIBILITY LOGOS SUBSECTION */}
      <CredibilityLogos />

      {/* SECTION 4: THE ATELIER PHILOSOPHY & VALUES (Screen 3 Foundation guide representation) */}
      <div 
        id="atelier-foundation-section"
        className="bg-[#2A3144] py-24 px-6 md:px-12 relative overflow-hidden border-b border-white/5"
      >
        {/* Subtle decorative background blur circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-twilight/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* Asymmetric Header Layout: Split Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-rose text-sm">✦</span>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-sans">
                  02 &middot; FOUNDATION PHILOSOPHY
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FFE0DB] uppercase">
                THE FOUNDATION
              </h2>
            </div>

            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-8 text-white/70 text-sm md:text-base font-sans leading-relaxed">
              <p className="font-display text-white italic text-lg mb-2">
                &ldquo;To transform architectural surfaces into bespoke, large-scale artworks that define a space and outlast a trend.&rdquo;
              </p>
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                &mdash; Our Mission. Studio and discerning clients landmark core values.
              </p>
            </div>
          </div>

          {/* Core Values 4-Column Asymmetric Grid (Screen 3 values: Craft, Vision, Bespoke, Presence) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start">
            {VALUE_PROPS.map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                id={`value-prop-card-${value.id}`}
                className="relative group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Brand roman/numerical index decoration */}
                <div className="text-rose font-display text-lg tracking-widest font-semibold mb-4 flex justify-between items-center">
                  <span>{value.indexMark}</span>
                  <span className="text-xs text-white/20 select-none">✦</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2 group-hover:text-rose transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Architectural Sector Categorization (Screen 4 guidelines) */}
          <div className="mt-20 pt-16 border-t border-white/5">
            <div className="flex items-center space-x-2 mb-10">
              <span className="text-rose text-sm">✦</span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-sans text-left">
                SECTORS WE TRANSFORM
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CLIENT_SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className="p-6 rounded-2xl border border-white/5 bg-[#252C3E] hover:bg-white/[0.02] flex items-start space-x-4 transition-all group"
                >
                  <div className="p-3 bg-white/[0.03] text-rose rounded-xl font-display text-sm font-bold shadow-sm group-hover:text-ink group-hover:bg-[#FFE0DB] transition-colors shrink-0">
                    <Brush className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-[#FFE0DB] tracking-wide mb-1 uppercase group-hover:text-white">
                      {sector.name}
                    </h4>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 5: DISCERNING EDITORIAL TESTIMONIALS */}
      <Testimonials />

      {/* Elegant Wavy SVG Drip transition from Porcelain background back to Ink background (Screen 10 guidelines) */}
      <DripDivider fillColor="#252C3E" backgroundColor="#FFE0DB" />

      {/* SECTION 6: THE DETAILED COMMISSION CONTACT FORM (Interactive signature canvas) */}
      <CommissionForm />

      {/* ATELIER INSOMNIA FOOTER BAR (Screen 13 Guidelines) */}
      <footer className="bg-[#1B1F2D] py-16 px-6 md:px-12 border-t border-white/5 relative z-10 text-center">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Logo representation and signature motto */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="font-display text-xl tracking-[0.3em] font-bold text-white uppercase">
              INSOMNIA MURALS
            </span>
            <p className="font-display text-base italic text-[#FFE0DB] tracking-wide max-w-sm">
              &ldquo;Made to be looked at twice.&rdquo;
            </p>
          </div>

          {/* Secondary Info details */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 tracking-[0.25em] font-sans font-bold uppercase space-y-4 md:space-y-0">
            <span>INSOMNIA STUDIO MASTERCLASS &copy; 2026. ALL RIGHTS RESERVED.</span>
            
            {/* Visual thumb up press confirmation as on screen 3 guidelines */}
            <span className="text-rose text-[9px] tracking-wide flex items-center space-x-1 hover:text-white transition-colors cursor-pointer uppercase">
              <span>PRESS THUMB UP</span>
              <span>✦</span>
            </span>
            
            <div className="flex space-x-6">
              <a href="#projects" className="hover:text-rose transition-colors">PROJECTS</a>
              <span>/</span>
              <a href="#contact" className="hover:text-rose transition-colors">CONTACT OFFICE</a>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
