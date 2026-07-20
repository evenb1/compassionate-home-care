import React from 'react';

export default function WhyChooseUs() {
  const values = [
    { title: 'Quality You Can Trust', text: 'We are committed to delivering consistent, high-quality care that families can rely on every single day — no shortcuts, no compromises.' },
    { title: 'Certified & Trained Staff', text: 'Every caregiver is First Aid, CPR, and CMT certified. We hold our team to the highest professional standards before they ever enter your home.' },
    { title: 'Compassionate at the Core', text: 'Care is more than a checklist. Our caregivers are selected not just for their skills, but for their empathy, patience, and genuine love for people.' },
    { title: 'Dependable & Reliable', text: 'Families count on us to show up — and we do. Our staffing model is built around consistency so your loved ones always have someone they know and trust.' },
  ];

  return (
    <section id="why-us" className="py-32 bg-[#0A1128] text-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 block">
              Why Families Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Vetted for Excellence. <br />
              Chosen for Heart.
            </h2>
            <p className="text-lg text-blue-100/70 font-light max-w-lg leading-relaxed">
              We built Compassionate Home Care on a simple belief — that every senior deserves to be cared for like family. That belief shapes everything we do.
            </p>
          </div>

          <div className="space-y-12">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="group flex gap-6 sm:gap-8 items-start border-b border-white/10 pb-8 last:border-none last:pb-0"
              >
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