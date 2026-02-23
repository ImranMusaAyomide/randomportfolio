import './ImgGallary.css';

function ImgGallary() {
  const avatarUrls = [
    'https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=140',
    'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=140',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=140',
    'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=140',
    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=140',
  ];

  const creatorCards = [
    { color: 'imgg__panel--blue' },
    { color: 'imgg__panel--peach' },
    { color: 'imgg__panel--green' },
    { color: 'imgg__panel--violet' },
  ];

  const reelUrl =
    'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=640';

  return (
    <section className="imgg" id="gallery">
      <div className="imgg__inner">
        <div className="imgg__avatar-strip">
          {avatarUrls.map((url, index) => (
            <figure className="imgg__avatar-card" key={url}>
              <img
                src={url}
                alt={`Creator ${index + 1}`}
                className="imgg__avatar-img"
              />
            </figure>
          ))}
        </div>

        <header className="imgg__header">
          <p className="imgg__eyebrow">Clip for every team</p>
          <h2 className="imgg__title">
            Built for Every
            <br />
            Creator
          </h2>
          <p className="imgg__subtitle">
            Wishing your team a better, more advanced future with workflows that
            keep everyone in flow.
          </p>
        </header>

        <div className="imgg__list">
          {creatorCards.map((card, index) => (
            <article className="imgg__row" key={card.color + index}>
              <div className="imgg__thumbnail-wrap">
                <img
                  src={reelUrl}
                  alt="Team collaborating in studio"
                  className="imgg__thumbnail"
                />
                <span className="imgg__thumbnail-tag">Creator Stories</span>
              </div>

              <div className={`imgg__panel ${card.color}`}>
                <p className="imgg__panel-eyebrow">For Digital</p>
                <h3 className="imgg__panel-title">Marketing Teams</h3>
                <p className="imgg__panel-sub">
                  Ship campaigns faster with templates tuned for social,
                  product, and brand storytelling.
                </p>
                <ul className="imgg__bullets">
                  <li>Collaborative review links for every cut.</li>
                  <li>Brand-safe presets in a single click.</li>
                  <li>Share-ready exports for every channel.</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImgGallary;

