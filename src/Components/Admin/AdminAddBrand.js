import React from 'react'
import { Row,Col, Spinner  } from 'react-bootstrap'
import { ToastContainer } from "react-toastify";
import useAddBrandHook from '../../customhook/brand/useAddBrandHook'
import avatar from '../../images/avatar.png'
const AdminAddBrand = () => {

    const [
        img,
        onImageChange,
        name,
        onChangeName,
        loading,
        isPress,
        handleSubmit,
      ] = useAddBrandHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
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
                        type="text"
                        value={name || ""}
                        onChange={onChangeName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2" onClick={handleSubmit}>حفظ التعديلات</button>
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
    )
}

export default AdminAddBrand
