import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsSameCategory, getSpecificProduct } from '../../redux/Slices/ProductSlice'
import { getSpecificCategory } from '../../redux/Slices/CategorySlice'
import  { useEffect } from 'react'
import { useMemo } from 'react'
import { getSpecificBrand } from '../../redux/Slices/BrandSlice'
const useViewProductDetailsHook = () => {
  //specific category for product 
  let products=[];
  let category=[];
  let brand=[];
  let prodSameCategory=[]
   //get id from url page
    const {id} =useParams()


    const dispatch=useDispatch()
    useEffect(()=>{
      //to get product depend on id from redux action
      dispatch(getSpecificProduct(id))
    },[id])
   //get specific product from redux
    const specificProduct=useSelector(state=>state.allProducts.specificProduct.data)
         //to show product 
         if(specificProduct){
          products=specificProduct.data;
         }else{
          products=[]
         }
     //get specific category from redux
     const specificCategory=useSelector(state=>state.allCategory.specificCategory.data)
     const specificBrand=useSelector(state=>state.allBrands.specificBrand.data)
     const productsSameCategory=useSelector(state=>state.allProducts.productsSameCategory.data)
     useEffect(()=>{
      if(specificProduct){
      //get specific category depend on id from specific product
        dispatch(getSpecificCategory(specificProduct.data.category))
        //get specific brand depend on id from specific product
        dispatch(getSpecificBrand(specificProduct.data.brand))
        //get products same category 
        dispatch(getProductsSameCategory(specificProduct.data.category))
      }
      },[specificProduct])


     //to show category 
      if(specificCategory){
      category=specificCategory.data;
     }else{
      category=[]
     }

     //to show brand 
      if(specificBrand){
        brand=specificBrand.data;
        }else{
        brand=[]
        }
   

     //to show products same category 
      if(productsSameCategory){
        prodSameCategory=productsSameCategory;
        }else{
          prodSameCategory=[]
        }

        
     //for get images products  
     let images=[];
     if(specificProduct){
          images=specificProduct.data.images.map(img=>{
             return {
                 original:`${img}`
             }
         })
        }
  
  return [products,category,images,brand,prodSameCategory]
}

export default useViewProductDetailsHook
