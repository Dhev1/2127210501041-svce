


import React from 'react';
import './productlist.css'; 

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.name}>
          
          <div className="product-details">
          <p><strong>Name</strong> {product.productname}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</p>
            <p><strong>Discount:</strong> {product.discount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
