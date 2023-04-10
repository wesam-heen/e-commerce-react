import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

//get all categories
export const getAllCategory = createAsyncThunk(
  "CategorySlice/getAllCategory",
  async (limit) => {
    try {
      //get all category from API
      return await useGetData(`/api/v1/categories?limit=${limit}`);
    } catch (e) {
      console.log(e);
    }
  }
);

//get all categories page (pagination)
export const getAllCategoryPage = createAsyncThunk(
  "CategorySlice/getAllCategoryPage",
  async (page) => {
    try {
      //get all category from API
      return await useGetData(`/api/v1/categories?limit=5&page=${page}`);
    } catch (e) {
      console.log(e);
    }
  }
);

//create new category
export const createCategory = createAsyncThunk(
  "CategorySlice/createCategory",
  async (formData) => {
    try {
      return await useInsertDataWithImage("/api/v1/categories", formData);
    } catch (e) {
      console.log(e);
    }
  }
);

//get specific category 
export const getSpecificCategory  = createAsyncThunk(
  "CategorySlice/getSpecificCategory",
  async (id) => {
    try {
      //get all category from API
      return await useGetData(`/api/v1/categories/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
);

//this initial State for category slice
const initialState = {
  category: [],
  specificCategory: [],
  loading: true,
};

const CategorySlice = createSlice({
  name: "AllCategorySlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      // Add category to the state array
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCategoryPage.fulfilled, (state, action) => {
      // Add category to the state array from selected page
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(getSpecificCategory.fulfilled,(state,action)=>{
     state.specificCategory=action.payload;
     state.loading = false;
    })
  },
});
export default CategorySlice.reducer;
