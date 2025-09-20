export default function Footer() {
  return (
    <footer className="section-light">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="text-sm muted">© {new Date().getFullYear()} Senmurv Technologies Inc.</div>
            <div className="mt-3 text-sm">
              <a href="mailto:hello@senmurv.ai" className="link-ghost">hello@senmurv.ai</a>
            </div>
          </div>

          <div>
            <div className="font-medium mb-3">Solutions</div>
            <ul className="space-y-2 text-sm muted">
              <li>Operations Stability</li>
              <li>Security Intelligence</li>
              <li>Safety &amp; Environment</li>
              <li>On-Prem AGI</li>
            </ul>
          </div>

          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm muted">
              <li><a href="/about" className="link-ghost">About</a></li>
              <li><a href="/research" className="link-ghost">R&amp;D</a></li>
              <li><a href="/get-started" className="link-ghost">Get Started</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm muted">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs muted">
          Built with ❤️ in Canada. Sovereign &amp; on-prem by design.
        </div>
      </div>
    </footer>
  );
}
