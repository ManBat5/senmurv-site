import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-24">
      <h1 className="font-head text-4xl tracking-[.18em] mb-6">Vision & Purpose</h1>

      <p className="text-white/80 leading-relaxed">
        Senmurv is a commitment to <strong>intelligence over automation</strong>. We are building a living system for the
        physical world that perceives, understands, acts, and <em>proves</em> improvement in operation—decision-maker, not dashboard.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Why we exist</h2>
      <p className="text-white/80 leading-relaxed mt-2">
        Rule-based automation can’t keep up with drift, complexity, and adversaries. Operators drown in alarms.
        We’re replacing fragility with an on-prem brain that takes initiative, learns from outcomes, and respects constraints.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">What we build</h2>
      <ul className="mt-2 list-disc pl-6 text-white/80 leading-relaxed">
        <li><strong>Unified perception</strong>: cameras, sensors, and signals fused into a causal world model.</li>
        <li><strong>Governed learning</strong>: guardrails → canaries → promotion; instant rollback on regression.</li>
        <li><strong>Knowledge capsules</strong>: proven skills, signed and portable, so gains scale without moving raw data.</li>
        <li><strong>Sovereign by design</strong>: on-prem, hardened, operators-in-the-loop where it matters.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Where it starts</h2>
      <p className="text-white/80 leading-relaxed mt-2">
        Operations stability, security intelligence, and safety & environment—domains where better decisions today
        ripple across performance, risk, and resilience.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">How we work</h2>
      <ul className="mt-2 list-disc pl-6 text-white/80 leading-relaxed">
        <li><strong>Outcomes over instructions</strong>: we measure cause and effect, not activity.</li>
        <li><strong>Reality-first engineering</strong>: prototype fast on site; promote only with proof.</li>
        <li><strong>Operator trust</strong>: clear controls, audit trails, and safe failure modes.</li>
      </ul>
    </div>
  );
}
