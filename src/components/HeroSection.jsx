import './HeroSection.css';
import manImg from '../assets/man.svg';
import girlImg from '../assets/girlsit.svg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__header">
        <h1 className="hero__title">Turn Your Footage Into Professional Video</h1>
        <p className="hero__subtitle">
          We do existing & Storytelling - publish polishing content with Zero editing experience.
        </p>
      </div>

      <div className="hero__content-block">
        <div className="hero__left">
          <img
            src={manImg}
            alt="Man with smartphone"
            className="hero__portrait"
          />
        </div>

        <div className="hero__right">
          <div className="hero__panel hero__panel--top">
            <p className="hero__panel-text">Hello</p>
            <p className="hero__panel-text">clipper leverage budged florist noting quote and varies.</p>
            <p className="hero__panel-text">Higher rentages</p>
          </div>

          <div className="hero__panel hero__panel--grid">
            <div className="hero__grid-item hero__grid-item--1" />
            <div className="hero__grid-item hero__grid-item--2" />
            <div className="hero__grid-item hero__grid-item--3" />
            <div className="hero__grid-item hero__grid-item--4" />
          </div>

          <div className="hero__panel hero__panel--bottom">
            <img
              src={girlImg}
              alt="Woman with smartphone"
              className="hero__panel-image"
            />
            <p className="hero__panel-text">Hello</p>
            <p className="hero__panel-text">clipper leverage budged florist noting quote and varies</p>
            <p className="hero__panel-text">Higher rentages</p>
            <a href="#get-started" className="hero__cta">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
