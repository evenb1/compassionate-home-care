import React from 'react';
import Link from 'next/link';

export default function QualificationsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="relative pt-48 pb-24 bg-[#F4F4F0] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A8A0F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A0F_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block mb-4">Our Standards</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl">
            Caregiver <br />
            <span className="font-serif italic font-medium text-blue-900">Qualifications.</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            Every caregiver we place meets rigorous certification and training standards. Because your loved one deserves someone truly qualified to care for them.
          </p>
        </div>
      </section>

      {/* For Families */}
      <section className="py-32 border-b border-gray-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block">For Families</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter">What Every Caregiver Brings to Your Home</h2>
            <p className="text-gray-600 font-light text-lg max-w-2xl leading-relaxed">
              Before any caregiver enters your home, they have completed the following certifications and training requirements. This is our non-negotiable standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'First Aid Training',
                cert: 'Red Cross Certified',
                icon: '🩹',
                desc: 'Our caregivers are trained to respond confidently and quickly to emergencies — from cuts and falls to more serious medical situations. First Aid certification ensures your loved one is always in safe, prepared hands.',
                includes: ['Wound care & bleeding control', 'Choking response', 'Fall & injury assessment', 'Emergency protocol execution'],
              },
              {
                title: 'CPR Certification',
                cert: 'AHA Certified',
                icon: '❤️',
                desc: 'Cardiac emergencies can happen without warning. All our caregivers hold current CPR and AED certification from the American Heart Association, ensuring they are prepared to act immediately and effectively in a life-threatening moment.',
                includes: ['Adult & senior CPR techniques', 'AED device operation', 'Rescue breathing', 'Emergency services coordination'],
              },
              {
                title: 'CMT Certification',
                cert: 'Certified Medication Technician',
                icon: '💊',
                desc: 'Medication errors are one of the leading causes of hospitalizations among seniors. Our CMT-certified caregivers are trained to manage medication schedules with precision, accuracy, and full compliance.',
                includes: ['Medication scheduling & reminders', 'Dosage accuracy & verification', 'Adverse reaction awareness', 'Documentation & record keeping'],
              },
            ].map((cred, i) => (
              <div key={i} className="bg-[#F4F4F0] rounded-3xl p-10 space-y-6 border border-gray-200 hover:border-blue-900/20 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl">{cred.icon}</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-1">{cred.cert}</p>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{cred.title}</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{cred.desc}</p>
                <div className="space-y-3 pt-2 border-t border-gray-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 pt-4">Training Covers</p>
                  {cred.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-32 bg-[#F4F4F0]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block">Join Our Team</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[0.95]">
                Interested in Becoming <br />
                <span className="font-serif italic font-medium text-blue-900">a Caregiver?</span>
              </h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We are always looking for compassionate, dedicated individuals who want to make a real difference in people's lives. If you hold the required certifications and share our values, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Requirements to Apply</p>
                {[
                  'Valid First Aid certification (Red Cross or equivalent)',
                  'Current CPR & AED certification (AHA preferred)',
                  'CMT (Certified Medication Technician) certification',
                  'Compassionate, patient, and reliable character',
                  'Background check clearance',
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">{req}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors shadow-lg">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-blue-950 text-white rounded-3xl p-12 space-y-8">
              <h3 className="text-2xl font-bold">Why Work With Us</h3>
              {[
                { title: 'Meaningful Work', desc: 'Every shift you work makes a real, tangible difference in someone\'s life and brings peace of mind to their family.' },
                { title: 'Supportive Environment', desc: 'We treat our caregivers with the same respect and dignity we expect them to show our clients.' },
                { title: 'Competitive Pay', desc: 'We offer competitive compensation starting at $25 per hour and above, reflecting the value of your work.' },
                { title: 'Community & Purpose', desc: 'Join a team built on empathy, integrity, and a shared passion for caring for the elderly.' },
              ].map((item, i) => (
                <div key={i} className="border-b border-white/10 pb-6 last:border-none last:pb-0">
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-blue-100/60 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter">Ready to get started?</h2>
          <p className="text-gray-600 font-light text-xl max-w-xl mx-auto">Whether you need care for a loved one or want to join our team, we're here for you.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors shadow-lg">
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