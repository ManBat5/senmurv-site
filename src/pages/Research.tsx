import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Research() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-center">
            Research &amp; Development
          </h1>
          <p className="mt-4 text-white/75 text-center max-w-3xl mx-auto">
            We’re in active R&amp;D: building technology that doesn’t exist yet, and proving it step-by-step in reality.
          </p>

          {/* Mission */}
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">The Mission</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Senmurv is not an automation vendor. It is a pursuit of real-world AGI—intelligence that learns, acts, and
            improves itself in the physical world with minimal human intervention. The principle is simple and profound:
            <strong> outcomes over instructions</strong>. {/* doc language */}
          </p>

          {/* What we're building */}
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">What We’re Building</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            A multi-agent system that senses through cameras, sensors, and signals and fuses them into a coherent world
            model. It understands drift and causality, simulates possible futures, selects safe and effective actions, and
            then acts—adjusting workflows, securing doors, deploying drones, redirecting power and light. Every action is
            measured for causal impact; every outcome feeds back into policy. The system learns continuously.
          </p>

          {/* Governance */}
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Governed Self-Improvement</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Intelligence without oversight is dangerous. Every improvement is tested against guardrails, promoted through
            canaries, and rolled back instantly on regression. Successes distill into <strong>knowledge capsules</strong>—proven
            skills that can be shared across the fleet so gains compound while data stays protected.
          </p>

          {/* Proving grounds */}
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Where We’re Proving It</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Operations</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Recover throughput, prevent downtime, reduce waste, and stabilize flows with causal control loops.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Security</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Anticipate suspicious behavior, detect pre-incident patterns, and respond with proportionate, non-lethal deterrence.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Safety</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Detect smoke and leaks early, contain spills, and neutralize hazards before they escalate.
              </p>
            </div>
          </div>

          {/* Why it matters / seeds of larger system */}
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Why It Matters</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            The seeds are already visible: wildfire sentinels catching micro-ignitions, urban guardians rerouting flows
            before congestion or crisis, planetary loops that treat forests, grids, watersheds, and logistics as one coupled
            environment. This is a living, distributed brain that learns in one place and strengthens all others.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
