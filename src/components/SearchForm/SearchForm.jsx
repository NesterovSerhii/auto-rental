import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {resetFilters} from '../../redux/filter-slice';
import { fetchAdverts, fetchBrends } from '../../redux/operations';
import css from './SearchForm.module.css'
const SearchForm = ({ onSearch }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);
  const uniqueCarBrands = Array.from(new Set(cars.map((car) => car.make)));
  const uniqueHourlyRates = Array.from(new Set(cars.map((car) => car.rentalPrice)));

  const minMileage = Math.min(...cars.map((car) => car.mileage));
  const maxMileage = Math.max(...cars.map((car) => car.mileage));

  const [filters, setFilters] = useState({
    selectedCar: '',
    hourlyRate: '',
    mileageFrom: '',
    mileageTo: '',
  });

  const selectedCar = useSelector((state) => state.filters.selectedCar);
  const hourlyRate = useSelector((state) => state.filters.hourlyRate);
  const mileageFrom = useSelector((state) => state.filters.mileageFrom);
  const mileageTo = useSelector((state) => state.filters.mileageTo);

  const handleCarChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, selectedCar: e.target.value }));
  };

  const handleHourlyRateChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, hourlyRate: e.target.value }));
  };

  const handleMileageFromChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, mileageFrom: e.target.value }));
  };

  const handleMileageToChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, mileageTo: e.target.value }));
  };

  const handleResetFilters = () => {
    setFilters({
      selectedCar: '',
      hourlyRate: '',
      mileageFrom: '',
      mileageTo: '',
    });

    dispatch(resetFilters());
    dispatch(fetchAdverts());
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  useEffect(() => {
    dispatch(fetchBrends({ selectedCar, hourlyRate, mileageFrom, mileageTo }));
  }, [dispatch, selectedCar, hourlyRate, mileageFrom, mileageTo]);

  return (
    <div className={css.form}>
      <label>
        Car brand
        <select className={css.brandSelect} value={filters.selectedCar} onChange={handleCarChange}>
          <option value="">All Cars</option>
          {uniqueCarBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label>
        Price/ 1 hour
        <select className={css.select} value={filters.hourlyRate} onChange={handleHourlyRateChange}>
          <option value="">To $</option>
          {uniqueHourlyRates.map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </label>
      <div className={css.labelWrap}>
        <label>
          Сar mileage / km
        </label>
        <div className={css.inputWrap}>
          <input className={css.inputLeft}
            type="number"
            placeholder={`From (${minMileage})`}
            value={filters.mileageFrom}
            min={Number(minMileage)}
            step={10}
            onChange={handleMileageFromChange}
          />
          <input
            className={css.inputRight}
            type="number"
            placeholder={`To (${maxMileage})`}
            value={filters.mileageTo}
            min={filters.mileageFrom}
            max={Number(maxMileage)}
            step={10}
            onChange={handleMileageToChange}
          />
        </div>
      </div>
      <button className={css.formBtn} type="button" onClick={handleSearch}>
        Search
      </button>
      <button className={css.formResetBtn} type="button" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default SearchForm;