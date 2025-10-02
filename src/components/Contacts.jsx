// 

import React, { useState } from 'react';
import '../styles/contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const sendToWhatsApp = () => {
    const phoneNumber = '79803484601'; // Ваш номер без +7
    const message = `Новая заявка:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AСообщение: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверяем заполнены ли обязательные поля
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните обязательные поля: Имя и Телефон');
      return;
    }

    // Отправляем в WhatsApp
    sendToWhatsApp();
    
    // Очищаем форму после отправки
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    alert('Заявка отправлена! Откроется чат WhatsApp.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        
        <div className="contacts__content">
          <div className="contacts__info">
            <h3>Контактная информация</h3>
            <div className="contact-item">
              <strong>Адрес:</strong>
              <p>г. Воронеж, ул. Конструкторов, д. 31, офис 7</p>
            </div>
            <div className="contact-item">
              <strong>Телефон:</strong>
              <p>+7 (952) 549-22-09 - Гостев Сергей Александрович</p>
              <p>+7 (980) 348-46-01 - Черных Николай Николаевич</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>direktgrupp@yandex.ru</p>
            </div>
            <div className="contact-item">
              <strong>Режим работы:</strong>
              <p>Пн-Сб: 9:00-21:00</p>
            </div>
          </div>

          <form className="contacts__form" onSubmit={handleSubmit}>
            <h3>Оставьте заявку</h3>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Отправить в WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;