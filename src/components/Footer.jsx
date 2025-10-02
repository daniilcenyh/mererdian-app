import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>ООО СК МЕРЕДИАН</h3>
            {/* <p>Профессиональные строительные услуги высшего качества</p> */}
            <p>
              ИНН / КПП - 3663170115/366301001
            </p>
            <p>
              ОГРН - 1243600016472
            </p>
          </div>
          
          <div className="footer__section">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#portfolio">Портфолио</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Контакты</h4>
            <p>+7 (952) 549-22-09</p>
            <p>+7 (980) 348-46-01</p>
            <p>direktgrupp@yandex.ru</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} ООО СК МЕРЕДИАН. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;