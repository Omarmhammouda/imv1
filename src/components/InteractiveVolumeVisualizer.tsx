/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sliders, Info, Zap, Layers, RefreshCw } from 'lucide-react';
import { MURAL_PRESETS } from '../data';
import { MuralPreset } from '../types';

export default function InteractiveVolumeVisualizer() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('twilight-dawn');
  const [width, setWidth] = useState<number>(30); // in feet (10 - 60)
  const [height, setHeight] = useState<number>(14); // in feet (8 - 25)
  const [dripEnabled, setDripEnabled] = useState<boolean>(true);
  const [sparksEnabled, setSparksEnabled] = useState<boolean>(true);
  const [gridEnabled, setGridEnabled] = useState<boolean>(false);
  const [humanReference, setHumanReference] = useState<boolean>(true);

  // Retrieve current active preset
  const activePreset = useMemo(() => {
    return MURAL_PRESETS.find(p => p.id === selectedPresetId) || MURAL_PRESETS[1];
  }, [selectedPresetId]);

  // Volume calculations (The "volume prop" dashboard math)
  const stats = useMemo(() => {
    const area = width * height; // Total Sq. Ft.
    
    // Estimates based on brand's rigorous "fine art at scale" standards
    const paintGallons = area / 120; // 1 gallon covers approx 120 sq. ft. of fine art layering
    const paintLiters = paintGallons * 3.785;
    
    // Core craft hours estimation (roughly 1.8 hours of master-atelier work per sq. ft.)
    const craftHours = Math.round(area * 1.8);
    const artisansNeeded = Math.max(1, Math.min(4, Math.ceil(area / 150)));
    const calendarDays = Math.ceil(craftHours / (artisansNeeded * 8));

    // Abstract strokes and gold spark counts
    const brushstrokesCount = Math.round(area * 28);
    const goldSparkles = Math.round(area / 20) + 1;

    return {
      area,
      paintGallons: paintGallons.toFixed(1),
      paintLiters: paintLiters.toFixed(1),
      craftHours,
      artisansNeeded,
      calendarDays,
      brushstrokesCount: brushstrokesCount.toLocaleString(),
      goldSparkles
    };
  }, [width, height]);

  // Handle randomly shifting parameters for standard generative art feel
  const handleRandomize = () => {
    setWidth(Math.floor(Math.random() * 41) + 15); // 15 to 55
    setHeight(Math.floor(Math.random() * 15) + 9); // 9 to 23
    const randomPreset = MURAL_PRESETS[Math.floor(Math.random() * MURAL_PRESETS.length)];
    setSelectedPresetId(randomPreset.id);
  };

  return (
    <div
      id="interactive-simulator-section"
      className="bg-ink text-white py-20 px-6 md:px-12 relative overflow-hidden border-b border-white/5"
    >
      {/* Decorative Brand Sparkles Background */}
      <div className="absolute top-12 right-12 text-white/5 font-display text-9xl pointer-events-none">✦</div>
      <div className="absolute bottom-16 left-8 text-white/5 font-display text-9xl pointer-events-none">✦</div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div id="simulator-header" className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-rose text-sm">✦</span>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-sans">
              ATELIER SIMULATOR
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Dream in scale.
          </h2>
          <p className="text-white/70 text-sm md:text-base font-sans max-w-2xl leading-relaxed">
            Adjust the canvas dimensions to match your physical architecture. Explore volumetric estimates, craftsmanship requirements, and witness our visual language adapt in real-time.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMN 1: INTERACTIVE SIMULATION CONTAINER (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Visual Screen Frame */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-4 md:p-6 overflow-hidden relative shadow-2xl backdrop-blur-sm">
              
              {/* Screen Top Rail */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5 text-xs text-white/50 font-sans">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose/80 animate-ping"></span>
                  <span className="tracking-widest uppercase">WALL CONTEXT PREVIEW</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-mono">
                    {width}&apos; W &times; {height}&apos; H ({stats.area} SQ. FT)
                  </span>
                  <button
                    onClick={handleRandomize}
                    className="flex items-center space-x-1 py-1 px-2.5 rounded border border-white/10 hover:border-rose/50 hover:text-white transition-all bg-white/[0.03] cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Random</span>
                  </button>
                </div>
              </div>

              {/* The Live Interactive Architectural Canvas */}
              <div 
                className="w-full h-[320px] md:h-[420px] bg-[#1a1e2a] rounded-xl border border-white/5 overflow-hidden relative"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)'
                }}
              >
                {/* 3D Space floor indicator to give context */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                
                {/* Simulated Lobby Architectural Pillars / Shadow Borders */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-black/50 to-transparent z-20"></div>
                <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-black/50 to-transparent z-20"></div>
                
                {/* Grid Overlay Toggle */}
                {gridEnabled && (
                  <div 
                    className="absolute inset-0 z-10 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                )}

                {/* THE MURAL COMPOSITION - Adaptive Scale Responsive wrapper */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div 
                    className="relative w-full h-full rounded-lg shadow-2xl transition-all duration-700 ease-out flex items-center justify-center overflow-hidden"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      aspectRatio: `${width} / ${height}`,
                      background: `linear-gradient(135deg, ${activePreset.gradientFrom}, ${activePreset.gradientVia || activePreset.gradientFrom} 50%, ${activePreset.gradientTo})`
                    }}
                  >
                    {/* Generative Visual Accents built inside representing the layout style */}
                    <div className="absolute inset-0 pointer-events-none">
                      
                      {/* Architectural Wave lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30 select-none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M-100,50 Q200,200 600,100 T1300,300 M-100,250 Q300,120 700,280 T1300,150" 
                          fill="none" 
                          stroke="#FFE0DB" 
                          strokeWidth="2.5" 
                        />
                        {activePreset.styleType === 'geometric' && (
                          <>
                            <polyline points="0,50 300,300 800,100 1200,400" fill="none" stroke="#F1B3BE" strokeWidth="4" opacity="0.4" />
                            <circle cx="20%" cy="30%" r="40" fill="none" stroke="#9675BC" strokeWidth="2" />
                            <circle cx="80%" cy="70%" r="85" fill="none" stroke="#FFE0DB" strokeWidth="1.5" />
                          </>
                        )}
                        {activePreset.styleType === 'brutalist' && (
                          <>
                            <rect x="15%" y="10%" width="30%" height="80%" fill="none" stroke="#FFE0DB" strokeWidth="3" opacity="0.3" />
                            <rect x="55%" y="30%" width="25%" height="50%" fill="none" stroke="#252C3E" strokeWidth="6" opacity="0.5" />
                            <line x1="0" y1="90%" x2="100%" y2="10%" stroke="#F1B3BE" strokeWidth="2.5" />
                          </>
                        )}
                        {activePreset.styleType === 'organic' && (
                          <>
                            <path d="M50 300 C 150 450, 350 150, 450 300 S 750 600, 850 300" fill="none" stroke="#F1B3BE" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
                            <path d="M120 100 C 250 250, 500 0, 720 150 S 950 350, 1100 100" fill="none" stroke="#9675BC" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
                          </>
                        )}
                      </svg>

                      {/* Spark Accent layer (twinkling star objects) */}
                      {sparksEnabled && (
                        <div className="absolute inset-0">
                          {/* Sparkle 1 */}
                          <div className="absolute top-[25%] left-[20%] text-rose font-display text-lg animate-pulse delay-75">✦</div>
                          {/* Sparkle 2 */}
                          <div className="absolute bottom-[35%] left-[45%] text-[#FFE0DB] font-display text-xl animate-pulse delay-500">✦</div>
                          {/* Sparkle 3 */}
                          <div className="absolute top-[40%] right-[25%] text-twilight font-display text-2xl animate-pulse delay-300">✦</div>
                        </div>
                      )}

                      {/* Drip Accent layer (The Drip page 10 logo guidelines) */}
                      {dripEnabled && (
                        <div className="absolute top-0 left-0 w-full pointer-events-none select-none">
                          {/* Top-aligned hanging beautiful paint drip divider */}
                          <svg className="w-full h-8 md:h-12 fill-[#252C3E] opacity-90 drop-shadow-lg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0 Q100,50 200,30 T400,60 T600,90 T800,45 T1000,75 T1200,10 L1200,0 Z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Architectural tag label on the mural itself, extremely detailed */}
                    <div className="absolute top-4 left-4 z-20 py-2 px-3 bg-black/40 backdrop-blur-sm rounded border border-white/10 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-twilight"></span>
                      <span className="text-[9px] font-sans tracking-widest text-[#FFE0DB] font-bold uppercase">
                        {activePreset.name}
                      </span>
                    </div>

                    {/* HUMAN SILHOUETTE FOR COGNITIVE SCALE REFERENCE (Screen 11) */}
                    <AnimatePresence>
                      {humanReference && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 0.95, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-0 right-[15%] z-20 flex flex-col items-center pointer-events-none select-none"
                          style={{
                            // Human standard height is approx 6 feet.
                            // Container height is state 'height' (feet).
                            // Percentage height = (6 / state.height) * 100
                            height: `${(6 / height) * 100}%`,
                            maxHeight: '80%'
                          }}
                        >
                          {/* Human vector shadow symbol */}
                          <svg className="h-full w-auto text-ink/90 opacity-95 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" viewBox="0 0 100 300" fill="currentColor">
                            <circle cx="50" cy="40" r="22" />
                            <path d="M22,90v105c0,4.4,3.6,8,8,8h6v80c0,6.6,5.4,12,12,12s12-5.4,12-12v-80h6v80c0,6.6,5.4,12,12,12s12-5.4,12-12v-80h6c4.4,0,8-3.6,8-8V90c0-12-9.8-22-22-22H44C31.8,68,22,78,22,90z" />
                          </svg>
                          {/* Tiny scale text card */}
                          <div className="absolute -top-6 bg-rose text-ink text-[7px] tracking-widest uppercase py-0.5 px-1.5 rounded font-sans font-bold shadow-md">
                            Human Ref (6ft)
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Toggles and interactive parameters bottom bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/5">
                
                {/* Drip switch */}
                <button
                  onClick={() => setDripEnabled(!dripEnabled)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs cursor-pointer ${
                    dripEnabled 
                      ? 'border-twilight/50 bg-twilight/5 text-rose font-bold' 
                      : 'border-white/5 bg-transparent text-white/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="tracking-wider">The Drip Edge</span>
                  <div className={`w-3.5 h-3.5 rounded-full ${dripEnabled ? 'bg-rose' : 'bg-white/10'}`} />
                </button>

                {/* Sparks switch */}
                <button
                  onClick={() => setSparksEnabled(!sparksEnabled)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs cursor-pointer ${
                    sparksEnabled 
                      ? 'border-twilight/50 bg-twilight/5 text-rose font-bold' 
                      : 'border-white/5 bg-transparent text-white/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="tracking-wider">Gold Sparkles</span>
                  <div className={`w-3.5 h-3.5 rounded-full ${sparksEnabled ? 'bg-rose' : 'bg-white/10'}`} />
                </button>

                {/* Grid Switch */}
                <button
                  onClick={() => setGridEnabled(!gridEnabled)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs cursor-pointer ${
                    gridEnabled 
                      ? 'border-twilight/50 bg-twilight/5 text-rose font-bold' 
                      : 'border-white/5 bg-transparent text-white/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="tracking-wider">Blueprint Grid</span>
                  <div className={`w-3.5 h-3.5 rounded-full ${gridEnabled ? 'bg-rose' : 'bg-white/10'}`} />
                </button>

                {/* Human Switch */}
                <button
                  onClick={() => setHumanReference(!humanReference)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs cursor-pointer ${
                    humanReference 
                      ? 'border-twilight/50 bg-twilight/5 text-rose font-bold' 
                      : 'border-white/5 bg-transparent text-white/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="tracking-wider">Human Scale</span>
                  <div className={`w-3.5 h-3.5 rounded-full ${humanReference ? 'bg-rose' : 'bg-white/10'}`} />
                </button>

              </div>
            </div>

            {/* Slider Adjustment Controls Panel */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-6">
              <h3 className="font-display text-sm tracking-widest text-[#FFE0DB] uppercase flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-rose" />
                <span>Dimensions Interface</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Width slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="tracking-widest text-white/50 uppercase">MURAL WIDTH</span>
                    <span className="font-mono text-rose font-bold">{width} FEET ({(width * 0.3048).toFixed(1)}M)</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="60"
                    value={width}
                    onChange={(e) => setWidth(parseInt(e.target.value))}
                    className="w-full accent-rose cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>10FT (Atelier Mini)</span>
                    <span>60FT (Grand Landmark)</span>
                  </div>
                </div>

                {/* Height slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="tracking-widest text-white/50 uppercase">MURAL HEIGHT</span>
                    <span className="font-mono text-rose font-bold">{height} FEET ({(height * 0.3048).toFixed(1)}M)</span>
                  </div>
                  <input 
                    type="range"
                    min="8"
                    max="25"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full accent-rose cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>8FT (Standard Wall)</span>
                    <span>25FT (Double Height Atrium)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* COLUMN 2: VOLUMETRIC PROP & SPECIFICATIONS SIDEBAR (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Architectural Theme Selector */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
              <h3 className="font-display text-xs tracking-[0.25em] text-[#FFE0DB] uppercase">
                1. SELECT ATMOSPHERIC PRESET
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {MURAL_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPresetId(preset.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                      selectedPresetId === preset.id 
                        ? 'border-rose bg-white/[0.04] shadow-md' 
                        : 'border-white/5 bg-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Tiny visual badge indicating preset style */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-sm font-bold tracking-wide text-white group-hover:text-rose transition-colors duration-300">
                        {preset.name}
                      </span>
                      <span className="text-[8px] font-sans tracking-widest text-white/40 uppercase bg-white/5 py-0.5 px-1.5 rounded">
                        {preset.styleType}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 font-sans leading-relaxed">
                      {preset.description}
                    </p>
                    {/* Small strip indicator showing the palette colors */}
                    <div className="flex space-x-1.5 mt-2.5">
                      <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: preset.gradientFrom }}></div>
                      {preset.gradientVia && <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: preset.gradientVia }}></div>}
                      <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: preset.gradientTo }}></div>
                    </div>
                    {/* Small check star if active */}
                    {selectedPresetId === preset.id && (
                      <span className="absolute top-2.5 right-2 text-rose text-xs">✦</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculations Dashboard: Core Volume Prop Metrics */}
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-midnight/20 to-twilight/5 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="font-display text-xs tracking-[0.25em] text-[#FFE0DB] uppercase flex items-center space-x-2">
                <Layers className="w-4 h-4 text-twilight" />
                <span>2. THE VOLUME METRICS (SPEC)</span>
              </h3>

              <div className="space-y-5">
                
                {/* Surface area metric */}
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 tracking-wider">TOTAL CANVAS AREA</span>
                    <span className="text-[10px] text-white/30 font-sans">Length &times; Width</span>
                  </div>
                  <span className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                    {stats.area} <span className="text-[10px] font-sans text-rose">SQ FT</span>
                  </span>
                </div>

                {/* Pigment Volume estimate */}
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex flex-col col-span-2">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs text-white/50 tracking-wider">PIGMENT VOLUME</span>
                      <div className="relative group">
                        <HelpCircle className="w-3 h-3 text-white/30 cursor-pointer hover:text-white" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 p-2 rounded bg-ink border border-white/10 text-[9px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none leading-relaxed z-30 shadow-xl">
                          Estimates high-viscosity artist acrylics and protective satin seal coatings required.
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/30 font-sans">Multi-layered glazing technique</span>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-lg md:text-xl font-bold text-rose tracking-tight">
                      {stats.paintLiters} <span className="text-[9px] font-sans text-white/50">LITERS</span>
                    </div>
                    <div className="text-[10px] font-mono text-white/40">
                      ~{stats.paintGallons} Gallons
                    </div>
                  </div>
                </div>

                {/* Brush strokes */}
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 tracking-wider">EST. BRUSHSTROKES</span>
                    <span className="text-[10px] text-white/30 font-sans">Hand-rendered pigment density</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-white">
                    {stats.brushstrokesCount}
                  </span>
                </div>

                {/* Craft Hours */}
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 tracking-wider">ATELIER CRAFT WORK</span>
                    <span className="text-[10px] text-white/30 font-sans">Priming, outlining, details & sealing</span>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
                      {stats.craftHours} <span className="text-[9px] font-sans text-white/50">HOURS</span>
                    </div>
                    <div className="text-[10px] font-sans text-twilight">
                      {stats.artisansNeeded} artisans for ~{stats.calendarDays} days
                    </div>
                  </div>
                </div>

                {/* Sparks punctuation summary */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 tracking-wider">GOLD FOIL SPARKS</span>
                    <span className="text-[10px] text-white/30 font-sans">Signature ✦ highlight icons</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-rose">
                    {stats.goldSparkles} Sparkles
                  </span>
                </div>

              </div>

              {/* Informative footprint note */}
              <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 flex items-start space-x-2.5">
                <Info className="w-4 h-4 text-twilight shrink-0 mt-0.5" />
                <p className="text-[9px] text-white/60 font-sans leading-relaxed">
                  These dynamic computations calculate surface mass parameters in correlation with actual hotel-lounge, headquarters, and retail commission guidelines (Page 8 - color weight percentage proportions: Ink 42%, Midnight 30%, Porcelain 18%, and Twilight/Rose 10%).
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
