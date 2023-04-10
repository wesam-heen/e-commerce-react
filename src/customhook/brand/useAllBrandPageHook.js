import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandsPage } from "../../redux/Slices/BrandSlice";

const useAllBrandPageHook = () => {
 
    const dispatch = useDispatch();
    //get all categories from redux
    const brands = useSelector((state) => state.allBrands.brands.data);
    //get status of loading
    const loading = useSelector((state) => state.allBrands.loading);
  
    useEffect(() => {
      //dispatch action to get data from API
      dispatch(getAllBrand(5));
    }, []);
    //number of page Initial value
    let pageCount = 0;
    //condition wait data come from api
    if (brands) {
      pageCount = brands.paginationResult.numberOfPages;
    }
  
    //when press page ,get page number and get data
    const getPage = async (page) => {
      //to get categories depend on page
      await dispatch(getAllBrandsPage(page));
    };
  
    return [brands, loading, pageCount, getPage];
}

export default useAllBrandPageHook
