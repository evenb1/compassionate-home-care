import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center group-hover:scale-95 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">Compassionate</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Services', 'Why Us'].map((item, i) => (
            <Link 
              key={i} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="#contact" className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors">
          <span>Request Care</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

      </nav>
    </div>
  );
}