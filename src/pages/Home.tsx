
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedHeadline from "../components/AnimatedHeadline";

const pills = [
  { label: "Defense & Infrastructure", slug: "defense-infrastructure" },
  { label: "Working Intelligence", slug: "working-intelligence" },
  { label: "On-Prem", slug: "on-prem" },
  { label: "R&D", slug: "rd" },
  { label: "Security", slug: "security" },
  { label: "Operations", slug: "operations" },
];

export default function Home() {
  const nav = useNavigate();

  function scrollDown() {
    const el = document.getElementById("after-hero");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-black text-white font-inter">
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay muted loop playsInline
          poster="/poster.jpg"
        />
        {/* gradient overlay + blur bar for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/55" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[760px] h-36 sm:h-40 backdrop-blur-[6px] rounded-full"></div>

        {/* center text */}
        <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
          <AnimatedHeadline
            lines={[
              "AGI-POWERED",
              "INTELLIGENCE",
              "FOR EVERY OPERATION"
            ]}
            className="hero-text font-head text-[34px] sm:text-[54px] leading-[1.08] tracking-[0.26em]"
            startDelaySec={0.06}
            perCharDelaySec={0.03}
            lineStaggerSec={0.22}
          />
        </div>

        {/* scroll cue (bounces + actually scrolls) */}
        <button
          onClick={scrollDown}
          className="group absolute left-1/2 -translate-x-1/2 bottom-6 text-white/80 hover:text-white text-xs"
          aria-label="Scroll"
        >
          <div className="scroll-indicator mx-auto h-10 w-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/70 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="mt-2 tracking-wide">Scroll</div>
        </button>
      </section>

      {/* AFTER HERO CONTENT */}
      <section id="after-hero" className="mx-auto max-w-7xl px-4 py-10">
        {/* pills / categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pills.map((p) => (
            <button
              key={p.slug}
              onClick={() => nav(`/topics/${p.slug}`)}
              className="pill"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* two feature cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/about" className="block rounded-2xl bg-neutral-900 border border-white/10 hover:border-white/20">
            <div className="aspect-[16/9] rounded-t-2xl bg-gradient-to-br from-neutral-800 to-neutral-700" />
            <div className="p-5">
              <div className="text-lg font-semibold">Vision &amp; Purpose</div>
              <p className="text-sm text-white/70 mt-2">
                Not automation. A living system that perceives, acts, and gets wiser in operation.
              </p>
              <div className="mt-3 text-sm text-white/80">Read the full vision →</div>
            </div>
          </Link>

          <Link to="/rd" className="block rounded-2xl bg-neutral-900 border border-white/10 hover:border-white/20">
            <div className="aspect-[16/9] rounded-t-2xl bg-gradient-to-br from-neutral-800 to-neutral-700" />
            <div className="p-5">
              <div className="text-lg font-semibold">Research &amp; Development</div>
              <p className="text-sm text-white/70 mt-2">
                Multi-agent AGI: causal perception, world models, governed learning, controlled action.
              </p>
              <div className="mt-3 text-sm text-white/80">Explore R&amp;D →</div>
            </div>
          </Link>
        </div>
      </section>

      {/* bottom CTAs */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-6 md:grid-cols-2">
        <Link to="/get-started" className="block rounded-2xl border border-white/15 hover:border-white/30 p-6">
          <div className="text-lg font-semibold mb-2">Request a Pilot</div>
          <p className="text-sm text-white/70">
            Scope a measurable, on-prem pilot with guardrails and rollback built in.
          </p>
          <div className="mt-4">→</div>
        </Link>

        <a href="#footer" className="block rounded-2xl border border-white/15 hover:border-white/30 p-6">
          <div className="text-lg font-semibold mb-2">Contact Us</div>
          <p className="text-sm text-white/70">Email hello@senmurv.ai — we’re in active R&amp;D.</p>
          <div className="mt-4">→</div>
        </a>
      </section>
    </div>
  );
}
