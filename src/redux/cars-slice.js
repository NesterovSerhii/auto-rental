import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  filter: "",
  displayedCars: 12,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

const fetchAllAdverts = (state, { payload }) => {
  state.isLoading = false;
  state.cars = payload;
};

const loadMoreAdverts = (state) => {
  state.displayedCars = state.cars.length;
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    loadMore(state) {
      loadMoreAdverts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, fetchAllAdverts)
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        handleRejected
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export default carsSlice.reducer;
export const { updateFilter, loadMore } = carsSlice.actions;