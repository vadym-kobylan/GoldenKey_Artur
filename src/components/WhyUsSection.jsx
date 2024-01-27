import React from 'react';
import '../App.css';

import img1 from '../assets/image/medal_icon.png';
import img2 from '../assets/image/gold_setting_icon.png';
import img3 from '../assets/image/clock_side_icon.png';
import img4 from '../assets/image/target_icon.png';
import img5 from '../assets/image/gold_heart_side_icon.png';

const WhyUs = () => {
  const whyUsItem = [
    {
      img: img1,
      title: 'Erfahrung und Verlässlichkeit',
      sub: 'Über 10 jährige Erfahrung in Bereich Schlüsseldienst und Aufsperrdienst...',
    },
    {
      img: img2,
      title: 'Schadenfrei',
      sub: 'Alle Aufsperrungen sind schadenfrei, sodass sie ihre Türe weite nutzen dürfen.',
    },
    {
      img: img3,
      title: 'Einsatzbereit 24/7',
      sub: 'Unser Team ist für sie rund um die Uhr erreichbar, auch sonn und Feiertage...',
    },
    {
      img: img4,
      title: 'Schnelle Reaktion',
      sub: 'Wir werden uns zeitnah nach Ihrer Anfrage bei Ihnen melden',
    },
    {
      img: img5,
      title: 'Kostenlose Beratung',
      sub: 'Wir bieten professionelle und kostenlose Beratung zum Schutz Ihrer Türen und Schlösser',
    },
  ];

  return (
    <section className="why_us" id="warum-wir">
      <h2>Warum wir</h2>

      {whyUsItem.map(({ sub, img, title }) => (
        <div className="why_us_content">
          <div className="why-image-wrapper">
            <img src={img} alt={title} />
          </div>
          <div className="why-text-wrapper">
            <h4 className="why-title">{title}</h4>
            <p className="why-subtitle">{sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyUs;
