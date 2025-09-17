import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/senmurv.png" alt="Senmurv" className="h-8 w-8 rounded-md object-contain" />
          <span className="text-white/90 font-medium tracking-tight">Senmurv</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-white/70 text-sm">
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-white' : 'hover:text-white'}>About</NavLink>
          <NavLink to="/research" className={({isActive}) => isActive ? 'text-white' : 'hover:text-white'}>R&amp;D</NavLink>
          <a href="mailto:hello@senmurv.ai" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
