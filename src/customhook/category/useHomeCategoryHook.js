import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/Slices/CategorySlice";
const useHomeCategoryHook = () => {
  const dispatch = useDispatch();
  //get all category from redux category slice
  const categories = useSelector((state) => state.allCategory.category.data);
  //get loading from category slice
  const loading = useSelector((state) => state.allCategory.loading);

  useEffect(() => {
    //dispatch action category redux
    dispatch(getAllCategory(6));
  }, []);
  return [categories, loading];
};

export default useHomeCategoryHook;
