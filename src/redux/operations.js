import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://657159b2d61ba6fcc0124b88.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "cars/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get("/cars", { params: filters });
      const first12Adverts = response.data.slice(0, 12);
      return first12Adverts;
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