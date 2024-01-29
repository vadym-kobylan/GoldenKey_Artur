import React, { useState } from 'react';
import '../App.css';

import img1 from '../assets/image/gold_key_topright_icon.png';
import img2 from '../assets/image/lock_side_icon.png';
import img3 from '../assets/image/tool_side_icon.png';
import { useTranslation } from 'react-i18next';

import BottomArrow from './BottomArrow';

// import { ReactComponent as ArrowIcon } from './BottomArrow';

import arrowImg from '../assets/image/down-arrow.svg';

const OurServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      image: img1,
      title: t('ourServices.itemTitle1'),
      text: t('ourServices.itemText1'),
    },
    {
      image: img2,
      title: t('ourServices.itemTitle2'),
      text: t('ourServices.itemText2'),
    },
    {
      image: img3,
      title: t('ourServices.itemTitle3'),
      text: t('ourServices.itemText3'),
    },
  ];

  const [activeItem, setActiveItem] = useState([]);

  const handleUpdate = (index) => {
    if (activeItem.includes(index)) {
      const newArray = activeItem.filter((item) => item !== index);
      setActiveItem(newArray);
    } else {
      setActiveItem([...activeItem, index]);
    }
  };

  return (
    <section className="our_services" id={t('linksId.ourServices')}>
      <div className="services_title">
        <h2>{t('ourServices.title')}</h2>
      </div>
      <div className="services_content">
        {services.map(({ image, title, text }, index) => (
          <div
            key={title + text}
            className={activeItem.includes(index) ? 'services_box active' : 'services_box'}
            onClick={() => {
              handleUpdate(index);
            }}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p className="services_box_text">{text}</p>
            <BottomArrow className={'services__bottom-arrow'} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
