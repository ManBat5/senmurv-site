import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen text-white">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/senmurv.png" alt="Senmurv" className="h-5 w-5" />
            <span className="font-inter text-sm tracking-wide">Senmurv</span>
          </Link>

          <nav className="flex items-center gap-6">
            <NavLink to="/about" className="text-sm text-white/80 hover:text-white">About</NavLink>
            <NavLink to="/rd" className="text-sm text-white/80 hover:text-white">R&amp;D</NavLink>
            <a href="#footer" className="text-sm text-white/80 hover:text-white">Contact</a>

            <Link
              to="/get-started"
              className="rounded-full border border-white/30 px-3 py-1.5 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className={pathname === "/" ? "" : "pt-16"}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="footer" className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-white/70">
          <div>
            <div className="text-white/90">© {new Date().getFullYear()} Senmurv Technologies Inc.</div>
            <div className="mt-2">hello@senmurv.ai</div>
          </div>
          <div>
            <div className="text-white/90 mb-2">Solutions</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              <Link to="/topics/operations" className="hover:text-white">Operations Stability</Link>
              <Link to="/topics/security" className="hover:text-white">Security Intelligence</Link>
              <Link to="/topics/safety" className="hover:text-white">Safety &amp; Environment</Link>
              <Link to="/topics/on-prem" className="hover:text-white">On-Prem AGI</Link>
            </div>
          </div>
          <div>
            <div className="text-white/90 mb-2">Company</div>
            <div className="grid gap-1">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/rd" className="hover:text-white">R&amp;D</Link>
              <Link to="/get-started" className="hover:text-white">Get Started</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
