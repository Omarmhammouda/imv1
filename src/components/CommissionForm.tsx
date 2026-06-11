/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, PenTool, Sparkles } from 'lucide-react';
import { MURAL_PRESETS } from '../data';

export default function CommissionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(MURAL_PRESETS[1].id); // Default to Twilight Dawn
  const [submitted, setSubmitted] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Signature ref for custom canvas signature pad
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Drawing functions for signature pad
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#F1B3BE'; // Rose color signature
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    // Simulate API delay
    setSubmitted(true);
  };

  return (
    <div
      id="contact-section"
      className="bg-ink text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Background Nocturne Gradient glow spot */}
      <div className="absolute -right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-twilight/10 via-rose/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric layout parent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT-HAND PANEL: BRAND CONTACT INFO (Screen 3 Left mockup) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-rose text-sm">✦</span>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-sans">
                  INQUIRIES EST . 2026
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#FFE0DB] uppercase">
                CONTACT
              </h2>
              <p className="text-white/70 text-sm md:text-base font-sans max-w-md leading-relaxed">
                We accept a limited number of private and commercial commissions annually. Let&apos;s formulate the visual landmark is meant for your space.
              </p>
            </div>

            {/* Structured specifications */}
            <div className="space-y-6 pt-4 border-t border-white/5 font-sans">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/[0.03] rounded-lg text-rose text-sm mt-0.5 border border-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Address</h4>
                  <p className="text-sm font-medium mt-1 text-white/80">Khmelnytskyi, Beregova str., 44</p>
                  <p className="text-xs text-white/40">Studio Atelier No. 4</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/[0.03] rounded-lg text-rose text-sm mt-0.5 border border-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Phone</h4>
                  <p className="text-sm font-medium mt-0.5 text-white/80 hover:text-rose transition-colors">
                    <a href="tel:+380991112233">+380 (99) 111 22 33</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/[0.03] rounded-lg text-rose text-sm mt-0.5 border border-white/5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Email Admissions</h4>
                  <p className="text-sm font-medium mt-0.5 text-white/80 hover:text-rose transition-colors">
                    <a href="mailto:studio@insomniamurals.com">studio@insomniamurals.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT-HAND PANEL: FORM CARD (Screen 3 Right contact form mockup) */}
          <div className="lg:col-span-7">
            
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-[#212739] to-ink shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-twilight/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <h3 className="font-display text-lg tracking-[0.2em] font-bold text-[#FFE0DB] uppercase">
                  CONTACT FORM
                </h3>
                <span className="text-twilight font-display">✦</span>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-sm"
                  >
                    
                    {/* Name field */}
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-rose focus:outline-none py-3 transition-colors text-white text-base font-sans placeholder-white/30"
                      />
                    </div>

                    {/* Phone field */}
                    <div className="relative group">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your phone"
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-rose focus:outline-none py-3 transition-colors text-white text-base font-sans placeholder-white/30"
                      />
                    </div>

                    {/* Email field */}
                    <div className="relative group">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your e-mail"
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-rose focus:outline-none py-3 transition-colors text-white text-base font-sans placeholder-white/30"
                      />
                    </div>

                    {/* Preset Mural Preference */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      <label className="text-white/40 text-[10px] uppercase tracking-widest block font-sans">
                        Mural Motif Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {MURAL_PRESETS.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPreset(p.id)}
                            className={`py-1.5 px-3 rounded-full text-xs font-sans tracking-wide transition-all border cursor-pointer ${
                              selectedPreset === p.id
                                ? 'bg-rose border-rose text-ink font-semibold'
                                : 'bg-transparent border-white/15 text-white/60 hover:border-white/40'
                            }`}
                          >
                            {p.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message field */}
                    <div className="relative group">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        placeholder="Message (Space dimensions, color palettes, project timeline...)"
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/30 focus:border-rose focus:outline-none py-3 transition-colors text-white text-base font-sans placeholder-white/30 resize-none"
                      />
                    </div>

                    {/* DYNAMIC COMMISSION TOUCH - DRAW SIGNATURE PAD */}
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white/40 text-[10px] uppercase tracking-widest font-sans flex items-center space-x-1">
                          <PenTool className="w-3 h-3 text-rose" />
                          <span>SIGN TO CONFIRM COMMISSION</span>
                        </label>
                        <button
                          type="button"
                          onClick={clearSignature}
                          className="text-[9px] font-sans tracking-widest text-[#FFE0DB]/40 hover:text-rose transition-colors uppercase cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>

                      {/* Interactive Canvas Pad */}
                      <div className="w-full h-24 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden group">
                        <canvas
                          ref={canvasRef}
                          width={480}
                          height={96}
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          onTouchStart={startDrawing}
                          onTouchMove={draw}
                          onTouchEnd={stopDrawing}
                          className="w-full h-full cursor-crosshair z-10 relative touch-none"
                        />
                        {/* Placeholder trace lines */}
                        <div className="absolute inset-0 flex items-center justify-center font-sans tracking-widest text-white/10 text-[10px] pointer-events-none select-none">
                          DRAW SIGNATURE / HAND-INK MARK
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="submit-form-button"
                      className="w-full py-4 rounded-xl font-sans tracking-widest text-sm bg-rose hover:bg-porcelain text-ink font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>SEND COMMISSION BRIEF</span>
                      <Send className="w-4 h-4 ml-1" />
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                    id="submit-success-card"
                  >
                    <div className="inline-flex p-4 rounded-full bg-twilight/10 text-rose border border-twilight/20">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-xl font-bold tracking-wider text-white uppercase">
                        COMMISSION RECEIVED
                      </h4>
                      <p className="font-sans text-xs text-white/60 max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-semibold">{name}</span>. Our atelier directors have registered your brief for a custom physical landmark installment.
                      </p>
                    </div>
                    <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 max-w-sm mx-auto text-[10px] text-white/50 space-y-1">
                      <p className="font-mono text-rose uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> ATELIER ASSIGNMENT ID
                      </p>
                      <p className="font-mono text-white/70">ISM-{Math.floor(Math.random() * 900000) + 100000}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="text-xs uppercase tracking-widest text-rose hover:text-white transition-colors cursor-pointer"
                    >
                      Submit another brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
