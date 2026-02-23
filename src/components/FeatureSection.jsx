import './FeatureSection.css';

function FeatureSection() {
  const statCards = [
    { label: 'Active Users', value: '50k', color: 'features__card--lavender' },
    { label: 'Active Users', value: '50k', color: 'features__card--mint' },
    { label: 'Active Users', value: '50k', color: 'features__card--peach' },
    { label: 'Active Users', value: '50k', color: 'features__card--blue' },
  ];

  const avatarUrls = [
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
    'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80',
    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=80',
  ];

  const bubbleWords = [
    'Customized',
    'Customized',
    'Customized',
    'Customized',
    'Customized',
    'Customized',
  ];

  return (
    <section className="features" id="features">
      <div className="features__inner">
        <header className="features__header">
          <div className="features__avatars">
            {avatarUrls.map((url, index) => (
              <div className="features__avatar-wrapper" key={url}>
                <img
                  src={url}
                  alt={`Happy customer ${index + 1}`}
                  className="features__avatar"
                />
              </div>
            ))}
          </div>

          <p className="features__eyebrow">
            Trusted by creative teams, educators, storytellers and brands WORLDWIDE
          </p>
        </header>

        <div className="features__stats-row">
          {statCards.map((card) => (
            <article
              key={card.color}
              className={`features__card ${card.color}`}
            >
              <div className="features__card-icon">
                <span className="features__card-arrow">↗</span>
              </div>
              <p className="features__card-label">{card.label}</p>
              <p className="features__card-value">{card.value}</p>
            </article>
          ))}
        </div>

        <div className="features__content">
          <div className="features__copy">
            <span className="features__badge">No Editing Headache</span>
            <h2 className="features__title">
              All Are Without
              <br />
              Editing Complexity.
            </h2>
            <p className="features__description">
              Everything you need to create professional videos without the
              complexity of traditional editing software. Designed for teams
              who care about story, not settings.
            </p>
          </div>

          <div className="features__bubbles">
            {bubbleWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={`features__bubble features__bubble--${(index % 6) + 1}`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

