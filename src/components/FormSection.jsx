import React, { useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

const FormSection = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    if (name === '' || phoneNumber === '') {
      setErrorMessage(t('form.errorMessage'));
    } else {
      try {
        fetch('https://api.goldenkey-wien.com/message/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phoneNumber,
          }),
        });

        setName('');
        setPhoneNumber('');
        setErrorMessage('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="form_doubt">
      <h3>{t('form.title')}</h3>
      <p>{t('form.subtitle')}</p>
      <p>{t('form.text')}</p>

      <div className="form-container">
        <form id="contactForm">
          <div className="form-group">
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <p className={errorMessage === '' ? 'errorMessage phone' : 'errorMessage show phone'}>
            {errorMessage}
          </p>

          <button onClick={handleClick} type="button">
            {t('form.button')}
          </button>
        </form>
        <p className={errorMessage === '' ? 'errorMessage' : 'errorMessage show'}>{errorMessage}</p>
      </div>
    </section>
  );
};

export default FormSection;
