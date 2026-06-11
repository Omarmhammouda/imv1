/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <div
      id="testimonials-section"
      className="bg-porcelain text-ink py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Editorial Watermark background */}
      <div className="absolute -right-24 bottom-12 text-[#fcdcd6] font-display text-[14rem] stroke-current font-bold opacity-30 select-none pointer-events-none uppercase">
        CRAFT
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Title */}
        <div className="max-w-xl mb-16 md:mb-24 text-left">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-midnight text-sm">✦</span>
            <span className="text-ink/50 text-[10px] uppercase tracking-[0.4em] font-sans">
              DISCERNING SPACES
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink mb-4 leading-tight">
            Made to be looked at twice.
          </h2>
          <p className="text-ink/80 text-sm md:text-base font-sans max-w-lg leading-relaxed">
            Read stories from clients who treat their spaces as statements. Discover how bespoke architectural Murals redefine hotel experiences and real-estate landmarks.
          </p>
        </div>

        {/* Asymmetrical Testimonials Grid (Screen 11: "Asymmetry - Editorial, off-center balance") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Card 1: Stretched wide on the left (spanning 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            id="testimonial-atrium"
            className="lg:col-span-7 p-8 md:p-12 rounded-2xl bg-[#faf2ef] border border-ink/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 rounded-xl bg-ink/5 text-midnight">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-ink/30 uppercase">
                  {TESTIMONIALS[0].location}
                </span>
              </div>
              <p className="font-display text-lg md:text-xl italic leading-relaxed text-ink/90 group-hover:text-ink transition-colors duration-300">
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-ink/5 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-ink">
                  {TESTIMONIALS[0].clientName}
                </h4>
                <p className="text-xs text-ink/50 font-sans mt-0.5">
                  {TESTIMONIALS[0].role}, <span className="font-semibold">{TESTIMONIALS[0].company}</span>
                </p>
              </div>
              {/* Decorative Brand Spark */}
              <span className="text-rose text-lg">✦</span>
            </div>
          </motion.div>

          {/* Card 2: Smaller square on the right (spanning 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="testimonial-hotel"
            className="lg:col-span-5 p-8 md:p-12 rounded-2xl bg-ink text-[#FFE0DB] border border-white/5 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose/5 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 rounded-xl bg-white/5 text-rose">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                  {TESTIMONIALS[1].location}
                </span>
              </div>
              <p className="font-display text-base md:text-lg italic leading-relaxed text-[#FFE0DB]/90 group-hover:text-white transition-colors duration-300">
                &ldquo;{TESTIMONIALS[1].quote}&rdquo;
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-white">
                  {TESTIMONIALS[1].clientName}
                </h4>
                <p className="text-xs text-white/50 font-sans mt-0.5">
                  {TESTIMONIALS[1].role}, <span className="font-semibold text-rose">{TESTIMONIALS[1].company}</span>
                </p>
              </div>
              {/* Decorative Brand Spark */}
              <span className="text-rose text-lg">✦</span>
            </div>
          </motion.div>

          {/* Card 3: Wide block spanning the entire row bottom (spanning 12 columns relative or side-by-side) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="testimonial-[#test-3]"
            className="lg:col-span-12 p-8 md:p-10 rounded-2xl bg-[#faf2ef] border border-ink/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between group gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-ink/5 text-midnight">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-ink/40 uppercase">
                  {TESTIMONIALS[2].location}
                </span>
              </div>
              <p className="font-display text-base md:text-lg italic leading-relaxed text-ink/80 group-hover:text-ink transition-colors duration-300">
                &ldquo;{TESTIMONIALS[2].quote}&rdquo;
              </p>
            </div>
            
            <div className="md:text-right md:border-l md:border-ink/5 md:pl-10 shrink-0 self-start md:self-center">
              <h4 className="font-display font-bold text-sm tracking-wide text-ink">
                {TESTIMONIALS[2].clientName}
              </h4>
              <p className="text-xs text-ink/50 font-sans mt-0.5">
                {TESTIMONIALS[2].role}
              </p>
              <p className="text-xs font-semibold text-midnight font-sans">
                {TESTIMONIALS[2].company}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
