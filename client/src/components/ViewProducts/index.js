import React from 'react';

function ViewProducts({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Product Name: {home.productName}</div>
            <div>Price: {home.productPrice}</div>
            <div>Date Purchased: {home.datePurchased}</div>
            <div>Room: {home.productRoom}</div>
            <div>Serial Number: {home.serialNumber}</div>
            <div>Model Number: {home.modelNumber}</div>
            <div>Warranty Length: {home.warrantyLength}</div>
            <div>Web Link: {home.productLink}</div>
            <div>Additional Details: {home.productDetails}</div>
        </div>
    );
}

export default ViewProducts;