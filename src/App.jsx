import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate } from 'react-router-dom';

import PageDE from './pages/PageDE.jsx';
import PageEN from './pages/PageEN.jsx';
import PageUK from './pages/PageUK.jsx';
import PageRU from './pages/PageRU.jsx';
import Header from './components/Header';
import ScrollToAnchor from './ScrollToAnchor';

import './App.css';

import './assets/i18n.js';

function App() {
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
        <link rel="alternate" href="http://example.com/en" hreflang="en" />
        <link rel="alternate" href="http://example.com/de" hreflang="de" />
        <link rel="alternate" href="http://example.com/uk" hreflang="uk" />
        <link rel="alternate" href="http://example.com/ru" hreflang="ru" />
      </Helmet>
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/en" replace={true} />} />
        <Route path="/de" element={<PageDE />} />
        <Route path="/en" element={<PageEN />} />
        <Route path="/uk" element={<PageUK />} />
        <Route path="/ru" element={<PageRU />} />
      </Routes>
    </>
  );
}

export default App;
