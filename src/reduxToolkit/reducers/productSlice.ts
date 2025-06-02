import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryType, ProductSliceProp, ProductType } from "../../types/Product";
import { Categories, Products } from "../../jsonData";

const initialState: ProductSliceProp = {
  productItem: [],
  categoryItem: [],
};

export const fetchProductApiData = createAsyncThunk<ProductType[], void, {}>("/api/product", async () => {
  const response = await axios.get(Products);
  return response.data;
});

export const fetchCategoryApiData = createAsyncThunk<CategoryType[], void, {}>("/api/category", async () => {
  const response = await axios.get(Categories);
  return response.data;
});

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setPropertyItem: (state, action) => {
      state.productItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApiData.fulfilled, (state, action) => {
      state.productItem = action.payload;
    });
    builder.addCase(fetchCategoryApiData.fulfilled, (state, action) => {
      state.categoryItem = action.payload;
    });
  },
});

export const { setPropertyItem } = ProductSlice.actions;
export default ProductSlice.reducer;
