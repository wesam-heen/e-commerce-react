import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getAllProductsWithPageNumber } from "../../redux/Slices/ProductSlice"


const useViewAdminProductsHook = () => {
  let items=[];
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getAllProducts(2))
    },[dispatch])

    const allProducts=useSelector(state=>state.allProducts.products)
   
    if(allProducts.data){
     items= allProducts
        }else{
        items=[]
    }

      //when press page ,get page number and get data
  const getPage = async (page) => {
    //to get categories depend on page
    await dispatch(getAllProductsWithPageNumber(page));
  console.log(page);
  };
  let pageCount=0;

  if(items.data){
  pageCount=items.data.paginationResult.numberOfPages;
  }else{
   pageCount=0
  }
    
    return [items,pageCount,getPage]


}

export default useViewAdminProductsHook
