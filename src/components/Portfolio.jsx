import React, { useState } from 'react';
import '../styles/portfolio.css';

// Импортируем изображение из той же папки components
import interiorOffice from './images/interior-2-office.png';
import krovlya from './images/krovlya.png'
import krovlya2 from './images/krovlya2.png'
import stroitelmagazin from './images/stroitel-magazin.png'
import fakelMetal from './images/fakel-metal.png'
import metalConst from './images/metalConst.png'


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Устройство каркаса фронтона',
      category: 'roofing',
      image: krovlya,
      description: 'Полный цикл кровельных работ включая монтаж стропильной системы, утепление и гидроизоляцию. Использованы современные материалы для долговечной эксплуатации.'
    },
    {
      id: 2,
      title: 'Монтаж металлочерепицы',
      category: 'roofing',
      image: krovlya2,
      description: 'Качественный монтаж металлочерепицы с системой вентиляции и снегозадержателями. Гарантия на работы - 5 лет.'
    },
    {
      id: 3,
      title: 'Отделка фасада коммерческого здания',
      category: 'facade',
      image: interiorOffice,
      description: 'Фасадные работы с применением современных штукатурных систем и утепления. Выполнена гидроизоляция и декоративная отделка.'
    },
    {
      id: 4,
      title: 'Реконструкция исторического фасада',
      category: 'facade',
      image: interiorOffice,
      description: 'Восстановление исторического облика здания с сохранением архитектурных элементов. Использованы традиционные материалы.'
    },
    {
      id: 5,
      title: 'Каркас торгового центра',
      category: 'welding',
      image: interiorOffice,
      description: 'Монтаж металлоконструкций каркаса торгового центра площадью 5000 м². Соблюдены все нормативы и сроки.'
    },
    {
      id: 6,
      title: 'Несущие конструкции склада',
      category: 'welding',
      image: interiorOffice,
      description: 'Возведение несущих металлоконструкций складского комплекса. Применены усиленные профили и надежные соединения.'
    },
    {
      id: 7,
      title: 'Монтаж металлоконструкций промышленного здания',
      category: 'metal',
      image: metalConst,
      description: 'Полный цикл работ с соблюдением всех технических стандартов. Профессиональная команда, современное оборудование, гарантия качества.'
    },
    {
      id: 8,
      title: 'Монтаж ограждающих конструкций на стадионе "Факел"',
      category: 'metal',
      image: fakelMetal,
      description: 'Сварка и монтаж ограждающих конструкций с антикоррозийной обработкой. Использована аргоновая сварка.'
    },
    {
      id: 9,
      title: 'Панели производственного цеха',
      category: 'sandwich',
      image: interiorOffice,
      description: 'Монтаж сэндвич-панелей для производственного цеха. Обеспечена высокая теплоизоляция и герметичность.'
    },
    {
      id: 10,
      title: 'Офисное здание из СИП-панелей',
      category: 'sandwich',
      image: interiorOffice,
      description: 'Быстровозводимое офисное здание из сэндвич-панелей. Срок монтажа - 2 недели, отличные теплотехнические характеристики.'
    },
    {
      id: 11,
      title: 'Отделка строительного магазина',
      category: 'interior',
      image: stroitelmagazin,
      description: 'Комплексная внутренняя отделка строительного магазина с использованием лучших материалов. Дизайнерский подход к каждому элементу.'
    },
    {
      id: 12,
      title: 'Ремонт офисных помещений',
      category: 'interior',
      image: interiorOffice,
      description: 'Капитальный ремонт офисных помещений с перепланировкой. Установлены современные системы освещения и вентиляции.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Наши проекты</h2>
        
        <div className="portfolio__filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            Все проекты
          </button>
          <button 
            className={activeFilter === 'roofing' ? 'active' : ''}
            onClick={() => setActiveFilter('roofing')}
          >
            Кровельные работы
          </button>
          <button 
            className={activeFilter === 'facade' ? 'active' : ''}
            onClick={() => setActiveFilter('facade')}
          >
            Фасадные работы
          </button>
          <button 
            className={activeFilter === 'metal' ? 'active' : ''}
            onClick={() => setActiveFilter('metal')}
          >
            Монтаж металлоконструкций
          </button>
          <button 
            className={activeFilter === 'welding' ? 'active' : ''}
            onClick={() => setActiveFilter('welding')}
          >
            Сварочные работы
          </button>
          <button 
            className={activeFilter === 'sandwich' ? 'active' : ''}
            onClick={() => setActiveFilter('sandwich')}
          >
            Монтаж сэндвич-панелей
          </button>
          <button 
            className={activeFilter === 'interior' ? 'active' : ''}
            onClick={() => setActiveFilter('interior')}
          >
            Внутренняя отделка
          </button>
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio__item">
              <img src={project.image} alt={project.title} />
              <div className="portfolio__overlay">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <span className="portfolio__category">{getCategoryLabel(project.category)}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="portfolio__empty">
            <p>Проекты в выбранной категории пока отсутствуют</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Функция для отображения читаемых названий категорий
const getCategoryLabel = (category) => {
  const labels = {
    roofing: 'Кровельные работы',
    facade: 'Фасадные работы',
    metal: 'Металлоконструкции',
    welding: 'Сварочные работы',
    sandwich: 'Сэндвич-панели',
    interior: 'Внутренняя отделка'
  };
  return labels[category] || category;
};

export default Portfolio;