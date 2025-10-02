// import React from 'react';
// import '../styles/about.css';

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <h2 className="section-title">О нашей компании</h2>
//         <div className="about__content">
//           <div className="about__text">
//             <p className="desription-p">
//               ООО "СК МЕРЕДИАН" - современная строительная компания, 
//               специализирующаяся на выполнении строительно монтажных работ, любой сложности.
//               Расчет, закупка и поставка материалов.
//             </p>
//             {/* Блок с видами работ */}
//             <div className="about__services">
//               <h3>Основные виды работ:</h3>
//               <div className="services__list">
//                 <div className="service__item">
//                   <span className="service__icon">🏗️</span>
//                   <span className="service__text">Кровельные работы</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🏢</span>
//                   <span className="service__text">Фасадные работы</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🔩</span>
//                   <span className="service__text">Монтаж металлоконструкций</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🔥</span>
//                   <span className="service__text">Сварочные работы</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🧱</span>
//                   <span className="service__text">Монтаж сэндвич-панелей</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🎨</span>
//                   <span className="service__text">Внутренняя отделка</span>
//                 </div>
//                 <div className="service__item">
//                   <span className="service__icon">🎨</span>
//                   <span className="service__text">Строительство домов с нуля</span>
//                 </div>
//               </div>
//             </div>
//             <br/>
//             <p>
//               Наша миссия - создавать качественные и надежные объекты, 
//               которые отвечают самым высоким требованиям наших клиентов.
//             </p>
            
//             <div className="about__features">
//               <div className="feature">
//                 <h3>10+ лет</h3>
//                 <p>успешной работы на рынке</p>
//               </div>
//               <div className="feature">
//                 <h3>50+</h3>
//                 <p>реализованных проектов</p>
//               </div>
//               <div className="feature">
//                 <h3>5 лет</h3>
//                 <p>гарантия качества работ</p>
//               </div>
//             </div>
//           </div>
          
//           {/* <div className="about__image">
//             <img src="./images/interior-2-office.png" alt="Строительная компания МЕРЕДИАН" />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState } from 'react';
import '../styles/about.css';

const About = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Кровельные работы',
      icon: '🏗️',
      description: 'Полный комплекс кровельных работ любой сложности с гарантией качества',
      color: '#DD11025'
    },
    {
      id: 2,
      title: 'Фасадные работы',
      icon: '🏢',
      description: 'Современные фасадные решения для зданий любого назначения',
      color: '#104064'
    },
    {
      id: 3,
      title: 'Монтаж металлоконструкций',
      icon: '🔩',
      description: 'Проектирование и монтаж металлических конструкций',
      color: '#C0754D'
    },
    {
      id: 4,
      title: 'Сварочные работы',
      icon: '🔥',
      description: 'Профессиональные сварочные работы любой сложности',
      color: '#B6410F'
    },
    {
      id: 5,
      title: 'Монтаж сэндвич-панелей',
      icon: '🧱',
      description: 'Быстрый и качественный монтаж сэндвич-панелей',
      color: '#104064'
    },
    {
      id: 6,
      title: 'Внутренняя отделка',
      icon: '🎨',
      description: 'Комплексные работы по внутренней отделке помещений',
      color: '#DD11025'
    },
    {
      id: 7,
      title: 'Строительство домов с нуля',
      icon: '🏠',
      description: 'Под ключ: от проекта до сдачи готового объекта',
      color: '#C0754D'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">О нашей компании</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="description-p">
              ООО "СК МЕРЕДИАН" - современная строительная компания, 
              специализирующаяся на выполнении строительно-монтажных работ любой сложности.
              Расчет, закупка и поставка материалов.
            </p>
            
            {/* Обновленный блок с видами работ */}
            <div className="about__services">
              <h3 className="services__title">Основные виды работ:</h3>
              <div className="services__grid">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`service__card ${activeService === service.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(service.id)}
                    onMouseLeave={() => setActiveService(null)}
                    style={{ '--accent-color': service.color }}
                  >
                    <div className="service__header">
                      <span className="service__icon">{service.icon}</span>
                      <h4 className="service__title">{service.title}</h4>
                    </div>
                    <div className="service__description">
                      <p>{service.description}</p>
                    </div>
                    <div className="service__hover-effect"></div>
                  </div>
                ))}
              </div>
            </div>

            <br/>

            <p className='under_p'>
              Наша миссия - создавать качественные и надежные объекты, 
              которые отвечают самым высоким требованиям наших клиентов.
            </p>
            
            <div className="about__features">
              <div className="feature">
                <h3>10+ лет</h3>
                <p>успешной работы на рынке</p>
              </div>
              <div className="feature">
                <h3>50+</h3>
                <p>реализованных проектов</p>
              </div>
              <div className="feature">
                <h3>5 лет</h3>
                <p>гарантия качества работ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;