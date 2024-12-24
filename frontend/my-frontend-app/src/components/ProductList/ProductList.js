import React from 'react';
//import './ProductList.css'; // Optional: Import styling if needed

const ProductList = () => {
    const products = ["Product 1", "Product 2", "Product 3"]; // Example data
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
