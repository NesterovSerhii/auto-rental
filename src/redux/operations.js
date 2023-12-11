import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://657159b2d61ba6fcc0124b88.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "cars/fetchAll",
  async ({ filters, page = 1 }, thunkAPI) => {
    try {
      const params = { ...filters, page, limit: 12 };
      const response = await axios.get("/cars", { params });
      const fetchedAdverts = response.data;

      const currentState = thunkAPI.getState();
      
      const currentCards = currentState.adverts.cars;

      const updatedCards = [
        ...currentCards.filter((card) => !fetchedAdverts.find((newCard) => newCard.id === card.id)),
        ...fetchedAdverts,
      ];
      return updatedCards;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchBrends = createAsyncThunk(
  "cars/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      const first12Adverts = response.data.slice(0, 12);
      const uniqueBrands = [...new Set(first12Adverts.map((car) => car.make))];
      return uniqueBrands;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);