import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useAddCategoryHook from "../../customhook/category/useAddCategoryHook";
const AdminAddCategory = () => {
  const [
    img,
    onImageChange,
    name,
    onChangeName,
    loading,
    isPress,
    handleSubmit,
  ] = useAddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={onChangeName}
            type="text"
            value={name || ""}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
