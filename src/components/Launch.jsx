import './Launch.css';

function Launch() {
  const collageImages = [
    'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <>
      <section className="launch">
        <div className="launch__inner">
          <div className="launch__copy">
            <span className="launch__badge">Details</span>
            <h2 className="launch__title">Loved by Creators Worldwide</h2>
            <p className="launch__subtitle">
              Supporting new waves of storytellers with tools that make video
              feel playful, polished and uniquely personal. From solo editors to
              global teams, Clip keeps the focus on the story.
            </p>
          </div>

          <div className="launch__collage">
            <div className="launch__collage-column launch__collage-column--left">
              <img
                src={collageImages[0]}
                alt="Creator smiling in studio"
                className="launch__collage-img launch__collage-img--tall"
              />
              <img
                src={collageImages[1]}
                alt="Artist holding camera"
                className="launch__collage-img"
              />
            </div>
            <div className="launch__collage-column launch__collage-column--right">
              <img
                src={collageImages[2]}
                alt="Creator posing outdoors"
                className="launch__collage-img"
              />
              <img
                src={collageImages[3]}
                alt="Creator laughing on set"
                className="launch__collage-img launch__collage-img--tall"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="launch-footer" id="launch">
        <div className="launch-footer__inner">
          <div className="launch-footer__tiles launch-footer__tiles--left">
            <span className="launch-footer__tile launch-footer__tile--pink">
              30k+
            </span>
            <span className="launch-footer__tile launch-footer__tile--green">
              Teams
            </span>
          </div>

          <div className="launch-footer__content">
            <h2 className="launch-footer__title">
              Ready to Transform
              <br />
              your Video Production
            </h2>
            <p className="launch-footer__subtitle">
              Join thousands of people who are launching to production with
              workflows built for rapid feedback and beautiful results.
            </p>
            <div className="launch-footer__actions">
              <a href="#get-started" className="launch-footer__btn launch-footer__btn--primary">
                Get Started Free
              </a>
              <a href="#book" className="launch-footer__btn launch-footer__btn--ghost">
                Talk to Sales
              </a>
            </div>
          </div>

          <div className="launch-footer__tiles launch-footer__tiles--right">
            <span className="launch-footer__tile launch-footer__tile--purple">
              HD
            </span>
            <span className="launch-footer__tile launch-footer__tile--orange">
              4K
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Launch;

