import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import GoogleMap from './GoogleMap';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_left">
          <h2>{t('footer.contacts')}</h2>
          <h4>{t('footer.addresses')}</h4>
          <ul>
            <li>
              <a href="https://maps.app.goo.gl/mkyAV3xZjyjtZTmj6" target="_blank">
                Brünner Straße 219-221, 1210 Wien
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/LJsyPPKQN3nqdxzi9" target="_blank">
                Kürschnergasse 9, 1210 Wien
              </a>
            </li>
            <li></li>
          </ul>
          <h4>{t('footer.workTime')}</h4>
          <ul>
            <li>{t('footer.monFri')}: 08:00-18:00</li>
            <li>{t('footer.sat')}: 09:00-13:00</li>
            <li>{t('footer.sun')}</li>
          </ul>
          <h4>{t('footer.phone')}</h4>
          <ul>
            <li>
              <a href="tel:+43 676 5409 213">+43 676 5409 213</a>
            </li>
            <li>
              <a href="tel:+43 681 207 893 26">+43 681 207 893 26</a>
            </li>
          </ul>
          <h4>E-mail:</h4>
          <ul>
            <li>
              <a href="mailto:golden.keyy7@gmail.com" target="_blank">
                golden.keyy7@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_right">
          <GoogleMap />
        </div>
      </div>
      <div className="impressum" id={t('linksId.impressum')}>
        <h4>IMPRESSUM</h4>
        <p>
          Aufsperrkönig <br />
          Vereinsgasse 12 <br />
          1020 Wien <br />
          Österreich <br />
          Email: Aufsperrkoenig@gmail.com <br />
          Telefon: +43 664 490 4290 <br />
          Landesgericht Wien <br />
          UID: ATU75639917
        </p>
      </div>
    </footer>
  );
};

export default Footer;
