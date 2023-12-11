import { createSlice } from '@reduxjs/toolkit';

export const loadFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteCars: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteCars.push(action.payload);
      saveFavorites(state.favoriteCars);
    },
    removeFavorite: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter((car) => car.id !== action.payload.id);
      saveFavorites(state.favoriteCars);
    },

  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
