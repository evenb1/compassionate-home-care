import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#F9F9F8] text-gray-900 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block">
            The Legacy of Trust
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Quiet moments. <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #111827' }}>Profound impact.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Review 1: Shifted up */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 lg:-translate-y-8">
            <div className="text-6xl text-blue-100 font-serif leading-none h-8">"</div>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8 italic">
              Bringing someone into our mother's home was terrifying. The caregiver from Compassionate didn't just tend to her medical needs; she brought laughter back into the house. It feels like we extended our family.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <p className="font-bold text-gray-900 text-sm">The Harrison Family</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">2 Years of Care</p>
              </div>
            </div>
          </div>

          {/* Review 2: Centered */}
          <div className="bg-blue-950 text-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(30,58,138,0.2)] lg:translate-y-8">
            <div className="text-6xl text-blue-800 font-serif leading-none h-8">"</div>
            <p className="text-lg text-blue-50 font-light leading-relaxed mb-8 italic">
              The level of professionalism is staggering. They mapped out a post-surgery recovery protocol for my father that was flawless. Their intuitive empathy is what truly sets them apart from the rest.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover border border-white/20" />
              <div>
                <p className="font-bold text-white text-sm">Arthur Pendelton</p>
                <p className="text-xs text-blue-300 tracking-widest uppercase">Post-Op Recovery</p>
              </div>
            </div>
          </div>

          {/* Review 3: Shifted up */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 lg:-translate-y-4">
            <div className="text-6xl text-blue-100 font-serif leading-none h-8">"</div>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8 italic">
              When my husband’s dementia advanced, we were overwhelmed. The specialized care team didn't just manage his symptoms; they preserved his dignity. I sleep peacefully knowing he is safe.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&auto=format&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Eleanor M.</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Specialized Care</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}