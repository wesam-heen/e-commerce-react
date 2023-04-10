import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

const CategoryContainer = ({ categories, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
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

export default CategoryContainer;
