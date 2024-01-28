import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

const Price = () => {
  const { t } = useTranslation();
  const priceItems = t('price.priceList', { returnObjects: true });

  return (
    <section className="Price" id={t('linksId.price')}>
      <h2>{t('price.priceTitle')}</h2>
      <div className="price_wrapper">
        {priceItems &&
          priceItems.map(({ name, price }) => (
            <div className="price_item" key={name + price}>
              <p className="price_name">{name}</p>
              <p className="price_value">{price}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Price;
