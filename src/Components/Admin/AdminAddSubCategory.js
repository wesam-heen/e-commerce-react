import { Row, Col  } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import useAddSubCategoryHook from '../../customhook/subCategory/useAddSubCategoryHook'


const AdminAddSubCategory = () => {
    
  const [categories,name,onChangeName,selectChange,handleSubmit]=useAddSubCategoryHook()
 
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                    value={name }
                        type="text"
                        onChange={onChangeName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 " onChange={selectChange}>
                    <option value='0' >اختر تصنيف رئيسي </option>
                    {categories&&
                        categories.data.map((category)=>{
                            return (
                                <option key={category._id} value={category._id}>{category.name} </option>
                            )
                        })
                    }
                       
                       
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2" onClick={handleSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminAddSubCategory
