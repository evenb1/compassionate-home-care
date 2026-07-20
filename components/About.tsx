import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-white text-gray-900 overflow-hidden">
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gray-100 hidden lg:block"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">

          {/* Left Side: Portrait & Name Tag */}
          <div className="relative space-y-8 lg:sticky lg:top-36">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl bg-transparent group">
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

          {/* Right Side: Her Real Story */}
          <div className="space-y-12 lg:pl-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-800 block">
                The Origin of Our Devotion
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 leading-[0.95]">
                Built on a promise made <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #111827' }}>at eight years old.</span>
              </h2>
            </div>

            {/* Pull Quote */}
            <p className="text-2xl sm:text-3xl font-serif italic text-gray-700 border-l-4 border-blue-900 pl-6 py-2 leading-relaxed">
              "Caregiving is more than completing daily tasks — it's about treating people with dignity, respect, kindness, and love."
            </p>

            <div className="grid sm:grid-cols-2 gap-8 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                At just eight years old, Claudette became one of the people helping care for her grandmother. Even as a child, she understood that her grandmother needed love, patience, and someone by her side — comforting her, helping in the small ways she could, and simply being present.
              </p>
              <p>
                One day, her grandmother passed away in her arms. That moment changed her life forever. Though only a child, she experienced both the pain of loss and the profound importance of compassionate care during a person's final moments.
              </p>
            </div>

            <div className="text-lg text-gray-600 font-light leading-relaxed">
              <p>
                As she grew older, she carried that experience with her — and it became the foundation of her purpose. It inspired her to pursue a career in caregiving and eventually to open Compassionate Home Care, with a mission to provide high-quality care that allows seniors and individuals with disabilities to remain comfortable in their own homes while maintaining their independence.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F4F4F0] p-8 sm:p-12 rounded-3xl grid sm:grid-cols-[auto_1fr] gap-6 items-center border border-gray-200/60 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-serif shadow-md">
                ♥
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong className="text-gray-900 block font-bold mb-1 text-lg">Her Grandmother's Legacy</strong>
                Every client she serves reminds her of her grandmother. Her business is built on empathy, trust, integrity, and the belief that everyone deserves to age with dignity and compassion. Opening Compassionate Home Care is more than a professional goal — it is fulfilling a promise she made to herself as a little girl.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}