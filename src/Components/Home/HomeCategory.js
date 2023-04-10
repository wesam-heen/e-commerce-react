import { Container, Row, Spinner } from "react-bootstrap";
import useHomeCategoryHook from "../../customhook/category/useHomeCategoryHook";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";

const HomeCategory = () => {
  const [categories, loading] = useHomeCategoryHook();
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          categories ? (
            categories.data.map((category) => {
              return (
                <CategoryCard
                  title={category.name}
                  img={category.image}
                  key={category.name}
                />
              );
            })
          ) : (
            <h4>لايوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
