import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

//get all products
export const getAllProducts = createAsyncThunk(
  "ProductSlice/getAllProducts",
  async () => {
    try {
      //get all products from API by use hook
      return await useGetData(`/api/v1/products?limit=2`);
    } catch (e) {
      console.log(e);
    }
  }
);

//get all products with page number
export const getAllProductsWithPageNumber = createAsyncThunk(
  "ProductSlice/getAllProductsWithPageNumber",
  async (page) => {
    try {
      //get all products from API by use hook
      return await useGetData(`/api/v1/products?limit=${2}&page=${page}`);
    } catch (e) {
      console.log(e);
    }
  }
);

//get specific product
export const getSpecificProduct = createAsyncThunk(
  "ProductSlice/getSpecificProduct",
  async (id) => {
    try {
      //get all products from API by use hook
      return await useGetData(`/api/v1/products/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
);

//get products have same category
export const getProductsSameCategory = createAsyncThunk(
  "ProductSlice/getProductsSameCategory",
  async (id) => {
    try {
      //get all products same category from API by use hook
      return await useGetData(`/api/v1/products?category=${id}&limit=4`);
    } catch (e) {
      console.log(e);
    }
  }
);

//create new product
export const createNewProduct = createAsyncThunk(
  "ProductSlice /createNewProduct",
  async (formData) => {
    try {
      return await useInsertDataWithImage("/api/v1/products", formData);
    } catch (e) {
      console.log(e);
    }
  }
);

//delete  product
export const deleteProduct = createAsyncThunk(
  "ProductSlice /deleteProduct",
  async (id) => {
    try {
      return await useDeleteData(`/api/v1/products/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
);
//Edit product
export const EditProduct = createAsyncThunk(
  "ProductSlice /EditProduct",
  async (id, formData) => {
    try {
      return await useUpdateDataWithImage(`/api/v1/products/${id}`, formData);
    } catch (e) {
      console.log(e);
    }
  }
);

//this initial State for products slice
const initialState = {
  products: [],
  specificProduct: [],
  productsSameCategory: [],
  deleteProduct: [],
  UpdateProduct: [],
  loading: true,
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getSpecificProduct.fulfilled, (state, action) => {
      state.specificProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductsSameCategory.fulfilled, (state, action) => {
      state.productsSameCategory = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.deleteProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllProductsWithPageNumber.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(EditProduct.fulfilled, (state, action) => {
      state.EditProduct = action.payload;
      state.loading = false;
    });
  },
});
export default ProductSlice.reducer;
