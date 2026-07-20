import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] bg-[#F4F4F0] text-gray-900 flex flex-col justify-center overflow-hidden pt-32 pb-16">
      
      {/* --- BOLD ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Large Scale Visible Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A8A0F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A0F_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* 2. Painted Lighting Orbs (Highly visible) */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-200/40 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-100/40 blur-[120px] mix-blend-multiply"></div>

        {/* 3. Massive, Flowing Gradient Ribbon */}
        <svg 
          className="absolute top-1/4 -left-[10%] w-[120%] h-[80vh] opacity-30" 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M-100,400 C200,600 400,-100 800,200 C1200,500 1400,100 1600,300" 
            stroke="url(#paint0_linear)" 
            strokeWidth="80" 
            strokeLinecap="round" 
            className="drop-shadow-2xl"
          />
          <path 
            d="M-50,450 C250,650 450,-50 850,250 C1250,550 1450,150 1650,350" 
            stroke="url(#paint1_linear)" 
            strokeWidth="30" 
            strokeLinecap="round" 
            opacity="0.6"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="-100" y1="250" x2="1600" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#1E3A8A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="-50" y1="300" x2="1650" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="1" stopColor="#93C5FD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      {/* --- END BACKGROUND --- */}
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-End Typography */}
          <div className="space-y-8 pb-8">
          

            {/* Editorial Heading with Stroke Effect */}
            <h1 className="text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-extrabold leading-[0.85] tracking-tighter text-gray-900">
              Dignity <br />
              <span className="text-blue-900 italic font-serif font-medium tracking-normal text-[4rem] sm:text-[5.5rem] lg:text-[7rem]">in every</span> <br />
              {/* Hollow text effect using webkit-text-stroke */}
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #111827' }}>
                moment.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed font-light mt-6">
              We connect families with exceptional, meticulously vetted professionals who bring warmth, expertise, and absolute peace of mind to your doorstep.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <Link href="#contact" className="group relative inline-flex items-center justify-center bg-blue-950 text-white px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_10px_40px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_50px_rgba(30,58,138,0.5)]">
                <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10 text-sm font-bold tracking-widest uppercase">Begin the Conversation</span>
              </Link>
              <Link href="#services" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-800 hover:text-blue-900 transition-colors">
                <span>Explore Services</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-900 group-hover:translate-x-2 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Sculpted Imagery */}
          <div className="relative h-[65vh] lg:h-[80vh] w-full group mt-8 lg:mt-0 flex justify-end">
            
            {/* Asymmetrical Arch Mask */}
            <div className="relative w-full max-w-md h-full rounded-t-[200px] rounded-br-[100px] rounded-bl-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" 
                alt="Compassionate elderly care" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-transparent mix-blend-overlay"></div>
            </div>

            {/* Decorative Geometric Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-blue-900/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <svg className="w-32 h-32 text-blue-900/30" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[11px] font-bold uppercase tracking-widest" fill="currentColor">
                  <textPath href="#circlePath">Premium Care • Trusted Staffing •</textPath>
                </text>
              </svg>
            </div>

            {/* Floating Glassmorphism Card */}
            <div className="absolute -left-4 sm:-left-16 bottom-16 bg-white/70 backdrop-blur-2xl p-6 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] max-w-[280px] border border-white/80 transition-transform duration-700 hover:-translate-y-4">
              <div className="flex justify-between items-start mb-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" alt="Staff" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Staff" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Staff" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                  Top 1%
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                Rigorous vetting ensures only the most <span className="text-blue-700">compassionate professionals</span> enter your home.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}