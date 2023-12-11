import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../Gallery/Gallery.jsx';
import { fetchAdverts } from '../../../redux/operations.js';
import SearchForm from '../../../components/SearchForm/SearchForm.jsx';
import {
  updateSelectedCar,
  updateHourlyRate,
  updateMileageFrom,
  updateMileageTo,
  updatePage,
} from '../../../redux/filter-slice.js';
import css from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);
  const filters = useSelector((state) => state.filters);
  const page = useSelector((state) => state.filters.page);


  const handleSearch = (newFilters) => {
    dispatch(updateSelectedCar(newFilters.selectedCar));
    dispatch(updateHourlyRate(newFilters.hourlyRate));
    dispatch(updateMileageFrom(newFilters.mileageFrom));
    dispatch(updateMileageTo(newFilters.mileageTo));
    dispatch(fetchAdverts(newFilters));
    dispatch(updatePage(1));
    dispatch(fetchAdverts({ ...newFilters, page: 1 }));
  };

  const handleLoadMore = () => {
    dispatch(updatePage(page + 1));
    dispatch(fetchAdverts({ ...filters, page: page + 1 }));
  };

  useEffect(() => {
    dispatch(fetchAdverts({ ...filters, page }));
  }, [dispatch, filters, page])

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <Gallery cars={cars} renderAllImages={true} />
      <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load more</button>
    </div>
  );
};


export default CatalogPage;
