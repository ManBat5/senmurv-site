import React from 'react';

export default function SenmurvLaunch() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#top" className="text-white/90 font-medium tracking-tight">
            Senmurv
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-white/70 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#contact"
              className="ml-2 rounded-xl bg-white text-black px-4 py-1.5 font-medium hover:bg-white/90"
            >
              Contact Us
            </a>
          </nav>
          <a
            href="#contact"
            className="sm:hidden rounded-xl bg-white text-black px-3 py-1 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
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
        {/* darken video */}
        <div className="absolute inset-0 bg-black/45" />
        {/* content */}
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            {/* Headline: crisp, authoritative, two lines */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-tight">
              Sovereign AI Automation
              <br />
              for Defense, Infrastructure & Security
            </h1>

            {/* Subtext: smaller/lighter so headline pops */}
            <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl mx-auto">
              We build end-to-end, on-prem intelligence: computer vision,
              access control, and facility automation—integrated into a single
              secure stack.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-white text-black px-6 py-2.5 font-medium hover:bg-white/90"
              >
                Start a Pilot
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/30 px-6 py-2.5 font-medium text-white/90 hover:border-white/60"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* subtle gradient at bottom for legibility */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
                About Senmurv
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                Senmurv builds sovereign AI systems for real-world operations.
                Our stack spans perception (cameras, sensors), decision-making
                (local AI), and action (access control, alarms, automation) to
                secure facilities and optimize critical workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium tracking-tight">Our vision</h3>
              <p className="mt-3 text-white/75 leading-relaxed">
                To give organizations a secure, on-prem intelligent core that
                sees, understands, and acts—without relying on foreign clouds.
                Built in Canada. Designed for defense, infrastructure, and
                enterprise security.
              </p>
              <p className="mt-4 text-white/60 text-sm">
                — Alireza, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center">
            What We Deliver
          </h2>
          <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
            Clear scope. Integrated stack. Real outcomes.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-3xl">🛡️</div>
              <h3 className="mt-3 text-xl font-medium">AI Security</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Facial recognition, license plate recognition, intrusion and
                tamper detection, perimeter zones, and automated response.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-3xl">🏭</div>
              <h3 className="mt-3 text-xl font-medium">Facility Automation</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Access control, alarms, lighting, and environmental controls—tied
                to real-time events using local AI.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-3xl">🤖</div>
              <h3 className="mt-3 text-xl font-medium">Advanced Robotics</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Vision-guided automation and inspection. Prototype to pilot with
                your existing infrastructure.
              </p>
            </div>
          </div>
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

          {/* simple non-functional form placeholder */}
          <form className="mt-8 grid gap-3 text-left">
            <input
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your name"
              type="text"
            />
            <input
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your email"
              type="email"
            />
            <textarea
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 h-28 outline-none focus:border-white/30"
              placeholder="Tell us briefly about your project..."
            />
            <button
              type="button"
              className="rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90"
              title="This is a placeholder—email us for now."
            >
              Send (placeholder)
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Senmurv Technologies Inc.
      </footer>
    </div>
  );
}
