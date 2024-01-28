import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const FAQSection = () => {
  const { t } = useTranslation();
  const questionList = [
    {
      question: 'Wie schnell wird der Handwerker kommen?',
      answer:
        'Normalerweise bemühen wir uns, so schnell wie möglich bei Ihnen zu sein, in der Regel innerhalb von 20-30 Minuten nach Erhalt Ihres Anrufs.',
    },
    {
      question: 'Werden die Türen beim Öffnen beschädigt?',
      answer:
        'Wir tun unser Bestes, um jegliche Beschädigungen an Ihrer Tür oder dem Schloss während des Öffnungsvorgangs zu vermeiden. In 99% der Fälle bleiben die Türen unbeschädigt!',
    },
    {
      question: 'Wie kann ich für die Dienstleistungen bezahlen?',
      answer:
        'Sie können bar bezahlen oder bargeldlose Zahlungsmethoden wie Kreditkarten oder E-Wallets nutzen. Nach Abschluss der Arbeiten wird unser Handwerker Ihnen eine Rechnung ausstellen, auf der der Betrag und die Zahlungsmethode angegeben sind.',
    },
    {
      question: 'Muss man sich Ausweisen?',
      answer: 'Wenn der Techniker vor Ort ist, muss man sich ausweisen ( lichtbildausweis)',
    },
  ];

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
