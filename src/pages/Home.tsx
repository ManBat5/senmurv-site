

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />

      {/* HERO */}
      <section className="relative h-[88vh] sm:h-screen flex items-center justify-center text-center overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/55" />
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="hero-text font-headline text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em]">
              AGI-Powered Intelligence
              <br className="hidden sm:block" />
              For Every Operations.
            </h1>
          </div>
        </div>
      </section>

      {/* Value strips */}
      <section className="rule py-14">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          <div className="card p-6 reveal">
            <h3 className="text-lg font-medium">Decision-Maker, Not Dashboard</h3>
            <p className="mt-2 text-white/75 text-sm leading-relaxed">
              One brain across operations, safety, and security—built to act in the physical world.
            </p>
          </div>
          <div className="card p-6 reveal">
            <h3 className="text-lg font-medium">Governed Self-Improvement</h3>
            <p className="mt-2 text-white/75 text-sm leading-relaxed">
              Guardrails, canaries, instant rollback—prove the gain or revert. Accountability by design.
            </p>
          </div>
          <div className="card p-6 reveal">
            <h3 className="text-lg font-medium">Sovereign & Hardened</h3>
            <p className="mt-2 text-white/75 text-sm leading-relaxed">
              Closed-loop intelligence with portable knowledge capsules—share skills without sharing data.
            </p>
          </div>
        </div>
      </section>

      {/* Teasers */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h2 className="text-2xl font-medium tracking-tight">Vision &amp; Purpose</h2>
            <p className="mt-2 text-white/75">
              Not automation. A living system that perceives, acts, and gets wiser in operation.
            </p>
            <Link to="/about" className="mt-4 inline-block rounded-xl border border-white/30 px-4 py-2 hover:border-white/60">
              Read the full vision →
            </Link>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-medium tracking-tight">Research &amp; Development</h2>
            <p className="mt-2 text-white/75">
              Multi-agent AGI: causal perception, autonomous orchestration, governed learning.
            </p>
            <Link to="/research" className="mt-4 inline-block rounded-xl border border-white/30 px-4 py-2 hover:border-white/60">
              Explore R&amp;D →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
