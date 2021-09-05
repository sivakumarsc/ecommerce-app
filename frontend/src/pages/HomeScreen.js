import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

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
