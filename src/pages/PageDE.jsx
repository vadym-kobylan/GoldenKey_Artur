import React from 'react';
import { Helmet } from 'react-helmet';

import FullPageComponent from '../components/FullPageComponent';

const PageDE = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Golden Key - Schlüsseldienst in Wien</title>
        <meta
          name="description"
          content="Schlüsseldienste in Wien. & Schlüsseldienst. Wir sind rund um die Uhr für Sie da. Notfallöffnung aller Arten von Türschlössern ab €75."
        />
        <meta
          name="keywords"
          content="Golden Key Wien, Goldener Schlüssel Wien, Schlüsseldienst Wien, Schlüsselanfertigung, Aufsperrdienst, Schlossreparatur, Wiederherstellung verlorener Schlüssel, Türöffnung, Schlüsseldienstleistungen"
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

export default PageDE;
