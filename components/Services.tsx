import React from 'react';

export default function Services() {
  const services = [
    { num: '01', title: 'Companionship', desc: 'Curating life-enriching interactions, deep conversation, and active social engagements to eliminate isolation completely.' },
    { num: '02', title: 'Personal Hygiene', desc: 'Impeccable, highly respectful assistance with dressing, bathing, and personal care executed with absolute privacy and tact.' },
    { num: '03', title: 'Medication Management', desc: 'Flawless execution of scheduling, prompts, and routine monitoring to ensure vital health protocols are meticulously maintained.' },
    { num: '04', title: 'Overnight Sanctuary Care', desc: 'Awake, active tracking and nocturnal support ensuring physical safety and seamless assistance through the darkest hours.' },
    { num: '05', title: 'Post-Hospital Transitions', desc: 'Custom tailored, clinical-grade rehabilitative care designed to bridge the gap between hospital discharge and vibrant domestic recovery.' },
    { num: '06', title: 'Specialized Illness Care', desc: 'Dignified, specialized protocols for seniors managing complex medical paths, chronic syndromes, and advanced age realities.' },
  ];

  return (
    <section id="services" className="py-32 bg-[#F4F4F0] text-gray-900 relative overflow-hidden border-t border-gray-200">
      
      {/* Background Graphic Grid Text */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-black text-gray-200/40 select-none leading-none translate-y-10 font-serif translate-x-10 pointer-events-none">
        CARE
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block">
              What We Master
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Elite Care. <br />
              Customized Without Compromise.
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-md leading-relaxed lg:pb-2">
            A boutique suite of personal services designed to preserve independence while curating an environment of luxurious safety.
          </p>
        </div>

        {/* Reimagined Structural Grid Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-300 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-sm">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-10 sm:p-12 border-r border-b border-gray-300 bg-white/60 hover:bg-white transition-all duration-500 flex flex-col justify-between group relative overflow-hidden min-h-[340px]"
            >
              {/* Subtle hover splash background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 space-y-6">
                {/* Asymmetrical Large Minimalist Number */}
                <span className="block font-serif text-4xl text-gray-300 group-hover:text-blue-900 group-hover:scale-105 transform origin-left transition-all duration-500 font-light">
                  {service.num}
                </span>
                
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-light text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* High-End Decorative Arrow Link Indicator */}
              <div className="relative z-10 pt-8 flex justify-end opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}