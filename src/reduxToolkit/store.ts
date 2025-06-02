import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";
import FilterSlice from "./reducers/filterSlice";
import LayoutSlice from "./reducers/layoutSlice";

export const store = configureStore({
  reducer: {
    layout: LayoutSlice,
    product: ProductSlice,
    filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
