import React from 'react';
import { GalleryItem } from '../GalleyItem/GalleryItem.jsx';
import css from './Gallery.module.css';

export const Gallery = ({ cars }) => {
  if (!Array.isArray(cars)) {
    return <div>No cars to display.</div>;
  }

  return (
    <div className={css.galleryContainer}>
      {cars.map(car => (
        <GalleryItem key={car.id} car={car} />
      ))}
    </div>
  );
};
