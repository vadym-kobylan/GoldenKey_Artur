import React from 'react';
import '../App.css';

const FormSection = () => {
  return (
    <section className="form_doubt">
      <h3>Zögern Sie immer noch?</h3>
      <p>Hinterlassen Sie eine Anfrage und wir führen eine kostenlose Beratung durch.</p>
      <p>
        Im Beratungsgespräch bieten wir Ihnen eine professionelle Beratung zum Schutz Ihrer Türen
        und Schlösser.
      </p>

      <div className="form-container">
        <form id="contactForm">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
          </div>

          <button type="button">Lassen Sie sich beraten</button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
