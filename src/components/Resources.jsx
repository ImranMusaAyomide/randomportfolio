import './Resources.css';

function Resources() {
  return (
    <main className="resources">
      {/* Page header section (local to this page) */}
      <header className="resources__header">
        <div className="resources__header-inner">
          <p className="resources__eyebrow">Resources</p>
          <h1 className="resources__title">
            Guides, templates &amp; workflows
            <span className="resources__title-accent"> for faster edits.</span>
          </h1>
          <p className="resources__subtitle">
            Hand-picked resources that help you plan, shoot and edit with more
            clarity. Built for creators shipping campaigns, content calendars and
            client work on tight timelines.
          </p>
        </div>
      </header>

      {/* Main content area */}
      <section className="resources__main">
        <div className="resources__main-inner">
          <section className="resources__highlight">
            <div className="resources__highlight-copy">
              <h2>Launch Toolkit</h2>
              <p>
                A ready-to-use project pack with shot lists, edit checklists and a
                delivery playbook. Reuse it across launches so every project feels
                consistent, not chaotic.
              </p>
              <ul className="resources__pill-list">
                <li>Campaign brief template</li>
                <li>Shot planning board</li>
                <li>Export checklist</li>
              </ul>
              <a href="#library" className="resources__btn resources__btn--primary">
                Browse the full library
              </a>
            </div>
            <div className="resources__highlight-card">
              <p className="resources__highlight-metric">+40%</p>
              <p className="resources__highlight-label">
                average time saved from first draft to final export
              </p>
            </div>
          </section>

          <section id="library" className="resources__grid">
            <article className="resources__card">
              <h3>Editing checklists</h3>
              <p>
                Step-by-step flows for assembling a rough cut, refining pacing and
                locking color and sound without redoing work.
              </p>
              <span className="resources__tag">Workflow</span>
            </article>
            <article className="resources__card">
              <h3>Story templates</h3>
              <p>
                Modular timelines for product launches, case studies and social
                teasers you can adapt to your own voice.
              </p>
              <span className="resources__tag">Template</span>
            </article>
            <article className="resources__card">
              <h3>Client-ready exports</h3>
              <p>
                Naming systems and delivery folders that keep versions clear and
                feedback focused, even on fast-moving teams.
              </p>
              <span className="resources__tag">Delivery</span>
            </article>
          </section>
        </div>
      </section>

      {/* Page footer section (local to this page) */}
      <footer className="resources__footer">
        <div className="resources__footer-inner">
          <div>
            <h2 className="resources__footer-title">
              Add these resources to your next project.
            </h2>
            <p className="resources__footer-subtitle">
              Duplicate the toolkit, tweak it to your process and keep your
              favourite setups one click away.
            </p>
          </div>
          <div className="resources__footer-actions">
            <a href="#book" className="resources__btn resources__btn--primary">
              Talk to our team
            </a>
            <a href="#get-started" className="resources__btn resources__btn--ghost">
              Start for free
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Resources;

