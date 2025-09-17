import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-center">About Senmurv</h1>
          <p className="mt-6 text-white/80 leading-relaxed text-lg text-center">
            Senmurv is a mission to build <span className="text-white/95">living intelligence</span> that perceives,
            acts, and evolves in the physical world. We’re not a dashboard company—we fuse hardware and intelligence
            into one fabric and measure progress by outcomes, not screenshots.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Decision-maker, not dashboard</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                One brain across operations, safety, and security—built to act, not just report.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Accountable improvement</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Guardrails, canaries, instant rollback, and proof of gain—otherwise it doesn’t ship.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-lg font-medium">Sovereign by design</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Hardened, closed, and portable knowledge capsules—share skills without exposing raw data.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
