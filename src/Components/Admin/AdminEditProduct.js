import { CompactPicker } from "react-color";
import { Row, Col  } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import useAdminEditProductHook from "../../customhook/admin/useAdminEditProductHook";


const AdminEditProduct = () => {
 
  const [
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
        categoryId,BrandId
      ] = useAdminEditProductHook();
      return (
        <div>
          <Row className="justify-content-start ">
            <div className="admin-content-text pb-4"> تعديل المنتج - {productName}</div>
            <Col sm="8">
              <div className="text-form pb-2"> صور للمنتج</div>
              <MultiImageInput
                images={images}
                setImages={setImages}
                theme="light"
                allowCrop={false}
                max={4}
              />
              <input
                value={productName}
                onChange={(e) => {
                  e.persist();
                  setProductName(e.target.value);
                }}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم المنتج"
              />
              <textarea
                value={productDescription}
                onChange={(e) => {
                  e.persist();
                  setProductDescription(e.target.value);
                }}
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="وصف المنتج"
              />
              <input
                type="number"
                value={priceBefore}
                onChange={(e) => {
                  e.persist();
                  setPriceBefore(e.target.value);
                }}
                className="input-form d-block mt-3 px-3"
                placeholder="السعر قبل الخصم"
              />
              <input
                type="number"
                value={priceAfter}
                onChange={(e) => {
                  e.persist();
                  setPriceAfter(e.target.value);
                }}
                className="input-form d-block mt-3 px-3"
                placeholder="سعر المنتج"
              />
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  e.persist();
                  setQuantity(e.target.value);
                }}
                className="input-form d-block mt-3 px-3"
                placeholder="الكمية المتاحة "
              />
              <select
                onChange={onSelectCategory}
                value={categoryId}
                name="languages"
                id="lang"
                className="select input-form-area mt-3 px-2 "
              >
                <option value="0">اختر تصنيف رئيسي </option>
                {categories &&
                  categories.data.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.name}{" "}
                      </option>
                    );
                  })}
              </select>
    
              <Multiselect
                className="mt-2 text-end"
                placeholder="التصنيف الفرعي"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name"
                style={{ color: "red" }}
              />
              <select
                name="brand"
                value={BrandId}
                id="brand"
                className="select input-form-area mt-3 px-2 "
                onChange={onSelectBrand}
              >
                <option value="0">اختر ماركة </option>
                {brands &&
                  brands.data.map((brand) => {
                    return (
                      <option key={brand._id} value={brand._id}>
                        {brand.name}
                      </option>
                    );
                  })}
              </select>
              <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
    
              <div className="mt-1 d-flex">
                {colors &&
                  colors.map((color) => {
                    return (
                      <div
                        className="color ms-2 border  mt-1"
                        onClick={() => removeColor(color)}
                        style={{ backgroundColor: color }}
                        key={color}
                      ></div>
                    );
                  })}
                <img
                  src={add}
                  alt=""
                  width="30px"
                  height="35px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowColorPicker(!showColorPicker);
                  }}
                />
                {showColorPicker && (
                  <CompactPicker onChangeComplete={handleChangeColor} />
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-end ">
              <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
                حفظ التعديلات
              </button>
            </Col>
          </Row>
          <ToastContainer />
        </div>
      );
  
}

export default AdminEditProduct
