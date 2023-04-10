import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/Slices/BrandSlice";

const useHomeBrandHook = () => {
  const dispatch = useDispatch();
  //get all category from redux category slice
  const brands = useSelector((state) => state.allBrands.brands.data);
  //get loading from category slice
  const loading = useSelector((state) => state.allBrands.loading);

  useEffect(() => {
    //dispatch action brand redux
    dispatch(getAllBrand(6));
  }, []);
  return [brands, loading];
};
export default useHomeBrandHook;
