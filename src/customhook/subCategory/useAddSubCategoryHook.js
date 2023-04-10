import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../../customhook/useNotification'
import { getAllCategory } from '../../redux/Slices/CategorySlice'
import { createSubCategory } from '../../redux/Slices/SubCategorySlice'
import CheckInternet from '../useCheckInternet'



const useAddSubCategoryHook = () => {
    const dispatch=useDispatch()

    //id for main category
    const [id,setId]=useState('0')
    //name of sub category
    const [name,setName]=useState('')
    //loading 
    const [loading,setLoading]=useState(true)
   
   
   
    useEffect(()=>{
        dispatch(getAllCategory())
       },[])
   
   
      //get category
       const categories= useSelector(state => state.allCategory.category.data )
      //get subcategory status
      const subCategories=useSelector(state => state.subCategory.subCategory)
   
   
       //on change drop down menu (select) 
       const selectChange=(e)=>{
           //set id equal selected category id
           setId(e.target.value)
       }
   
       const onChangeName=(e)=>{
           e.persist();
           setName(e.target.value)
       }
   
       //on save data 
       const handleSubmit=async (e)=>{
           e.preventDefault()
           CheckInternet()
           if(id === '0'){
               notify('من فضلك اختر تصنيف رئيسي','warn')
               return;
           }
           if(name ===''){
               notify('من فضلك اكتب اسم التصنيف الفرعي    ','warn')
           }
   
           setLoading(true)
           await dispatch(createSubCategory({
               "name": name,
               "category":id
            }))
           setLoading(false)
       }
   
       useEffect(()=>{
          if(loading===false){
           setName('')
           setId(0)
          
               if(subCategories.status === 201  ){
                   
                   notify('تمت الإضافة بنجاح ' , 'success')
               }else{
                   notify('هناك مشكلة في عملية الإضافة','error')
                   
               }
          
          }
       },[loading])

       return [categories,name,onChangeName,selectChange,handleSubmit]
}

export default useAddSubCategoryHook
