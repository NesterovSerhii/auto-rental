import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, loadMore } from '../../redux/cars-slice.js';
import { GalleryItem } from '../GalleyItem/GalleryItem.jsx';

export const Gallery = ({ galleryCars, galleryFilter, loadMore }) => {
  const dispatch = useDispatch();
  const { cars, filter, displayedCars } = useSelector((state) => state.adverts);

  const filteredCars = cars.filter((car) =>
    car && car.make && car.make.toLowerCase().includes(galleryFilter.toLowerCase())
  );

  const handleLoadMoreClick = () => {
    dispatch(updateFilter(''));
      (loadMore());
  };

  return (
    <div>
      {cars.slice(0, displayedCars).map((car) => (
        <GalleryItem key={car.id} data={car} />
      ))}
      {filteredCars.length > displayedCars && (
        <button onClick={handleLoadMoreClick}>Load more</button>
      )}
    </div>
  );
};
