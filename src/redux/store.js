import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import brandSlice from "./Slices/BrandSlice";
import CategorySlice from "./Slices/CategorySlice";
import SubCategorySlice from "./Slices/SubCategorySlice";
import ProductSlice from "./Slices/ProductSlice";

export default configureStore({
  reducer: {
    allCategory: CategorySlice,
    allBrands:brandSlice,
    subCategory:SubCategorySlice,
    allProducts:ProductSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
