import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
           {
            products ?(
                products.data.map(product=>{
                    return <AdminAllProductsCard key={product._id} product={product}/>
                })
            ):<h4>لايوجد منتجات</h4>
           }

            

            </Row>
            
        </div>
    )
}

export default AdminAllProducts
