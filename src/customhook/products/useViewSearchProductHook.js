import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { getAllProducts } from "../../redux/Slices/ProductSlice"

const useViewSearchProductHook = () => {

    
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
    
    return [items]
}

export default useViewSearchProductHook
