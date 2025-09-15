
import React from 'react';

export default function SenmurvLaunch() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <section
        id="top"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          {/* ✅ Slightly bigger Palantir-style headline */}
          <h1 className="font-inter text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-tight">
            AI-Driven Automation <br /> for Every Operation
          </h1>
        </div>
      </section>

      <section id="capabilities" className="py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-medium">Capabilities</h2>
        <p className="mt-4 text-white/80">Accepting pilot programs soon.</p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-2xl bg-white text-black px-6 py-3 font-medium"
        >
          Apply for Pilot
        </a>
      </section>

      <section id="contact" className="py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-medium">Get in touch</h2>
        <p className="mt-4 text-white/80">Email us: hello@senmurv.ai</p>
      </section>

      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        © {new Date().getFullYear()} Senmurv Technologies Inc.
      </footer>
    </div>
  );
}
