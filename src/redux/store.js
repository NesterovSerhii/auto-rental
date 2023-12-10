import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars-slice';
import favoritesReducer, {loadFavorites} from './favorites-slice'

const preloadedState = {
  favorites: {
    favoriteCars: loadFavorites(),
  },
};

export const store = configureStore({
  reducer: {
    adverts: carsReducer,
    favorites: favoritesReducer,
  },
  preloadedState,
});