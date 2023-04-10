import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import useViewHomeProductHook from '../../customhook/products/useViewHomeProductHook'

const ShopProductsPage = () => {
    const [items,pageCount,getPage]=useViewHomeProductHook()
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title={` ${items&& items.data.length} نتيجة بحث`} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CardProductsContainer  products={items}/>
                    </Col>
                </Row>
                {pageCount > 1 ? (
                    <Pagination pageCount={pageCount} getPage={getPage} />
                  ) : null}
            </Container>
        </div>
    )
}

export default ShopProductsPage
