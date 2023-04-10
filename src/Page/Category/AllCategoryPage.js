import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import useAllCategoryPageHook from "../../customhook/category/useAllCategoryPageHook";
const AllCategoryPage = () => {
  const [categories, loading, pageCount, getPage] = useAllCategoryPageHook();
  
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer categories={categories} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} getPage={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
