import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import useAllBrandPageHook from '../../customhook/brand/useAllBrandPageHook'
const AllBrand = () => {

    const [brands, loading, pageCount, getPage]=useAllBrandPageHook()
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer brands={brands} loading={loading} />
            {pageCount > 1 ? (
                <Pagination pageCount={pageCount} getPage={getPage} />
              ) : null}
        </div>
    )
}

export default AllBrand
