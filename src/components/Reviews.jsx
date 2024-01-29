import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

import leftArrow from '../assets/image/left-arrow.svg';
import rightArrow from '../assets/image/right-arrow.svg';

const Reviews = () => {
  const { t } = useTranslation();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={rightArrow}
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={leftArrow}
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const reviews = [
    {
      name: 'Martin',
      text: `Hallo! Vielen Dank an den Meister Artur. Guter und aufmerksamer Service. Schnell. Keine Schäden oder Beanstandungen.`,
      rating: 5,
    },
    {
      name: 'Michael',
      text: `Die Tür war geschlossen. Wir wurden empfohlen, einen Meister hier anzurufen, weil die Preise angemessen sind, sie schnell ankommen und man sie zu jeder Tageszeit anrufen kann. Jetzt bin ich selbst überzeugt und empfehle es auch anderen. Gut gemacht, Jungs!`,
      rating: 5,
    },
    {
      name: 'Anna',
      text: `Grüße! Sehr qualitativer Service, sie haben die Tür, Zeit und Geld gespart. Wir haben sie nachts gerufen und sofort Hilfe erhalten!`,
      rating: 5,
    },
    {
      name: 'Lilia',
      text: `Ich blieb abends mit meinem Kind auf der Straße - konnte die Tür nicht öffnen, das Schloss war kaputt. Sie kamen schnell. Sie haben das Schloss ausgetauscht. Ich bin mit dem Preis und der Arbeit zufrieden!`,
      rating: 5,
    },
    {
      name: 'Veronika',
      text: `Eine ausgezeichnete Firma. Sie kamen wirklich innerhalb von 15-20 Minuten, haben schnell mit den Türen geholfen! Vielen Dank!`,
      rating: 5,
    },
  ];

  return (
    <section className="Reviews" id={t('linksId.reviews')}>
      <h3>{t('reviewsTitle')}</h3>
      <div className="review">
        <Slider {...settings}>
          {reviews.map(({ name, text, rating }, index) => (
            <div key={index}>
              <h6>{name}</h6>
              <p className="review-text">{text}</p>
              <div className="raiting">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'active' : ''}`}
                    onClick={() => handleStarClick(star)}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
