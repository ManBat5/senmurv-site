
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="hero-text font-headline text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-tight">
              <span className="reveal reveal-1">AGI-Powered Intelligence</span>
              <br className="hidden sm:block" />
              <span className="reveal reveal-2">For Every Operation</span>
            </h1>

            <div className="mt-8 reveal reveal-3">
              <Link to="/get-started" className="inline-block rounded-2xl bg-white text-black px-6 py-2.5 font-medium hover:bg-white/90">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#insights" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white" aria-label="Scroll down">
          <div className="scroll-indicator mx-auto h-10 w-10 rounded-full border border-white/40 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="mt-2 text-xs tracking-wide">Scroll</div>
        </a>
      </section>

      {/* INSIGHTS pills + cards (light section) */}
      <section id="insights" className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {/* pills row */}
          <div className="flex flex-wrap gap-2">
            <button className="pill">Defense &amp; Infrastructure</button>
            <button className="pill">Working Intelligence</button>
            <button className="pill">On-Prem</button>
            <button className="pill">R&amp;D</button>
            <button className="pill">Security</button>
            <button className="pill">Operations</button>
          </div>

          {/* grid like Palantir: one large + two small */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {/* large feature card */}
            <a className="card-light md:col-span-2" href="/research" aria-label="Read">
              <img src="/poster.jpg" alt="" className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide muted">R&amp;D • Working Notes</div>
                <h3 className="mt-2 text-xl font-medium">Self-supervising AGI for critical operations</h3>
                <p className="mt-1 text-sm muted">Guardrails, canaries, and knowledge capsules that prove gains in reality.</p>
              </div>
            </a>

            {/* right column stacked */}
            <div className="grid gap-4">
              <a className="card-light" href="/about" aria-label="Read">
                <img src="/poster.jpg" alt="" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide muted">Vision</div>
                  <div className="mt-1 font-medium">Why “No Automation. AGI in Operation.”</div>
                </div>
              </a>
              <a className="card-light" href="/get-started" aria-label="Read">
                <img src="/poster.jpg" alt="" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide muted">Pilot</div>
                  <div className="mt-1 font-medium">Designing a scoped pilot with measurable outcomes</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BIG VALUE STATEMENT */}
      <section className="section-light">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-2xl sm:text-[28px] leading-[1.35] text-neutral-900">
            Our software powers real-time, <span className="font-medium">AI-driven decisions</span> in critical
            enterprises—turning fragile operations into resilient systems. Built for on-prem sovereignty, from
            the factory floor to the front lines.
          </p>
        </div>
      </section>

      {/* PLATFORMS (left description + huge wordmark on right) */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-xl font-medium mb-6">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <div className="text-sm muted">Stitch sensing → decisions → action</div>
                <div className="mt-1 text-neutral-900">A unified stack for perception, policy, and control.</div>
              </div>
              <div>
                <div className="text-sm muted">Causal control loops</div>
                <div className="mt-1 text-neutral-900">Recover throughput, prevent downtime, stabilize flows.</div>
              </div>
              <div>
                <div className="text-sm muted">Security intelligence</div>
                <div className="mt-1 text-neutral-900">Pre-incident detection with proportionate response.</div>
              </div>
              <div>
                <div className="text-sm muted">Safety &amp; environment</div>
                <div className="mt-1 text-neutral-900">Detect, contain, and neutralize hazards early.</div>
              </div>
            </div>

            <div className="space-y-6 text-[56px] sm:text-[72px] leading-none wordmark text-neutral-900">
              <div>Ops</div>
              <div>Guardian</div>
              <div>Foundry</div>
              <div>Apollo</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <h3 className="text-lg font-medium mb-4">What partners say</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "We saw measurable stability gains within weeks.",
              "They design for reality, not demos—serious engineering.",
              "On-prem, governed learning. Exactly what we needed.",
              "Fast to prototype, disciplined about safety and rollback."
            ].map((q, i) => (
              <div key={i} className="card-light p-4 text-sm muted">{q}</div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL CTAs */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/get-started" className="card-light p-6 flex items-center justify-between">
              <div>
                <div className="text-lg font-medium text-neutral-900">Request a Pilot</div>
                <div className="muted text-sm">Scope a measurable, on-prem pilot.</div>
              </div>
              <div className="text-neutral-500">→</div>
            </a>
            <a href="/research" className="card-light p-6 flex items-center justify-between bg-neutral-900 !text-white border-neutral-800">
              <div>
                <div className="text-lg font-medium">Start Building</div>
                <div className="text-white/80 text-sm">Explore R&amp;D and contribute.</div>
              </div>
              <div className="text-white/80">→</div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
