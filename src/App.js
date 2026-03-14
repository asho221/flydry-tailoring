import React, { useState, useEffect } from 'react';
import { Scissors, ArrowRight, Sparkles, Ruler, ShieldCheck, MoveVertical, Minimize } from 'lucide-react';

export default function SpecialistServices() {
  // State to track which alteration animation is currently playing
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through the 4 different animations every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // The dynamic alteration sequences
  const alterations = [
    {
      id: 'hemming',
      name: 'Trouser Hemming',
      icon: <MoveVertical size={18} />,
      draw: (
        <g key="hemming">
          {/* Trouser Silhouette */}
          <path d="M 140 50 L 140 220 C 140 250, 180 250, 180 220 L 180 120 L 220 120 L 220 220 C 220 250, 260 250, 260 220 L 260 50" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 120 200 L 280 200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          {/* Golden Hemming Stitch */}
          <path d="M 130 200 L 270 200" stroke="#C5A059" strokeWidth="4" strokeDasharray="10 15" strokeDashoffset="500" strokeLinecap="round" className="animate-stitch-dynamic" fill="none" />
        </g>
      )
    },
    {
      id: 'waist',
      name: 'Waist Tapering',
      icon: <Minimize size={18} />,
      draw: (
        <g key="waist">
          {/* Torso/Waist Silhouette */}
          <path d="M 120 50 C 120 150, 160 200, 120 280 M 280 50 C 280 150, 240 200, 280 280" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" strokeLinecap="round" />
          {/* Golden Darts/Tapering Stitches */}
          <path d="M 135 100 Q 175 160 135 230 M 265 100 Q 225 160 265 230" stroke="#C5A059" strokeWidth="4" strokeDasharray="10 15" strokeDashoffset="500" strokeLinecap="round" className="animate-stitch-dynamic" fill="none" />
        </g>
      )
    },
    {
      id: 'tear',
      name: 'Seamless Tear Repair',
      icon: <Sparkles size={18} />,
      draw: (
        <g key="tear">
          {/* Fabric Tear Silhouette */}
          <path d="M 200 80 L 180 120 L 210 160 L 190 200 L 200 240" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Golden Zig-Zag Stitch */}
          <path d="M 170 100 L 230 110 L 170 130 L 230 140 L 170 160 L 230 170 L 170 190 L 230 200 L 170 220" stroke="#C5A059" strokeWidth="3" strokeDasharray="5 5" strokeDashoffset="500" strokeLinecap="round" strokeLinejoin="round" className="animate-stitch-dynamic" fill="none" />
        </g>
      )
    },
    {
      id: 'sleeve',
      name: 'Sleeve Adjustments',
      icon: <Scissors size={18} />,
      draw: (
        <g key="sleeve">
          {/* Shoulder & Sleeve Silhouette */}
          <path d="M 120 80 C 200 50, 260 100, 250 250 M 180 250 L 180 120" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 160 210 L 270 190" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          {/* Golden Sleeve Stitch */}
          <path d="M 170 210 L 260 190" stroke="#C5A059" strokeWidth="4" strokeDasharray="10 15" strokeDashoffset="500" strokeLinecap="round" className="animate-stitch-dynamic" fill="none" />
        </g>
      )
    }
  ];

  return (
    // Tightened mobile padding (py-12 instead of py-20)
    <section className="relative w-full bg-[#082219] text-white py-12 md:py-24 lg:py-32 overflow-hidden font-sans selection:bg-[#C5A059] selection:text-[#082219]">
      
      {/* --- CUSTOM HIGH-END KEYFRAMES & SCROLLBAR KILLER --- */}
      <style>
        {`
          /* KILL ALL SCROLLBARS FOR EMBEDDING */
          html, body {
            margin: 0;
            padding: 0;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            background-color: #082219;
          }
          html::-webkit-scrollbar, body::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }

          @keyframes scroll-text {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes draw-stitch-dynamic {
            0% { stroke-dashoffset: 500; opacity: 0; }
            10% { opacity: 1; }
            70% { stroke-dashoffset: 0; opacity: 1; }
            90% { stroke-dashoffset: 0; opacity: 0; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          .animate-marquee {
            animation: scroll-text 40s linear infinite;
          }
          .animate-stitch-dynamic {
            animation: draw-stitch-dynamic 4s ease-in-out forwards;
          }
          /* Golden glow for premium feel */
          .glow-text {
            text-shadow: 0 0 40px rgba(197, 160, 89, 0.4);
          }
        `}
      </style>

      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      {/* Huge scrolling background text */}
      <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2 pointer-events-none opacity-[0.03] z-0 flex animate-marquee">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase whitespace-nowrap tracking-tighter italic text-[#C5A059]">
          EXPERT TAILORING • PERFECT FIT • SEAMLESS REPAIR • EXPERT TAILORING • PERFECT FIT • 
        </span>
      </div>
      
      {/* Blurred glow orbs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#114232] rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="w-full px-4 sm:px-6 relative z-10">
        
        {/* --- INTRO TEXT --- */}
        {/* Tightened mobile margin (mb-10 instead of mb-16) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#C5A059] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
              <Sparkles size={12} /> Alterations and Repairs
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] glow-text">
              Master the <br/><span className="text-[#C5A059]">Details.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-xl max-w-md font-medium leading-relaxed">
            Beyond standard laundry. We offer dedicated, artisan-level care for the items that define your style.
          </p>
        </div>

        {/* --- FEATURE: LIVE TAILORING DISPLAY --- */}
        {/* Tightened mobile gap (gap-8 instead of gap-12) */}
        <div className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          
          {/* The Dynamic Visual Art Block */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-[#114232] border border-white/10 overflow-hidden relative shadow-2xl shadow-[#000]/50 transition-colors duration-700">
              
              {/* Dynamic SVG Drawing Container */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                {alterations[activeStep].draw}
              </svg>

              {/* Dynamic Animated Badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-2 md:px-4 md:py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2 md:gap-2.5 transition-all duration-500 shadow-lg">
                 <div className="text-[#C5A059] animate-pulse">
                   {alterations[activeStep].icon}
                 </div>
                 <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">
                   {alterations[activeStep].name}
                 </span>
              </div>

              {/* Central Scissors Background Element */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#C5A059] absolute -inset-8 blur-3xl opacity-20"></div>
                  <Scissors size={64} className="text-[#C5A059] relative z-10 -rotate-12 md:w-[80px] md:h-[80px]" />
                </div>
              </div>

            </div>
          </div>

          {/* The Content Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight uppercase italic leading-none group-hover:text-[#C5A059] transition-colors duration-500">
              We fit your clothes <br/>to perfection.
            </h3>
            <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Our master tailors ensure your garments look and feel exactly as they should. From complex resizing to seamless tear repairs, we collect, adjust, and return your clothes ready for the runway.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {['Shorten / Lengthen', 'Taking In / Tapering', 'Zip Replacements', 'Invisible Mending'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-2 md:pb-3">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <span className="text-xs md:text-sm font-bold tracking-wide text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://flydry.co.uk/book#/" 
              target="_top"
              className="group/btn inline-flex items-center justify-center md:justify-between bg-white text-[#082219] w-full sm:w-auto px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl font-black text-[14px] md:text-[15px] uppercase tracking-widest hover:bg-[#C5A059] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300"
            >
              Book a Repair Now
              <ArrowRight size={18} className="ml-3 md:ml-4 group-hover/btn:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
