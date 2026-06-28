import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Typography & Info */}
          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block mb-4">
                Initiate Care
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9]">
                Let us begin <br />
                <span className="font-serif italic font-medium text-gray-400">the conversation.</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 font-light max-w-md leading-relaxed">
              We respond to all inquiries within two hours. Absolute discretion and privacy are guaranteed from the very first word.
            </p>

            <div className="space-y-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Direct Line</p>
                <p className="text-2xl font-serif text-gray-900">1 (800) 555-0199</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Executive Office</p>
                <p className="text-lg text-gray-700 font-light">400 Premium Way, Suite 120<br/>New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="bg-[#F4F4F0] p-10 sm:p-14 rounded-3xl">
            <form className="space-y-10">
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" id="firstName" className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-blue-900 transition-colors peer" placeholder=" " required />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:font-bold uppercase tracking-widest peer-valid:-top-4 peer-valid:text-xs">First Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="lastName" className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-blue-900 transition-colors peer" placeholder=" " required />
                  <label htmlFor="lastName" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:font-bold uppercase tracking-widest peer-valid:-top-4 peer-valid:text-xs">Last Name</label>
                </div>
              </div>

              <div className="relative group">
                <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-blue-900 transition-colors peer" placeholder=" " required />
                <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:font-bold uppercase tracking-widest peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
              </div>

              <div className="relative group">
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-blue-900 transition-colors peer resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:font-bold uppercase tracking-widest peer-valid:-top-4 peer-valid:text-xs">How can we assist you?</label>
              </div>

              <button type="submit" className="group relative w-full inline-flex items-center justify-center bg-gray-900 text-white px-8 py-5 rounded-full overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                  Submit Inquiry
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}