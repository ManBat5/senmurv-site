
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />

      {/* HERO with animated text + CTA + scroll cue */}
      <section className="relative h-[88vh] sm:h-screen flex items-center justify-center text-center overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/58" />

        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="hero-text font-headline text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-tight">
              <span className="reveal reveal-1">AGI-Powered Intelligence</span>
              <br className="hidden sm:block" />
              <span className="reveal reveal-2">For Every Operation</span>
            </h1>

            {/* Get Started button */}
            <div className="mt-8 reveal reveal-3">
              <a
                href="#get-started"
                className="inline-block rounded-2xl bg-white text-black px-6 py-2.5 font-medium hover:bg-white/90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Scroll down cue */}
        <a
          href="#get-started"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white"
          aria-label="Scroll down"
        >
          <div className="scroll-indicator mx-auto h-10 w-10 rounded-full border border-white/40 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="mt-2 text-xs tracking-wide">Scroll</div>
        </a>
      </section>

      {/* GET STARTED target: teasers to deep pages */}
      <section id="get-started" className="rule py-14">
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
