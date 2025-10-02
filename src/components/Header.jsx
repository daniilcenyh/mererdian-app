import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span>Строительная компания</span>
            <h1>ООО СК МЕРЕДИАН</h1>
            <p>
              ИНН / КПП - 3663170115/366301001
            </p>
            <p>
              ОГРН - 1243600016472
            </p>
          </div>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <button onClick={() => scrollToSection('about')}>О нас</button>
            <button onClick={() => scrollToSection('portfolio')}>Портфолио</button>
            <button onClick={() => scrollToSection('contacts')}>Контакты</button>
          </nav>

          <button 
            className="header__burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;