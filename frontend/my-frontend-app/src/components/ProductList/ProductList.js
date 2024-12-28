import React from 'react';
//import './ProductList.css'; // Optional: Import styling if needed

const ProductList = () => {
    const products = ["Software Technology", "Mobile Development", "Systems Creations"]; // Example data
    return (
        <div>
            <h2>Welcome To Mavmo site where your software dreams come true</h2>
            <h3>The follwing is what we offer:</h3>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
