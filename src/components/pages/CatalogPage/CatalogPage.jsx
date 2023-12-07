import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../Gallery/Gallery.jsx';
import { fetchAdverts } from '../../../redux/operations';
import { updateFilter } from '../../../redux/cars-slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.adverts.cars);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <input type="text" placeholder="Filter" onChange={(e) => dispatch(updateFilter(e.target.value))} />
      <Gallery cars={cars} />
    </div>
  );
};

export default CatalogPage;
