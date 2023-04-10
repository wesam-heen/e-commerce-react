import { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../customhook/useNotification";
import { createBrand } from "../../redux/Slices/BrandSlice";

const useAddBrandHook = () => {
 //to set img default and show in screen
 const [img, setImg] = useState(avatar);
 //to set name when change input 
 const [name, setName] = useState(undefined);
 //selected image path to send 
 const [selectedFile, setSelectedFile] = useState(null);

 //loading for data 
 const [loading, setLoading] = useState(true);
 //if admin click save edit
 const [isPress, setIsPress] = useState(false);
 const dispatch = useDispatch();
 //status code for request
 const status = useSelector((state) => state.allBrands.brands.status);

 //when user change image save it and display in screen
 const onImageChange = (e) => {
   if (e.target.files && e.target.files[0]) {
     setImg(URL.createObjectURL(e.target.files[0]));
     setSelectedFile(e.target.files[0]);
   }
 };
 //on change name
 const onChangeName = (e) => {
   setName(e.target.value);
 };

 //save data in data base
 const handleSubmit = async (e) => {
   e.preventDefault();
   if (name === "" || selectedFile === null) {
     notify("من فضلك أكمل البيانات", "warn");
     return;
   }
   const formData = new FormData();
   formData.append("name", name);
   formData.append("image", selectedFile);
   setIsPress(true);
   await dispatch(createBrand(formData));
   setLoading(false);
 };

 //when loading finish and change value
 useEffect(() => {
   if (loading === false) {
     setName("");
     setImg(avatar);
     setSelectedFile(null);
     setLoading(true);
     setTimeout(() => {
       setIsPress(false);
     }, 1000);
     if (status === 201) {
       notify("تمت عملية الإضافة بنجاح", "success");
     } else {
       notify("فشلت عملية الإضافة ", "error");
     }
   }
 }, [loading]);
 return [
   img,
   onImageChange,
   name,
   onChangeName,
   loading,
   isPress,
   handleSubmit,
 ];
}

export default useAddBrandHook
