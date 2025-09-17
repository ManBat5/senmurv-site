
import React from 'react';

export default function SenmurvLaunch() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      {/* Top nav with logo */}
      <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/senmurv.png"
              alt="Senmurv"
              className="h-8 w-8 rounded-md object-contain"
            />
            <span className="text-white/90 font-medium tracking-tight">Senmurv</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-white/70 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#research" className="hover:text-white">R&amp;D</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero (headline only, per your request) */}
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
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-tight">
              AI-Driven Automation
              <br />
              for Every Operation
            </h1>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center">
            About Senmurv
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed text-lg text-center">
            Senmurv isn’t another automation vendor. It’s a mission to build{' '}
            <span className="text-white/90">living intelligence</span> that
            perceives, understands, acts, and evolves in the physical world —
            moving beyond brittle rule-based systems. We are builders and
            integrators who fuse hardware and intelligence into one fabric,
            focused on outcomes, not dashboards. {/* vision & purpose */}
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Decision-maker, not dashboard</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Acts in the world, not just reports. A unified brain across
                operations, safety, security, and environment.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Self-supervising & accountable</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Improves with guardrails, canaries, instant rollback, and proof
                of gain — not promises.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Sovereign & secure by design</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Hardened, closed, and trusted. Knowledge can be shared as
                portable “capsules” without exposing raw data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision (from your document) */}
      <section id="vision" className="py-20 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center">
            Vision & Purpose
          </h2>
          <div className="mt-6 space-y-5 text-white/75 leading-relaxed text-lg">
            <p>
              We refuse a future where critical systems remain brittle and
              reactive. Our aim is real-world AGI — an audacious, living
              intelligence that gets wiser with every cycle and proves its
              improvements in operation.
            </p>
            <p>
              The point is not more automation; it’s to transcend automation:
              multi-agent intelligence that builds its own models, tests them in
              reality, and distills proven skills into shareable knowledge
              capsules.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Development (no emojis; next-gen focus) */}
      <section id="research" className="py-20 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center">
            Research & Development
          </h2>
          <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
            We’re in active R&amp;D — building the technology that doesn’t exist yet.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Causal Perception & World Models</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Systems that don’t just watch but understand drift and causality, simulate
                futures, and choose safe, effective actions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Autonomous Orchestration</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                From doors to drones to power and light — orchestrating machines and
                workflows with measurable outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Governed Self-Improvement</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Guardrails, canary promotion, instant rollback, and knowledge capsules so
                the system learns while staying under control.
              </p>
            </div>
          </div>

          <p className="mt-10 text-white/60 text-sm text-center max-w-3xl mx-auto">
            Initial proving grounds: operations (throughput & downtime stability), security
            (pre-incident detection and proportionate deterrence), and safety (containment
            before escalation).
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-white/75">
            Email us at <a href="mailto:hello@senmurv.ai" className="underline underline-offset-4">hello@senmurv.ai</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Senmurv Technologies Inc.
      </footer>
    </div>
  );
}
