import './LatestCreationPage.css';

function LatestCreationPage() {
  return (
    <main className="latest">
      <section className="latest__hero">
        <div className="latest__hero-inner">
          <div className="latest__eyebrow">Latest Creation</div>
          <h1 className="latest__title">
            A launch-ready edit
            <span className="latest__title-accent"> in minutes.</span>
          </h1>
          <p className="latest__subtitle">
            See how Clip turns raw footage into a polished story with color, sound
            and motion already dialed in. Built for creators who care about the
            details but don&apos;t want to lose the momentum.
          </p>
          <div className="latest__hero-actions">
            <a href="#preview" className="latest__btn latest__btn--primary">
              Watch the preview
            </a>
            <a href="#breakdown" className="latest__btn latest__btn--ghost">
              View the breakdown
            </a>
          </div>
          <div className="latest__meta">
            <span>4K export</span>
            <span>32 layered scenes</span>
            <span>Delivered in 6 hours</span>
          </div>
        </div>
      </section>

      <section id="preview" className="latest__preview">
        <div className="latest__preview-inner">
          <div className="latest__preview-player">
            <div className="latest__preview-frame">
              <div className="latest__preview-gradient" />
              <div className="latest__preview-content">
                <span className="latest__preview-tag">Live Edit</span>
                <h2 className="latest__preview-title">City Lights, Soft Focus</h2>
                <p className="latest__preview-text">
                  A 60-second story cut, built from handheld shots, phone footage
                  and voice notes. Stabilised, balanced and ready for every
                  platform in one export.
                </p>
              </div>
            </div>
          </div>

          <aside className="latest__preview-sidebar">
            <h3 className="latest__sidebar-title">Project specs</h3>
            <ul className="latest__spec-list">
              <li>
                <span className="latest__spec-label">Duration</span>
                <span className="latest__spec-value">00:59</span>
              </li>
              <li>
                <span className="latest__spec-label">Aspect ratios</span>
                <span className="latest__spec-value">16:9 · 9:16 · 1:1</span>
              </li>
              <li>
                <span className="latest__spec-label">Color profile</span>
                <span className="latest__spec-value">Cinematic teal &amp; amber</span>
              </li>
              <li>
                <span className="latest__spec-label">Sound design</span>
                <span className="latest__spec-value">Layered SFX + score</span>
              </li>
            </ul>

            <div className="latest__sidebar-card">
              <p className="latest__sidebar-copy">
                Every scene is non-destructive. Jump back into any moment, swap
                takes and re-export in a new ratio without rebuilding the project.
              </p>
              <a href="#cta" className="latest__sidebar-link">
                Try this workflow
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="breakdown" className="latest__grid">
        <div className="latest__grid-inner">
          <div className="latest__grid-card">
            <h3>From rough cut to release</h3>
            <p>
              Start with a loose timeline and let Clip suggest trims, transitions
              and rhythm based on your music and script. Keep full control while
              skipping the mechanical work.
            </p>
          </div>
          <div className="latest__grid-card">
            <h3>Color that matches your scene</h3>
            <p>
              One-click looks tuned to your footage, with subtle film grain,
              halation and bloom that keep skin tones natural and motion crisp.
            </p>
          </div>
          <div className="latest__grid-card">
            <h3>Audio that feels intentional</h3>
            <p>
              Smart ducking, noise cleanup and scene-aware SFX layers make every
              transition feel deliberate, not distracting.
            </p>
          </div>
        </div>
      </section>

      <footer id="cta" className="latest__footer">
        <div className="latest__footer-inner">
          <div>
            <h2 className="latest__footer-title">Ship your next cut faster.</h2>
            <p className="latest__footer-subtitle">
              Start from this template or build your own library of reusable
              edits, looks and audio beds.
            </p>
          </div>
          <div className="latest__footer-actions">
            <a href="#book" className="latest__btn latest__btn--primary">
              Book a demo
            </a>
            <a href="#get-started" className="latest__btn latest__btn--ghost">
              Start for free
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LatestCreationPage;

