import React from 'react'
import BrandCard from './BrandCard'

import { Container, Row, Spinner } from 'react-bootstrap';
const BrandContainer = ({ brands, loading }) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                
                {loading === false ? (
                    brands ? (
                        brands.data.map((brand) => {
                        return (
                            <BrandCard img={brand.image} key={brand._id} />
                        );
                      })
                    ) : (
                      <h4>لايوجد ماركات</h4>
                    )
                  ) : (
                    <Spinner animation="border" />
                  )}

            </Row>
        </Container>
    )
}

export default BrandContainer
