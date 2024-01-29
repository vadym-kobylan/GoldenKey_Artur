import React from 'react';
import '../App.css';
import phoneImage from '../assets/image/phone_missed_side_icon.png';

const FixedCall = () => {
  return (
    <a href='tel:+436765409213' id="fixed_call">
      <img src={phoneImage} alt="" />
    </a>
  );
};

export default FixedCall;
