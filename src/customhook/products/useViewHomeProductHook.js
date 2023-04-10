import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { getAllProducts, getAllProductsWithPageNumber } from "../../redux/Slices/ProductSlice"


const useViewHomeProductHook = () => {
  
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getAllProducts(4))
    },[dispatch])
    const allProducts=useSelector(state=>state.allProducts.products)
    let items=[];
    if(allProducts){
     items= allProducts.data
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
    
      if(items){
      pageCount=items.paginationResult.numberOfPages;
      }else{
       pageCount=0
      }
    return [items,pageCount,getPage]
}

export default useViewHomeProductHook
