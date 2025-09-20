
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="bg-black">
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
        />
        <div className="absolute inset-0 bg-black/45" />
        {/* blur stripe */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[760px] h-36 sm:h-40 backdrop-blur-[6px] rounded-full"></div>

        <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="font-head text-[36px] sm:text-[56px] leading-[1.1] tracking-[0.25em]">
              AGI-POWERED
              <br />
              INTELLIGENCE
              <br />
              FOR EVERY OPERATION
            </h1>

            <div className="mt-6">
              <Link
                to="/get-started"
                className="inline-block rounded-full bg-white text-black text-sm font-medium px-5 py-2 hover:bg-white/90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <button
          onClick={() => document.getElementById("after-hero")?.scrollIntoView({ behavior: "smooth" })}
          className="group absolute left-1/2 -translate-x-1/2 bottom-5 text-white/70 text-xs"
          aria-label="Scroll"
        >
          <div className="h-8 w-8 rounded-full border border-white/40 grid place-content-center group-hover:border-white/70 transition">
            ↓
          </div>
          <div className="mt-1">Scroll</div>
        </button>
      </section>

      {/* AFTER HERO */}
      <section id="after-hero" className="mx-auto max-w-7xl px-4 py-10">
        {/* filters / pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pills.map((p) => (
            <button
              key={p.slug}
              onClick={() => nav(`/topics/${p.slug}`)}
              className="rounded-full bg-white text-black/90 text-xs sm:text-[13px] px-3.5 py-1.5 hover:bg-white/90"
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
                Multi-agent AGI: causal perception, autonomous orchestration, governed learning.
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
          <p className="text-sm text-white/70">Email hello@senmurv.ai. We’re in active R&amp;D.</p>
          <div className="mt-4">→</div>
        </a>
      </section>
    </div>
  );
}
