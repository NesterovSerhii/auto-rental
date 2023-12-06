import React from 'react';
import { GalleryItem } from '../GalleyItem/GalleryItem.jsx';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

export const Gallery = ({ images }) => {
  if (!Array.isArray(images)) {
    return <div>No images to display.</div>;
  }
  return (
    <>
      <ul className={css.gallery}>
        {images.map(image => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </>
  );
};

// Gallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };