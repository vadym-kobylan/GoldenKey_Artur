import React from 'react';

import OurServicesSection from './OurServicesSection';
import PriceSection from './PriceSection';
import WhyUsSection from './WhyUsSection';
import FormSection from './FormSection';
import Reviews from './Reviews';
import DistrictsSection from './DistrictsSection';
import FAQSection from './FAQSection';
import FixedCall from './FixedCall';
import Footer from './Footer';

const FullPageComponent = () => {
  return (
    <>
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

      <FAQSection />

      <Footer />
    </>
  );
};

export default FullPageComponent;
