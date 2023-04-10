import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get all brands
export const getAllBrand = createAsyncThunk(
    "BrandSlice/getAllBrand",
    async (limit) => {
      try {
        //get all brands from API
        return await useGetData(`/api/v1/brands?limit=${limit}`);
      } catch (e) {
        console.log(e);
      }
    }
  );

//get all brands page (pagination)
export const getAllBrandsPage = createAsyncThunk(
    "BrandSlice/getAllBrandsPage",
    async (page) => {
      try {
        //get all brands from API
        return await useGetData(`/api/v1/brands?limit=5&page=${page}`);
      } catch (e) {
        console.log(e);
      }
    }
  );


  //create new brand
export const createBrand = createAsyncThunk(
    "BrandSlice/createBrand",
    async (formData) => {
      try {
        return await useInsertDataWithImage("/api/v1/brands", formData);
      } catch (e) {
        console.log(e);
      }
    }
  );


//get specific brand 
export const getSpecificBrand  = createAsyncThunk(
  "BrandSlice/getSpecificBrand",
  async (id) => {
    try {
      //get all category from API
      return await useGetData(`/api/v1/brands/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
);
//this initial State for brands slice
const initialState = {
    brands: [],
    specificBrand: [],
    loading: true,
  };


const BrandSlice = createSlice({
    name: "AllBrandSlice",
    initialState: initialState,
    extraReducers: (builder) => {
     builder.addCase(getAllBrand.fulfilled,(state,action)=>{
        state.brands=action.payload;
        state.loading=false;
     })
     builder.addCase(getAllBrandsPage.fulfilled, (state, action) => {
        // Add brands to the state array from selected page
        state.brands = action.payload;
        state.loading = false;
      });
      builder.addCase(createBrand.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
      });
      builder.addCase(getSpecificBrand.fulfilled, (state, action) => {
        state.specificBrand = action.payload;
        state.loading = false;
      });
    },
  });

  export default BrandSlice.reducer;