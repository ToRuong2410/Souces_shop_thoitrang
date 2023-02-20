import React, { useEffect } from "react";
import "../Product/Product.css";
import { Button, CardImg, Col, Container, List, Row } from "reactstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

function Product(props) {
  let stateRedux = useSelector((state) => state);
  let listProduct = stateRedux.productRedux.listProduct;
  return (
    <>
      <Container
        style={{
          backgroundColor: "#b5e4f2",
          borderRadius: "25px",
          marginTop: "45px",
        }}
      >
        <Row>
          <Col>
            <h3 className="title-product">SẢN PHẨM NỔT BẬT</h3>
          </Col>
        </Row>

        <Row>
          {listProduct.map((productItem, index) => {
            return (
              <Col xs={3} className="top-20px">
                <Col className="img-product ">
                  <CardImg
                    src={require(`../../../Asset/Product/${productItem.imageName}`)}
                    className="img-product"
                  />
                </Col>
                <Col>
                  <h4 className="text-center-title">{productItem.name}</h4>
                </Col>
                <Col style={{ color: "#d0021c" }}>
                  <h5 className="text-center">{productItem.price}</h5>
                </Col>
                <Col>
                  <p className="text-center">
                    Hãng sản xuất: {productItem.manufacturerName}
                  </p>
                </Col>
                <Col className="float-left" style={{ color: "#fb6e2e" }}>
                  <List type="inline" className="text-center">
                    Đánh giá: {productItem.ratingStar} <FaStar />
                  </List>
                </Col>
                <Col className="text-center">
                  <Button className="button-shopping">
                    <FaShoppingCart className="shopping-icon" />
                    Thêm vào giỏ hàng
                  </Button>
                </Col>
              </Col>
            );
          })}
        </Row>

        {/*  */}
      </Container>
    </>
  );
}

export default Product;

{
  /* <Col xs={3} className="top-20px">
            <Col className="img-product ">
              <CardImg
                src={require("../../../Asset/Product/Product1.jpg")}
                className="img-product"
              />
            </Col>
            <Col>
              <h4 className="text-center-title">DC Milky Way VN V2</h4>
            </Col>
            <Col>
              <p className="text-center">Hãng sản xuất: PNJ</p>
            </Col>
            <Col className="float-left">
              <List type="inline" className="text-center">
                <ListInlineItem>
                  <FaRegStar />
                </ListInlineItem>
                <ListInlineItem>
                  <FaRegStar />
                </ListInlineItem>
                <ListInlineItem>
                  <FaRegStar />
                </ListInlineItem>
                <ListInlineItem>
                  <FaStar />
                </ListInlineItem>
                <ListInlineItem>
                  <FaStar />
                </ListInlineItem>
              </List>
            </Col>
            <Col className="text-center">
              <Button className="button-shopping">
                <FaShoppingCart className="shopping-icon" />
                Thêm vào giỏ hàng
              </Button>
            </Col>
          </Col> */
}
