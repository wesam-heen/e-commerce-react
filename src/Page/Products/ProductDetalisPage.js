  import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import useViewProductDetailsHook from '../../customhook/products/useViewProductDetailsHook'


const ProductDetalisPage = () => {
   
    const [,,,,prodSameCategory]=useViewProductDetailsHook()
   
 
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis  />
                <RateContainer />
                <CardProductsContainer title="منتجات قد تعجبك" products={prodSameCategory.length !== 0 && prodSameCategory} />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
