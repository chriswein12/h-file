import React from 'react';

function ViewProducts({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Product Name: {home.homeProducts.productName}</div>
            <div>Price: {home.homeProducts.productPrice}</div>
            <div>Date Purchased: {home.homeProducts.datePurchased}</div>
            <div>Room: {home.homeProducts.productRoom}</div>
            <div>Serial Number: {home.homeProducts.serialNumber}</div>
            <div>Model Number: {home.homeProducts.modelNumber}</div>
            <div>Warranty Length: {home.homeProducts.warrantyLength}</div>
            <div>Web Link: {home.homeProducts.productLink}</div>
            <div>Additional Details: {home.homeProducts.productDetails}</div>
        </div>
    );
}

export default ViewProducts;