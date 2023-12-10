import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../Gallery/Gallery.jsx';
import { fetchAdverts } from '../../../redux/operations.js';
import SearchForm from '../../../components/SearchForm/SearchForm.jsx';
import {
  updateSelectedCar,
  updateHourlyRate,
  updateMileageFrom,
  updateMileageTo
} from '../../../redux/filter-slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);
  const filters = useSelector((state) => state.filters);

  const handleSearch = (newFilters) => {
    dispatch(updateSelectedCar(newFilters.selectedCar));
    dispatch(updateHourlyRate(newFilters.hourlyRate));
    dispatch(updateMileageFrom(newFilters.mileageFrom));
    dispatch(updateMileageTo(newFilters.mileageTo));
    dispatch(fetchAdverts(newFilters));
  };

  useEffect(() => {
    dispatch(fetchAdverts(filters));
  }, [dispatch, filters]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <Gallery cars={cars} renderAllImages={true} />
    </div>
  );
};


export default CatalogPage;
