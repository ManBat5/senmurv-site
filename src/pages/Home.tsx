
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="hero-text font-headline text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em]">
  AGI-Powered Intelligence
  <br className="hidden sm:block" />
  For Every Operation.
</h1>
          </div>
        </div>
      </section>

      {/* Teasers keep home minimal */}
      <main className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-2xl font-medium tracking-tight">What Senmurv Is</h2>
            <p className="mt-2 text-white/75">
              Not a vendor; a mission to build <span className="text-white">living intelligence</span> that perceives, acts,
              and gets wiser in the real world. Decision-maker, not dashboard. Accountable by design.
            </p>
            <Link to="/about" className="mt-4 inline-block rounded-xl border border-white/30 px-4 py-2 hover:border-white/60">
              Read the full vision →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-2xl font-medium tracking-tight">What We’re Building</h2>
            <p className="mt-2 text-white/75">
              Multi-agent, real-world AGI with causal perception, autonomous orchestration, and governed self-improvement.
              Seeds are in operations, security, and safety.
            </p>
            <Link to="/research" className="mt-4 inline-block rounded-xl border border-white/30 px-4 py-2 hover:border-white/60">
              Explore R&amp;D →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
