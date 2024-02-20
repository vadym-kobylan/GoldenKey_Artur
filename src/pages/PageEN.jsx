import React from 'react';
import { Helmet } from 'react-helmet';
import FullPageComponent from '../components/FullPageComponent';

const PageEN = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Golden Key - Locksmith Services in Vienna</title>
        <meta
          name="description"
          content="Lockout Services in Vienna. & Key Service. We are available for you 24/7. Emergency opening of all types of door locks from €75."
        />
        <meta
          name="keywords"
          content="Golden Key Wien, locksmith Vienna, key making, unlocking service, lock repair, lost key recovery, door opening, locksmith services"
        />
        <meta name="author" content="Vadym Kobylan" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      <FullPageComponent />
    </>
  );
};

export default PageEN;
