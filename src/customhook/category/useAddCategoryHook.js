import { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/Slices/CategorySlice";
import notify from "../../customhook/useNotification";

const useAddCategoryHook = () => {
  //to set img default and show in screen
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState(undefined);
  //selected image path
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  //status code for request
  const status = useSelector((state) => state.allCategory.category.status);

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
    await dispatch(createCategory(formData));
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
};

export default useAddCategoryHook;
