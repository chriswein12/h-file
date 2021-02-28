import React from 'react';

function ViewProducts({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    if (!home.homeProducts.length) {
        return <h4>No products have been added</h4>
    }

    return (
        <div>
            {home.homeProducts && home.homeProducts.map(product => (
                <div key={product._id}>
                    <div>Product Name: {product.productName}</div>
                    <div>Price: {product.productPrice}</div>
                    <div>Date Purchased: {product.datePurchased}</div>
                    <div>Room: {product.productRoom}</div>
                    <div>Serial Number: {product.serialNumber}</div>
                    <div>Model Number: {product.modelNumber}</div>
                    <div>Warranty Length: {product.warrantyLength}</div>
                    <div>Web Link: {product.productLink}</div>
                    <div>Additional Details: {product.productDetails}</div>
                </div>
            ))}
        </div>
    );
}

export default ViewProducts;