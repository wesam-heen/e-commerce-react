import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import useHomeBrandHook from '../../customhook/brand/useHomeBrandHook';




const BrandFeatured = ({ title, btntitle }) => {

   const [brands, loading]=useHomeBrandHook()

   
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
            {loading === false ? (
                brands ? (
                    brands.data.map((brand) => {
                    return (
                      <BrandCard
                         img={brand.image}
                        key={brand._id}
                      />
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

export default BrandFeatured
