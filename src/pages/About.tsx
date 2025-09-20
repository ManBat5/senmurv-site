import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-24">
      <h1 className="font-head text-4xl tracking-[.18em] mb-6">Vision & Purpose</h1>

      <p className="text-white/80 leading-relaxed">
        Senmurv isn’t an automation vendor. It’s a refusal to accept brittle, reactive systems. We’re building
        a living intelligence for the physical world — one that perceives, understands, acts, and grows wiser
        through operation, proving improvements in reality rather than in slides. 
      </p>

      <p className="text-white/80 leading-relaxed mt-5">
        We build for the arenas where fragility costs most: operations, security, and safety — catching issues
        early, restoring throughput, and responding with proportionate deterrence. From these proving grounds,
        the aim is a nervous system that strengthens sites, grids, and cities with every cycle.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-2xl border border-white/15 p-5 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-2">What makes us different</h2>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Decision-maker, not a dashboard — outcomes over instructions.</li>
            <li>Self-supervised, guarded learning with canaries and instant rollback.</li>
            <li>Closed, sovereign, hardened — trust and control are foundational.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/15 p-5 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-2">Why now</h2>
          <p className="text-sm text-white/75">
            Edge compute, sensors, and modern learning architectures make real-time, closed-loop intelligence
            practical — and the urgency is clear across infrastructure and industry.
          </p>
        </div>
      </div>
    </div>
  );
}
