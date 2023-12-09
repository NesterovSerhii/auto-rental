import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../Gallery/Gallery.jsx';
import { fetchAdverts } from '../../../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);
  const isLoading = useSelector((state) => state.adverts.isLoading);

  useEffect(() => {
  if (!isLoading) {
    dispatch(fetchAdverts());
  }
},[] );

  return (
    <div>
      <Gallery cars={cars} />
    </div>
  );
};

export default CatalogPage;
