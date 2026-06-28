import React from 'react';

export default function WhyChooseUs() {
  const values = [
    { title: 'Bespoke Quality', text: 'We do not scale for volume. We orchestrate boutique, highly managed care regimens specific to high-expectation families.' },
    { title: 'The Top 1% of Talent', text: 'Our recruitment model mirrors executive search. We source, screen, and background-vett strictly elite care personnel.' },
    { title: 'Radical Dependability', text: 'Redundant staffing protocols and real-time care monitoring ensure zero missed windows, ever.' },
    { title: 'Intuitive Empathy', text: 'We evaluate emotional intelligence with equal weight to clinical execution. True care demands chemistry.' },
  ];

  return (
    <section id="why-us" className="py-32 bg-[#0A1128] text-white relative overflow-hidden">
      
      {/* Decorative High-Contrast Lighting Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Bold Value Statement */}
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 block">
              The Sovereign Standard
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Vetted for Excellence. <br />
              Chosen for Heart.
            </h2>
            <p className="text-lg text-blue-100/70 font-light max-w-lg leading-relaxed">
              We stand at the luxury intersection of rigid institutional performance metrics and the absolute pure vulnerability of human kindness.
            </p>

            {/* Premium Interactive Stat Board */}
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
              <div>
                <span className="block text-5xl sm:text-6xl font-serif font-light text-blue-400">99.4%</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mt-2">Family Retention Rate</span>
              </div>
              <div>
                <span className="block text-5xl sm:text-6xl font-serif font-light text-blue-400">1-to-1</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mt-2">Dedicated Case Coordination</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Value Stack */}
          <div className="space-y-12">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="group flex gap-6 sm:gap-8 items-start border-b border-white/10 pb-8 last:border-none last:pb-0"
              >
                {/* Structural Bullet Ring */}
                <div className="mt-1 w-6 h-6 rounded-full border border-blue-400/30 flex items-center justify-center shrink-0 group-hover:border-blue-400 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-blue-400 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-blue-100/60 font-light text-base leading-relaxed">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}