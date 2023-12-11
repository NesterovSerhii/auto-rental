import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Gallery } from '../../Gallery/Gallery';
import { fetchAdverts } from '../../../redux/operations';
import SearchForm from '../../SearchForm/SearchForm';

const FavoritesPage = () => {
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);
  const dispatch = useDispatch();
  const handleSearch = (newFilters) => {
    dispatch(fetchAdverts(newFilters));
  };

  useEffect(() => {
  dispatch(fetchAdverts());
}, [favoriteCars, dispatch]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <Gallery cars={favoriteCars} />
    </div>
  );
};

export default FavoritesPage;
