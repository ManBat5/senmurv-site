import React from "react";

export default function RD() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-24">
      <h1 className="font-head text-4xl tracking-[.18em] mb-6">Research & Development</h1>

      <p className="text-white/80 leading-relaxed">
        We’re building a <strong>multi-agent AGI</strong> that maintains a causal model of the site, forecasts likely futures,
        selects safe actions, and learns continuously under governance. The aim is everyday gains—less downtime, tighter security,
        safer environments—proven in real operations.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Workstreams</h2>
      <ul className="mt-2 list-disc pl-6 text-white/80 leading-relaxed">
        <li><strong>Perception & fusion</strong> — grounding across cameras, telemetry, and logs.</li>
        <li><strong>World model</strong> — causal structure, drift detection, counterfactuals.</li>
        <li><strong>Action selection</strong> — constrained policies, human-in-the-loop escalation.</li>
        <li><strong>Governed learning</strong> — guardrails, canaries, audit, instant rollback.</li>
        <li><strong>Knowledge capsules</strong> — signed skills that transfer without moving data.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Initial testbeds</h2>
      <ul className="mt-2 list-disc pl-6 text-white/80 leading-relaxed">
        <li><strong>Operations</strong>: recover throughput, reduce variance, stabilize flows.</li>
        <li><strong>Security</strong>: pre-incident pattern detection and proportionate response.</li>
        <li><strong>Safety</strong>: early detection of smoke, leaks, and unsafe states.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Milestones</h2>
      <ol className="mt-2 list-decimal pl-6 text-white/80 leading-relaxed">
        <li><strong>P0</strong>: single-site loop with measurable gains and safe rollback.</li>
        <li><strong>P1</strong>: capsule promotion across similar sites; operator tools for review.</li>
        <li><strong>P2</strong>: cross-domain coordination (ops + security + safety) with shared context.</li>
      </ol>
    </div>
  );
}
