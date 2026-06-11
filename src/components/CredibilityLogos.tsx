/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CLIENT_LOGOS } from '../data';

export default function CredibilityLogos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div id="credibility-logos-section" className="bg-ink py-12 md:py-16 border-b border-white/5 relative overflow-hidden">
      {/* Absolute faint background circle gradient */}
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-midnight/10 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Subtle Section Tagline */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <span className="text-rose font-display text-xs">✦</span>
          <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Installed Landmark Landmarks
          </span>
          <span className="text-rose font-display text-xs">✦</span>
        </div>

        {/* Brand Curation Logos Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center"
        >
          {CLIENT_LOGOS.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              id={`credibility-logo-${index}`}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-1">
                {/* Simulated high-fashion geometric icon logo */}
                <div className="w-8 h-8 rounded bg-transparent flex items-center justify-center mb-1 text-white/30 group-hover:text-rose transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-none stroke-current"
                    strokeWidth="1.5"
                  >
                    {index === 0 && <polygon points="12 2 2 7 12 12 22 7 12 2" />}
                    {index === 1 && <path d="M12 2L2 22h20L12 2z" />}
                    {index === 2 && <circle cx="12" cy="12" r="10" />}
                    {index === 3 && <rect x="3" y="3" width="18" height="18" rx="2" />}
                    {index === 4 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />}
                  </svg>
                </div>
                {/* Two-line elegant modular text logo */}
                <span className="font-display text-[11px] md:text-xs tracking-[0.25em] font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                  {company.line1}
                </span>
                <span className="text-[7px] md:text-[8px] tracking-[0.4em] font-sans text-white/30 group-hover:text-rose transition-colors duration-300">
                  {company.line2}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Inline statement */}
        <p className="mt-8 text-white/40 text-xs font-sans tracking-wide max-w-xl mx-auto">
          Comprehensively certified and curated for premium structural scale across hotels, headquarters, flagships, and residential architecture.
        </p>
      </div>
    </div>
  );
}
