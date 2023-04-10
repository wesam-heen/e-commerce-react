import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";







//create new sub category
export const createSubCategory = createAsyncThunk(
    "subCategorySlice/createSubCategory",
    //data is object contain id for main category and name sub category 
    async (data) => {
      try {
                return await useInsertData("/api/v1/subcategories", data);
      } catch (e) {
        console.log(e);
      }
    }
  );


  //get all sub categories from selected category
export const getAllSubCategory = createAsyncThunk(
  "subCategorySlice/getAllSubCategory",
  //data is object contain id for main category and name sub category 
  async (id) => {
    try {
              return await useGetData(`/api/v1/categories/${id}/subcategories`);
    } catch (e) {
      console.log(e);
    }
  }
);

//this initial State for category slice
const initialState = {
    subCategory: [],
    loading: true,
  };
  
  const subCategorySlice = createSlice({
    name: "subCategorySlice",
    initialState: initialState,
    extraReducers: (builder) => {
     builder.addCase(createSubCategory.fulfilled,(state,action)=>{
     state.subCategory=action.payload;
     state.loading=false;
     })
     builder.addCase(getAllSubCategory.fulfilled,(state,action)=>{
      state.subCategory=action.payload;
      state.loading=false;
     })
    },
  });
  export default subCategorySlice.reducer;
