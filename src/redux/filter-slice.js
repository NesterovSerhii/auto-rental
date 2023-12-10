import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCar: '',
  hourlyRate: '',
  mileageFrom: '',
  mileageTo: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    updateHourlyRate: (state, action) => {
      state.hourlyRate = action.payload;
    },
    updateMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    updateMileageTo: (state, action) => {
      state.mileageTo = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  updateSelectedCar,
  updateHourlyRate,
  updateMileageFrom,
  updateMileageTo,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
