import React from 'react';
import { Helmet } from 'react-helmet';

import FullPageComponent from '../components/FullPageComponent';

const PageRU = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Золотой ключ - Услуги слесаря в Вене</title>
        <meta
          name="description"
          content="Услуги вскрывания замков в Вене. & Служба ключей. Мы доступны для вас 24/7. Экстренное вскрытие всех типов дверных замков от €75."
        />
        <meta
          name="keywords"
          content="Golden Key Wien, Золотой Ключ Вена, слесарь Вена, изготовление ключей, услуги по вскрытию, ремонт замков, восстановление утерянных ключей, открытие дверей, услуги слесаря"
        />
        <meta name="author" content="Vadym Kobylan" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="de" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      <FullPageComponent />
    </>
  );
};

export default PageRU;
