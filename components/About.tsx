import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-white text-gray-900 overflow-hidden">
      {/* Structural Layout Line */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gray-100 hidden lg:block"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Editorial Portrait & Legacy Card */}
          <div className="relative space-y-8 lg:sticky lg:top-36">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" 
                alt="Founder of Compassionate Home Care" 
                className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply"></div>
            </div>
            
            {/* Architectural Signature Tag */}
            <div className="text-center lg:text-left pl-4">
              <p className="font-serif text-2xl italic text-blue-9n00">Evelyn Harper</p>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-1">Founder & Director</p>
            </div>
          </div>
          
          {/* Right Side: Reimagined Story Telling */}
          <div className="space-y-12 lg:pl-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-800 block">
                The Origin of Our Devotion
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 leading-[0.95]">
                Built on a promise made <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #111827' }}>at twelve years old.</span>
              </h2>
            </div>

            {/* Massive Editorial Pull-Quote */}
            <p className="text-2xl sm:text-3xl font-serif italic text-gray-700 border-l-4 border-blue-900 pl-6 py-2 leading-relaxed">
              "Caregiving isn't a business model I discovered; it is the very framework of my childhood."
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                My true education began early. While most kids my age were navigating middle school, I was navigating the intricate, delicate realities of eldercare, serving as the primary companion and hands-on caregiver for my grandmother. 
              </p>
              <p>
                Through those quiet afternoons, managing medication routines, and holding her hand through restless nights, I realized something transformative: old age should never compromise a person's absolute right to dignity, style, and grace.
              </p>
            </div>

            {/* Asymmetrical Accent Section */}
            <div className="bg-[#F4F4F0] p-8 sm:p-12 rounded-3xl grid sm:grid-cols-[auto_1fr] gap-6 items-center border border-gray-200/60 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-serif shadow-md">
                †
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong className="text-gray-900 block font-bold mb-1 text-lg">Our Extended Family Standard</strong>
                Compassionate Home Care exists to replicate that exact level of meticulous, deeply intuitive familial love. We don’t just staff shifts; we deliver peace of mind wrapped in absolute respect.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}