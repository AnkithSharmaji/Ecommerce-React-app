import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';

const Products = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
