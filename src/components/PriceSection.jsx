import React from 'react';
import '../App.css';

const Price = () => {
  const priceItems = [
    {
      name: 'Einfache Türöffnung ( Zugefallen )',
      price: 'ab 75 €',
    },
    {
      name: 'Doppelflügeltür',
      price: '120 €',
    },
    {
      name: 'Sicherheitstüre (oder Sicherheitselemente)',
      price: '150 €',
    },
    {
      name: 'Teleskopöffnung (mehrere fallen oder doppelfalz) Zuschlag',
      price: '60 €',
    },
    {
      name: 'Zuschlag am Wochenende / Feiertag',
      price: '49 €',
    },
    {
      name: 'Abendzuschlag 17,00 - 20.00 Uhr',
      price: '39 €',
    },
    {
      name: 'Nachtzuschlag 20.00 - 08.00 Uhr',
      price: '59 €',
    },
    {
      name: 'Türöffnung (Verschlossen)',
      price: '150 €',
    },
    {
      name: 'Entfernung eines abgebrochenen Schlüssels',
      price: '120 €',
    },
    {
      name: 'Stornierung bei Anfahrt - vor Ort',
      price: '79 €',
    },
    {
      name: 'Montage / Service',
      price: '120 €',
    },
  ];

  return (
    <section className="Price" id="preis">
      <h2>Preis</h2>
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
