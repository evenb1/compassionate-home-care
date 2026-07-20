import React from 'react';

export default function Qualifications() {
  const credentials = [
    { title: 'First Aid Training', subtitle: 'Red Cross Certified', desc: 'Comprehensive emergency response training to handle urgent situations with confidence and calm.' },
    { title: 'CPR & AED', subtitle: 'AHA Certified', desc: 'Full cardiac life support readiness ensuring our caregivers are prepared for any critical moment.' },
    { title: 'CMT Certification', subtitle: 'Certified Medication Technician', desc: 'Rigorous medication administration protocols ensuring accuracy, safety, and peace of mind.' },
  ];

  return (
    <section className="py-24 bg-[#EBEBE8] text-gray-900 border-t border-gray-300 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter">
            Our Caregiver <br />
            <span className="font-serif italic font-medium text-blue-900">Qualifications</span>
          </h2>
          <p className="text-gray-600 font-light max-w-sm md:text-right text-lg">
            Every caregiver we place meets rigorous certification standards — because your loved one deserves nothing less.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((cred, i) => (
            <div key={i} className="group bg-[#F4F4F0] p-8 rounded-2xl border border-gray-300 hover:bg-white hover:border-blue-900/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-900 group-hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">0{i + 1}</span>
              </div>
              
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-900 mb-1">{cred.subtitle}</h4>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">{cred.title}</h3>
              <p className="text-gray-500 font-light text-sm">{cred.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}