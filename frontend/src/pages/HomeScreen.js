import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {
          products.map(product => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            )
          })
        }
      </Row>
    </>
  )
}

export default HomeScreen;
