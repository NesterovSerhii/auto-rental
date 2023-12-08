import React from 'react';
import css from './GalleryItem.module.css';

export const GalleryItem = ({ car }) => {
 
const cityRegex = /,\s*([^,]+),\s*([^,]+)$/; 

  const match = car.address.match(cityRegex);
  let city = null;
  let country = null;

if (match) {
   city = match[1]; 
   country = match[2]; 
  
} else {
  console.log("Unkown city or country");
}


  const rentalPriceString = car.rentalPrice;
  const rentalPriceNumber = parseFloat(rentalPriceString.replace(/[^0-9.]/g, ''));
  

  return (
    <>
      <div className={css.card} >
        <div className={css.imgWrap}>
        <img className={css.image} src={car.img} alt={car.make + ' ' + car.model} />
        </div>
        <div className={css.details}>
          <h3>{car.make} {car.model}, {car.year}</h3>
          <p>{car.rentalPrice}</p>
        </div>
        <div className={css.additionalInfo}>
          <ul className={css.additionalInfoList}>
          <li>{city}</li>
          <span className={css.verticalLine}></span>
          <li>{country}</li>
          <span className={css.verticalLine}></span>
          <li>{car.rentalCompany}</li>
          {rentalPriceNumber >= 30 && <p>Premium</p>}
          <span className={css.verticalLine}></span>
          <li>{car.type}</li>
          <span className={css.verticalLine}></span>
          <li>{car.model}</li>
          <span className={css.verticalLine}></span>
          <li>{car.mileage}</li>
          <span className={css.verticalLine}></span>
          <li>{car.accessories[1]}</li>
          </ul>

        </div>
        <button className={css.cardBtn}>Learn more</button>
      </div>
      
    </>
  );
}
