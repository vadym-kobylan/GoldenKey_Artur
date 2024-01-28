import React from 'react';
import '../App.css';

import img1 from '../assets/image/medal_icon.png';
import img2 from '../assets/image/gold_setting_icon.png';
import img3 from '../assets/image/clock_side_icon.png';
import img4 from '../assets/image/target_icon.png';
import img5 from '../assets/image/gold_heart_side_icon.png';
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
  const { t } = useTranslation();
  const whyUsItem = [
    {
      img: img1,
      title: t('whyUs.itemTitle1'),
      sub: t('whyUs.itemText1'),
    },
    {
      img: img2,
      title: t('whyUs.itemTitle2'),
      sub: t('whyUs.itemText2'),
    },
    {
      img: img3,
      title: t('whyUs.itemTitle3'),
      sub: t('whyUs.itemText3'),
    },
    {
      img: img4,
      title: t('whyUs.itemTitle4'),
      sub: t('whyUs.itemText4'),
    },
    {
      img: img5,
      title: t('whyUs.itemTitle5'),
      sub: t('whyUs.itemText5'),
    },
  ];

  return (
    <section className="why_us" id={t('linksId.whyUs')}>
      <h2>{t('whyUs.title')}</h2>

      {whyUsItem.map(({ sub, img, title }) => (
        <div className="why_us_content" key={img + title}>
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
