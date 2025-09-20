import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavItems = ({onClick}:{onClick?:()=>void}) => (
    <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-white/80 text-sm">
      <NavLink to="/about" onClick={onClick} className="nav-link hover:text-white">About</NavLink>
      <NavLink to="/research" onClick={onClick} className="nav-link hover:text-white">R&amp;D</NavLink>
      <a href="mailto:hello@senmurv.ai" onClick={onClick} className="nav-link hover:text-white">Contact</a>
    </nav>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/senmurv.png" alt="Senmurv" className="h-8 w-8 rounded object-contain" />
          <span className="text-white/90 font-medium tracking-tight">Senmurv</span>
        </Link>

        <div className="hidden sm:block">
          <NavItems />
        </div>

        <button aria-label="Menu" className="sm:hidden text-white/90" onClick={() => setOpen(!open)}>
          {!open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-white/10 px-4 pb-4 pt-3 bg-black/70">
          <NavItems onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
