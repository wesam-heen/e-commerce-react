import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, getPage }) => {
  //when click page get number of page
  //this method return data as a parameter contain selected to get page number
  const handlePageClick = (data) => {
    //get page number then dispatch redux for get data from page
    getPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
