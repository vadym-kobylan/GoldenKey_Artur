import React, { useState } from 'react';
import '../App.css';

import img1 from '../assets/image/gold_key_topright_icon.png';
import img2 from '../assets/image/lock_side_icon.png';
import img3 from '../assets/image/tool_side_icon.png';

const OurServicesSection = () => {
  const services = [
    {
      image: img1,
      title: 'Schlüsseldienst',
      text: 'Alle Schlüssel werden bei uns prompt und preiswert angefertigt, sodass sie nicht lange warten müssen…',
    },
    {
      image: img2,
      title: 'Aufsperrdienst',
      text: 'Unser professionelles Team macht ist schnell vor Ort, alle Türöffnungen werden Schadensfrei durchgeführt…',
    },
    {
      image: img3,
      title: 'Reparaturen',
      text: 'Wir übernehmen alle Schlösser Reparaturen, und beraten Sie gerne…',
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
    <section className="our_services" id="unsere-dienstleistungen">
      <div className="services_title">
        <h2>Unsere Dienstleistungen</h2>
      </div>
      <div className="services_content">
        {services.map(({ image, title, text }, index) => (
          <div
            key={title + text}
            className="services_box"
            onClick={() => {
              handleUpdate(index);
            }}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p
              className={
                activeItem.includes(index) ? 'services_box_text open' : 'services_box_text'
              }>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
