import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="relative pt-48 pb-24 bg-[#F4F4F0] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A8A0F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A0F_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-900 block mb-4">Our Story</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl">
            A Promise Made <br />
            <span className="font-serif italic font-medium text-blue-900">at Eight Years Old.</span>
          </h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-32">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">

            {/* Left: Portrait */}
            <div className="relative space-y-8 lg:sticky lg:top-36">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/founder1.png"
                  alt="Claudette Rowe, Founder of Compassionate Home Care"
                  className="w-full h-full object-contain rounded-3xl"
                />
                <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply"></div>
              </div>
              <div className="text-center lg:text-left pl-4">
                <p className="font-serif text-2xl italic text-blue-900">Claudette Rowe</p>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-1">Founder & Director</p>
              </div>
            </div>

            {/* Right: Full Story */}
            <div className="space-y-12 lg:pl-12">
              <p className="text-2xl sm:text-3xl font-serif italic text-gray-700 border-l-4 border-blue-900 pl-6 py-2 leading-relaxed">
                "Caregiving is more than completing daily tasks — it's about treating people with dignity, respect, kindness, and love."
              </p>

              <div className="space-y-8 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  My journey to opening a home care business began long before I knew what caregiving truly meant. At just eight years old, I became one of the people helping care for my grandmother. Even as a child, I understood that she needed love, patience, and someone by her side. I spent time comforting her, helping in the small ways I could, and simply being present.
                </p>
                <p>
                  One day, my grandmother passed away in my arms. That moment changed my life forever. Although I was only a child, I experienced the pain of losing someone I loved while also realizing how important compassionate care is during a person's final moments.
                </p>
                <p>
                  As I grew older, I carried that experience with me. It taught me that caregiving is more than completing daily tasks — it's about treating people with dignity, respect, kindness, and love. Families deserve to know that their loved ones are safe, cared for, and never alone.
                </p>
                <p>
                  That childhood experience became the foundation of my purpose. It inspired me to pursue a career in caregiving and eventually motivated me to open my own home care business. My mission is to provide high-quality, compassionate care that allows seniors and individuals with disabilities to remain comfortable in their own homes while maintaining their independence.
                </p>
                <p>
                  Every client I serve reminds me of my grandmother. I strive to care for each person as if they were a member of my own family. My business is built on empathy, trust, integrity, and the belief that everyone deserves to age with dignity and compassion.
                </p>
                <p>
                  Opening Compassionate Home Care is more than achieving a professional goal — it is fulfilling a promise I made to myself as a little girl. My grandmother's memory continues to inspire me every day, and through my work, her legacy of love and compassion lives on.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#F4F4F0] p-8 sm:p-12 rounded-3xl border border-gray-200 grid sm:grid-cols-[auto_1fr] gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl shadow-md">♥</div>
                <p className="text-gray-700 text-base leading-relaxed">
                  <strong className="text-gray-900 block font-bold mb-1 text-lg">Our Mission</strong>
                  To provide high-quality, compassionate home care that allows seniors and individuals with disabilities to remain comfortable in their own homes — treated always with dignity, respect, and love.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'Empathy', desc: 'We lead with heart in every interaction, understanding that behind every care request is a family that loves someone deeply.' },
                  { title: 'Trust', desc: 'We earn the confidence of families by showing up consistently, communicating openly, and always doing what we say.' },
                  { title: 'Integrity', desc: 'We hold ourselves to the highest ethical standards — in how we hire, how we care, and how we operate.' },
                  { title: 'Dignity', desc: 'Every person in our care is treated as a full human being deserving of respect, privacy, and grace.' },
                ].map((val, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-blue-900/30 hover:shadow-md transition-all duration-300">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{val.title}</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors shadow-lg">
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}