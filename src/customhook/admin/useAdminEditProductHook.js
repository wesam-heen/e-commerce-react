import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/Slices/CategorySlice";
import { getAllBrand } from "../../redux/Slices/BrandSlice";
import { getAllSubCategory } from "../../redux/Slices/SubCategorySlice";
import {
  EditProduct,
  getSpecificProduct,
} from "../../redux/Slices/ProductSlice";
import notify from "../../customhook/useNotification";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const useAdminEditProductHook = () => {
  const { id } = useParams();
 
  const dispatch = useDispatch();

  //get all category from redux
  useEffect(() => {
    
    //get all category
    dispatch(getAllCategory());
    //dispatch action brand redux
    dispatch(getAllBrand(6));
  }, [dispatch]);

  //get all category
  const categories = useSelector((state) => state.allCategory.category.data);
  //get all brands
  const brands = useSelector((state) => state.allBrands.brands.data);
  //when select or remove from subcategory multiselect
  const onSelect = (selectedList) => {
    //when select from multi select in subcategory
    setSelectedSubCategory(selectedList);
  };
  const onRemove = (selectedList) => {
    //when remove select from multi select in subcategory
    setSelectedSubCategory(selectedList);
  };

  //to save multi images (image save by use base 64)
  const [images, setImages] = useState({});
  //we need get values and store it by use state(values state)
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [BrandId, setBrandId] = useState("");
  const [loading, setLoading] = useState(true);
  //all sub category depend on category id
  const [subCatId, setSubCatId] = useState([]);
  //select subcategory from all sub category
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  //to show hide show color picker
  const [showColorPicker, setShowColorPicker] = useState(false);
  //to store all pick color
  const [colors, setColors] = useState([]);
  //remove color
  const removeColor = (selectColor) => {
    //filter old array and remove selected color
    const newColors = colors.filter((color) => color !== selectColor);
    setColors(newColors);
  };
  //when choose color from picker
  const handleChangeColor = (color) => {
    //to select color and save colors in array (color is object from package react-color)
    setColors([...colors, color.hex]);
    //show or hide color picker
    setShowColorPicker(!showColorPicker);
  };

  //options for sub category
  const [options, setOptions] = useState([]);
  //get all sub category
  const subCategory = useSelector(
    (state) => state.subCategory.subCategory.data
  );
  //when select category store id
  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      await dispatch(getAllSubCategory(e.target.value));
    }
    setCategoryId(e.target.value);
  };
  useMemo(() => {
    if (categoryId !== 0) {
      if (subCategory) {
        setOptions(subCategory.data);
      }
    }
  }, [categoryId]);

  //when select brand store id
  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };

  //to convert base 64 to file
  function dataURLtoFile(dataUrl, filename) {
    var arr = dataUrl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  //to send data to api
  const handleSubmit = async (e) => {
   
  };

  //get all products (get message response)
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (loading === false) {
      setProductName("");
      setProductDescription("");
      setCategoryId("");
      setPriceBefore("");
      setPriceAfter("");
      setQuantity("");
      setBrandId("");
      setSelectedSubCategory([]);
      setImages({});
      setColors([]);
      setOptions([]);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      if (products) {
        if (products.status === 201) {
          notify("تمت اضافة المنتج بنجاح", "success");
        } else {
          notify("يوجد مشكلة ", "error");
        }
      }
    }
  }, [loading]);

  return [
    images,
    setImages,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    quantity,
    setQuantity,
    onSelectCategory,
    categories,
    options,
    onSelect,
    onRemove,
    onSelectBrand,
    brands,
    colors,
    removeColor,
    setShowColorPicker,
    showColorPicker,
    handleChangeColor,
    handleSubmit,
  ];



};

export default useAdminEditProductHook;
