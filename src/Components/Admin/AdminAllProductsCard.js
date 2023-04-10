import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../images/prod1.png";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/Slices/ProductSlice";
const AdminAllProductsCard = ({product}) => {
const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleDelete =async (id) =>{
    setShow(true);
    await dispatch(deleteProduct(id))
    setShow(false);
    window.location.reload();
  } 

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
    <Modal show={show} onHide={handleClose}>
    <Modal.Header >
      <Modal.Title>هل تريد فعلا حذف المنتج {product.title}؟</Modal.Title>
    </Modal.Header>
    <Modal.Body>عند الضغط على حذف سوف تقوم بحذف المنتج</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        الغاء 
      </Button>
      <Button variant="danger" onClick={()=>handleDelete(product._id)}>
       تأكيد الحذف
      </Button>
    </Modal.Footer>
  </Modal>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={()=>setShow(true)}>ازالة</div>
            <Link to={`/admin/editProduct/${product._id}`} style={{ textDecoration: "none" }}>
            <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                {product.title}
              </div>
            </Card.Title>

            <div className="d-flex justify-content-between">
              <div className="card-rate">{product.ratingsQuantity}</div>
              <div className="d-flex">
                <div className="card-currency mx-1">جنيه</div>
                <div className="card-price">{product.price}</div>
              </div>
            </div>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
