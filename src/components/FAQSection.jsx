import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const FAQSection = () => {
  const { t } = useTranslation();
  const questionList = t('faq.faqItems', { returnObjects: true });



  const [activeItem, setActiveItem] = useState([0]);

  const handleUpdate = (index) => {
    if (activeItem.includes(index)) {
      const newArray = activeItem.filter((item) => item !== index);
      setActiveItem(newArray);
    } else {
      setActiveItem([...activeItem, index]);
    }
  };

  return (
    <section id="FAQ">
      <h2>{t('faq.title')}</h2>

      <div className="questions-wrapper">
        {questionList.map(({ question, answer }, index) => (
          <div
            className={activeItem.includes(index) ? 'question-block selected' : 'question-block'}
            onClick={() => handleUpdate(index)}
            key={index}>
            <div className="question-top">
              <h3 className="question">{question}</h3>
              <div className="qestion-icon">+</div>
            </div>
            <p className="answer">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
