import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Строительная компания <br />
            <span>МЕРЕДИАН</span>
          </h1>
          <p className="hero__subtitle">
            Профессиональное строительство и ремонт под ключ. 
            Качество, надежность и соблюдение сроков.
          </p>
          <button 
            className="hero__cta"
            onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;