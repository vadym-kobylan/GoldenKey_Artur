import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const DistrictsSection = () => {
  const { t } = useTranslation();
  const disctricts = [
    {
      id: 'Aufsperrdienst 1010',
      name: 'Innere Stadt',
    },
    {
      id: 'Aufsperrdienst 1020',
      name: 'Leopoldstadt',
    },
    {
      id: 'Aufsperrdienst 1030',
      name: 'Landstraße',
    },
    {
      id: 'Aufsperrdienst 1040',
      name: 'Wieden',
    },
    {
      id: 'Aufsperrdienst 1050',
      name: 'Margareten',
    },
    {
      id: 'Aufsperrdienst 1060',
      name: 'Mariahilf',
    },
    {
      id: 'Aufsperrdienst 1070',
      name: 'Neubau',
    },
    {
      id: 'Aufsperrdienst 1080',
      name: 'Josefstadt',
    },
    {
      id: 'Aufsperrdienst 1090',
      name: 'Alsergrund',
    },
    {
      id: 'Aufsperrdienst 1100',
      name: 'Favoriten',
    },
    {
      id: 'Aufsperrdienst 1110',
      name: 'Simmering',
    },
    {
      id: 'Aufsperrdienst 1120',
      name: 'Meidling',
    },
    {
      id: 'Aufsperrdienst 1130',
      name: 'Hietzing',
    },
    {
      id: 'Aufsperrdienst 1140',
      name: 'Penzing',
    },
    {
      id: 'Aufsperrdienst 1150',
      name: 'Rudolfsheim-Fünfhaus',
    },
    {
      id: 'Aufsperrdienst 1160',
      name: 'Ottakring',
    },
    {
      id: 'Aufsperrdienst 1170',
      name: 'Hernals',
    },
    {
      id: 'Aufsperrdienst 1180',
      name: 'Währing',
    },
    {
      id: 'Aufsperrdienst 1190',
      name: 'Döbling',
    },
    {
      id: 'Aufsperrdienst 1200',
      name: 'Brigittenau',
    },
    {
      id: 'Aufsperrdienst 1210',
      name: 'Floridsdorf',
    },
    {
      id: 'Aufsperrdienst 1220',
      name: 'Donaustadt',
    },
    {
      id: 'Aufsperrdienst 1230',
      name: 'Liesing',
    },
  ];
  return (
    <section className="districts" id={t('linksId.districts')}>
      <h2>{t('districtsTitle')}</h2>
      <div>
        {disctricts.map(({ id, name }) => (
          <div key={id + name}>
            <p>{id}</p>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistrictsSection;
