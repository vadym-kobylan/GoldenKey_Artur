import React from 'react';
import './App.css';
import Header from './components/Header';
import OurServicesSection from './components/OurServicesSection';
import PriceSection from './components/PriceSection';
import WhyUsSection from './components/WhyUsSection';
import FormSection from './components/FormSection';
import Reviews from './components/Reviews';
import DistrictsSection from './components/DistrictsSection';
import FAQSection from './components/FAQSection';
import FixedCall from './components/FixedCall';
import Footer from './components/Footer';
import ScrollToAnchor from './ScrollToAnchor';

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Header />
      <FixedCall />
      <OurServicesSection />

      <div id="gradient">
        <div></div>
      </div>

      <PriceSection />

      <div id="gradient_reverse">
        <div></div>
      </div>

      <WhyUsSection />
      <FormSection />
      <Reviews />
      <DistrictsSection />

      <div id="gradient">
        <div></div>
      </div>

      {/* <FAQSection /> */}

      <Footer />
    </>
  );
}

export default App;
