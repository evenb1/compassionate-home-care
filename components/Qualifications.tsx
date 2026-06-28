import React from 'react';

export default function Qualifications() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-50 rounded-3xl p-8 md:p-12">
          <div className="md:w-1/3 space-y-3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Highly Trained Professionals</h3>
            <p className="text-gray-600">Your loved ones are in capable, medically certified hands.</p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4 lg:gap-8">
            {[
              { cert: 'First Aid Certified' },
              { cert: 'CPR Certified' },
              { cert: 'CMT Certified' },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-blue-100">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-gray-800">{badge.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}