import React from 'react';
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Welcome to our Car Rental Service!</h2>
      <div className={css.descContainer}>
        <p className={`${css.desc} ${css.descLeft}`}>
          Explore our diverse range of rental cars and experience the freedom to travel wherever
          you want, whenever you want.
        </p>
        <p className={`${css.desc} ${css.descCenter}`}>
          Whether you need a compact car for a quick city trip or a spacious SUV for a family
          adventure, we've got you covered.
        </p>
        <p className={`${css.desc} ${css.descRight}`}>
          Choose, drive, and enjoy the journey with our reliable rental service.</p>

      </div>
    </div>
  );
};

export default HomePage;
