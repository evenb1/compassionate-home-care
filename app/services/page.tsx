import React from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Companionship Care',
    desc: 'Loneliness is one of the greatest threats to senior health. Our caregivers provide genuine companionship — conversation, activities, outings, and simply being present — to keep your loved one engaged, stimulated, and emotionally supported.',
    details: ['Social engagement & activities', 'Accompaniment to appointments', 'Light household conversation', 'Emotional support & presence'],
  },
  {
    num: '02',
    title: 'Personal Hygiene Assistance',
    desc: 'We provide respectful, dignified assistance with personal care routines. Our caregivers are trained to handle sensitive tasks with absolute tact and professionalism, preserving the privacy and self-esteem of every client.',
    details: ['Bathing & grooming assistance', 'Dressing & personal styling', 'Oral hygiene support', 'Skincare & hygiene routines'],
  },
  {
    num: '03',
    title: 'Medication Management',
    desc: 'Managing multiple medications can be overwhelming. Our CMT-certified caregivers ensure medications are taken correctly, on time, and tracked properly — giving families complete peace of mind about their loved one\'s health protocols.',
    details: ['Medication reminders & scheduling', 'Dosage tracking & monitoring', 'Coordination with healthcare providers', 'Medication log maintenance'],
  },
  {
    num: '04',
    title: 'Overnight Care',
    desc: 'The night hours can be the most vulnerable for seniors. Our overnight caregivers provide active, attentive support through the night — ensuring safety, comfort, and immediate assistance whenever it\'s needed.',
    details: ['Nighttime safety monitoring', 'Assistance with nighttime routines', 'Emergency response readiness', 'Restful environment support'],
  },
  {
    num: '05',
    title: 'Post-Hospital Recovery',
    desc: 'The transition from hospital to home is a critical period. Our caregivers provide tailored recovery support that bridges clinical care and domestic life — reducing readmission risk and supporting a smooth, comfortable recovery.',
    details: ['Recovery plan coordination', 'Wound care & hygiene monitoring', 'Physical therapy exercise support', 'Nutrition & hydration assistance'],
  },
  {
    num: '06',
    title: 'Specialized Illness Care',
    desc: 'For seniors managing chronic conditions or complex medical needs, we provide specialized care built around their unique situation. Our staff are trained to handle the physical and emotional dimensions of serious illness with compassion and expertise.',
    details: ['Chronic condition management', 'Palliative & comfort care support', 'Coordination with medical teams', 'Family education & guidance'],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="relative pt-48 pb-24 bg-[#F4F4F0] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A8A0F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A0F_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block mb-4">What We Offer</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl">
            Care Services <br />
            <span className="font-serif italic font-medium text-blue-900">Built Around Your Loved One.</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            Every service we offer is delivered with the same standard — treating your family member with the dignity, respect, and warmth they deserve.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div key={i} className="group grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-16 p-10 sm:p-14 rounded-3xl border border-gray-200 hover:border-blue-900/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white">
                
                <span className="font-serif text-5xl text-gray-200 group-hover:text-blue-900 transition-colors duration-500 font-light self-start">
                  {service.num}
                </span>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">{service.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 mt-4">
                    Request This Service
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-[#F4F4F0] rounded-2xl p-8 space-y-3 self-start">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What's Included</p>
                  {service.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-light">{d}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter">Not sure which service you need?</h2>
          <p className="text-blue-100/70 font-light text-xl max-w-xl mx-auto">Reach out and we'll help you find the right care plan for your loved one.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-blue-100 transition-colors">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}