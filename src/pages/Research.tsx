import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Research() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-center">Research &amp; Development</h1>
          <p className="mt-4 text-white/75 text-center max-w-3xl mx-auto">
            We’re in active R&amp;D—building technology that doesn’t exist yet. Initial proving grounds:
            operations stability, pre-incident security, and safety containment.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Causal Perception &amp; World Models</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Understand drift and causality, simulate futures, select safe/effective actions, and learn from
                measured impact.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Autonomous Orchestration</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Doors, drones, power, light—coordinated end-to-end with outcomes over instructions.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Governed Self-Improvement</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Guardrails, canary promotion, instant rollback, and portable knowledge capsules—so learning stays accountable.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
