import React from 'react';
import { Helmet } from 'react-helmet';

import FullPageComponent from '../components/FullPageComponent';

const PageUK = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Golden Key - Послуги Замочника у Відні</title>
        <meta
          name="description"
          content="Послуги відкривання замків у Відні та виготовлення ключів. Ми доступні для вас 24/7. Екстрене відкриття всіх типів дверних замків від €75."
        />
        <meta
          name="keywords"
          content="Золотий Ключ Відень, замочник Відень, виготовлення ключів, послуги з відкривання, ремонт замків, відновлення втрачених ключів, відкриття дверей, послуги замочника"
        />
        <meta name="author" content="Vadym Kobylan" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="uk" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      <FullPageComponent />
    </>
  );
};

export default PageUK;
