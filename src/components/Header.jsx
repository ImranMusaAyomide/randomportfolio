import './Header.css';
import { Link } from 'react-router-dom';
import clipLogo from '../assets/clip-logo.svg';

function Header() {
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Latest Creation', href: '/latest' },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={clipLogo} alt="Clip" className="header__logo-img" />
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link to={link.href} className="header__nav-link">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="header__nav-link">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#login" className="header__login">Login</a>
          <a href="#book" className="header__cta">Book a Call</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
