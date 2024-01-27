import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

import leftArrow from '../assets/image/left-arrow.svg';
import rightArrow from '../assets/image/right-arrow.svg';

const Reviews = () => {
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
      name: 'Natali 1',
      text: `They helped me out unexpectedly! I got locked out on a weekend evening. I called
                this service and in 30 minutes they opened the door for me. Professional and fast. I
                recommend it as a reliable service!`,
      rating: 1,
    },
    {
      name: 'Natali 2',
      text: `They helped me out unexpectedly! I got locked out on a weekend evening. I called
                this service and in 30 minutes they opened the door for me. Professional and fast. I
                recommend it as a reliable service!`,
      rating: 2,
    },
    {
      name: 'Natali 3',
      text: `They helped me out unexpectedly! I got locked out on a weekend evening. I called
                this service and in 30 minutes they opened the door for me. Professional and fast. I
                recommend it as a reliable service!`,
      rating: 3,
    },
    {
      name: 'Natali 4',
      text: `They helped me out unexpectedly! I got locked out on a weekend evening. I called
                this service and in 30 minutes they opened the door for me. Professional and fast. I
                recommend it as a reliable service!`,
      rating: 4,
    },
    {
      name: 'Natali 5',
      text: `They helped me out unexpectedly! I got locked out on a weekend evening. I called
                this service and in 30 minutes they opened the door for me. Professional and fast. I
                recommend it as a reliable service!`,
      rating: 5,
    },
  ];

  return (
    <section className="Reviews" id="bewertungen">
      <h3>Bewertungen</h3>
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
