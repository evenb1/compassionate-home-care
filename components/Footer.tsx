import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050A18] text-white pt-24 pb-8 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="w-12 h-12 bg-white text-[#050A18] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm">Compassionate Nurturing Home Care</p>
            <p className="text-blue-100/60 font-light text-sm max-w-xs">
              Elevating the standard of home care with dignity, empathy, and compassion.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-blue-100/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/qualifications" className="hover:text-white transition-colors">Qualifications</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-blue-100/80">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">HIPAA Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-blue-100/80">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
            <div className="mt-8 space-y-2">
              <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Phone</p>
              <p className="text-sm text-blue-100/80">(443) 985-4004</p>
              <p className="text-xs font-bold tracking-widest text-white/50 uppercase mt-3">Location</p>
              <p className="text-sm text-blue-100/80">Baltimore, MD</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Compassionate Nurturing Home Care. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Baltimore, MD
          </p>
        </div>
        
      </div>
      
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[12vw] font-black text-white/5 select-none pointer-events-none w-full text-center tracking-tighter">
        COMPASSION.
      </div>
    </footer>
  );
}