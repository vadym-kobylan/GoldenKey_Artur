import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

const FormSection = () => {
  const { t } = useTranslation();
  return (
    <section className="form_doubt">
      <h3>{t("form.title")}</h3>
      <p>{t("form.subtitle")}</p>
      <p>
        {t("form.text")}
      </p>

      <div className="form-container">
        <form id="contactForm">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
          </div>

          <button type="button">{t("form.button")}</button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
