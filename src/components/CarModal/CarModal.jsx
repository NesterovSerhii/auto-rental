import React, { useEffect, useState } from 'react';
import css from './CarModal.module.css';
import ModalIcon from '../ModalIcon/ModalIcon.jsx';

const CarModal = ({ car, onClose }) => {

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.classList.add(css.modalOpen);
    
    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, []);

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
  
  const rentalConditionsArray = car.rentalConditions.split('\n').filter(Boolean);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        {car.img && !imgError ? (
          <img
            className={css.modalImage}
            src={car.img}
            alt={`${car.make} ${car.model}`}
            onError={handleImgError}
          />
        ) : (
          <div className={css.errorDiv}>{imgError ? 'Failed to load image' : 'No image'}</div>
        )}
        <div className={css.modalDetails}>
          <h3 className={css.cardTitle}>
            {car.make} <span className={css.accent}>{car.model}</span>, {car.year}
          </h3>
          <div>
            <ul className={`${css.additionalInfoList} ${css.additionalInfoListEllipsis}`}>
              <li>{city}</li>
              <span className={css.verticalLine}></span>
              <li>{country}</li>
              <span className={css.verticalLine}></span>
              <li>Id: {car.id}</li>
              <span className={css.verticalLine}></span>
              <li>Year: {car.year}</li>
              <span className={css.verticalLine}></span>
              <li>Type: {car.type}</li>
              <li>Fuel Consumption: {car.fuelConsumption}</li>
              <span className={css.verticalLine}></span>
              <li>Engine Size: {car.engineSize}</li>
            </ul>
          </div>
          <p className={css.description}>{car.description}</p>
          <p className={css.cardSubTitle}>Accessories and functionalities:</p>
          <ul className={css.functionalitiesList}>
            {[...car.accessories, ...car.functionalities].map((item, index) => (
              <React.Fragment key={index}>
                <li>{item}</li>
                {index !== car.accessories.length + car.functionalities.length - 1 && (
                  <span className={css.verticalLine}></span>
                )}
              </React.Fragment>
            ))}
          </ul>
          <p className={css.cardSubTitle}>Rental Conditions: </p>
          <ul className={css.rentalConditionsList}>
            {rentalConditionsArray.map((condition, index) => (
              <li key={index} className={css.rentalConditionItem}>
                <span className={css.conditionText}>{condition}</span>
              </li>
            ))}
            <li className={css.rentalConditionItem}>Mileage: <span className={css.blueText}>{car.mileage / 1000}</span></li>
            <li className={css.rentalConditionItem}>Price: <span className={css.blueText}>{car.rentalPrice}</span></li>
          </ul>
          <a className={css.rentalCarButton} href={`tel:+380730000000`}>Rental car</a>
        </div>
        <button className={css.closeButton} onClick={onClose}>
          <ModalIcon/>
        </button>
      </div>
    </div>
  )
};

export default CarModal;
