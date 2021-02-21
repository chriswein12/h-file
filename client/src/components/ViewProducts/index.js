import React from 'react';
import { useQuery } from '@apollo/react-hooks';

//anticipating query, will have to update
//import { GET_PRODUCTS } from '../utils/mutations';

//require authorization?
//import Auth from '../utils/auth';

function ViewProducts() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_PRODUCTS);

    //add option to delete product(s)?
    //useMutation REMOVE_PRODUCT

    //ViewProducts name def in queries?
    const productData = data.viewProducts
    console.log(productData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Product Name: {productData.name}</div>
            <div>Price: {productData.price}</div>
            <div>Date Purchased: {productData.datePurchased}</div>
            <div>Room: {productData.room}</div>
            <div>Serial Number: {productData.serialNumber}</div>
            <div>Model Number: {productData.modelNumber}</div>
            <div>Warranty Length: {productData.warrantyLength}</div>
            <div>Web Link: {productData.webLink}</div>
            <div>Purchase Location: {productData.purchaseLocation}</div>
            <div>Additional Details: {productData.additionalDetails}</div>
        </div>
    )
}

export default ViewProducts;