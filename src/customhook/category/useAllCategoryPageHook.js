import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/Slices/CategorySlice";
import { useEffect } from "react";

const useAllCategoryPageHook = () => {
  const dispatch = useDispatch();
  //get all categories from redux
  const categories = useSelector((state) => state.allCategory.category.data);
  //get status of loading
  const loading = useSelector((state) => state.allCategory.loading);

  useEffect(() => {
    //dispatch action to get data from API
    dispatch(getAllCategory(5));
  }, []);
  //number of page Initial value
  let pageCount = 0;
  //condition wait data come from api
  if (categories) {
    pageCount = categories.paginationResult.numberOfPages;
  }

  //when press page ,get page number and get data
  const getPage = async (page) => {
    //to get categories depend on page
    await dispatch(getAllCategoryPage(page));
  };

  return [categories, loading, pageCount, getPage];
};

export default useAllCategoryPageHook;
