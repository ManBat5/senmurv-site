import React from "react";

export default function RD() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 pb-24">
      <h1 className="font-head text-4xl tracking-[.18em] mb-6">Research & Development</h1>

      <p className="text-white/80 leading-relaxed">
        Our focus is a multi-agent AGI that builds a causal model of the world, forecasts likely futures,
        selects safe actions, and measures impact — improving every day without waiting for humans to write
        new rules. Learning is governed: improvements pass through guardrails and canaries, and regressions
        roll back instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-2xl border border-white/15 p-5 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-2">Starting domains</h2>
          <ul className="text-sm text-white/75 space-y-1.5">
            <li>Operations: recover throughput, prevent downtime, stabilize flows.</li>
            <li>Security: detect pre-incident patterns; respond with proportionate, non-lethal deterrence.</li>
            <li>Safety & environment: detect smoke/leaks early; act before harm spreads.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 p-5 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-2">Knowledge capsules</h2>
          <p className="text-sm text-white/75">
            Proven skills are distilled into signed capsules that can be shared safely across sites so gains in
            one environment strengthen the rest.
          </p>
        </div>
      </div>

      <p className="text-white/80 leading-relaxed mt-8">
        Long-term, the goal is a distributed nervous system: wildfire sentinels catching micro-ignitions,
        urban guardians rerouting flows before congestion or crisis, and infrastructure that improves with use.
      </p>
    </div>
  );
}
