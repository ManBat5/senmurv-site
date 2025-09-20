import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="font-headline text-4xl sm:text-5xl uppercase tracking-[0.06em] text-center">Vision &amp; Purpose</h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Senmurv isn’t an automation company. It’s a refusal to accept fragile, reactive systems—and a mission to build
            <span className="text-white"> real-world AGI</span>: living intelligence that perceives, understands, acts, and
            evolves in the physical world. It proves itself in operation and grows wiser with every cycle.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Who We Are</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            We’re builders and integrators who stitch hardware and intelligence into one fabric. We don’t spoon-feed rules.
            We build a system that takes initiative, learns from outcomes, and refines itself in reality—decision-maker, not dashboard.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Why We Exist</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Complexity is outrunning playbooks—grids strain, factories drift, security perimeters are tested.
            Rule-based automation can’t keep pace, and humans can’t chase every alarm. We exist to replace fragility with
            intelligence that adapts instantly and turns chaos into resilience.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">The Whole Point</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            The goal isn’t “more automation”—it’s to <em>transcend</em> automation. Senmurv builds a multi-agent system that
            constructs its own models of reality, tests hypotheses in operation, and proves improvements with measurable outcomes.
            What works is distilled into portable <strong>knowledge capsules</strong> that strengthen every deployment.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">What Makes Us Different</h2>
          <ul className="mt-3 list-disc pl-6 text-white/80 leading-relaxed">
            <li>Decision-maker, not dashboard; outcomes over instructions.</li>
            <li>Self-supervising with guardrails, canaries, instant rollback—prove the gain or revert.</li>
            <li>One unified brain spanning operations, safety, security, and environment; sovereign & hardened.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
