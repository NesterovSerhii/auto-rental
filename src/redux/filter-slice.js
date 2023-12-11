import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCar: '',
  hourlyRate: '',
  mileageFrom: '',
  mileageTo: '',
  page: 1,
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
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  updateSelectedCar,
  updateHourlyRate,
  updateMileageFrom,
  updateMileageTo,
  resetFilters,
  updatePage,
} = filtersSlice.actions;

export default filtersSlice.reducer;
