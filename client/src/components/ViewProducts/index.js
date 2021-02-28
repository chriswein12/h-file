import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../../utils/queries';

//require authorization?
//import Auth from '../utils/auth';

function ViewProducts() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_HOME);

    //add option to delete product(s)?
    //useMutation REMOVE_PRODUCT

    //ViewProducts name def in queries?
    const productData = data?.home || {};

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Product Name: {productData.productName}</div>
            <div>Price: {productData.productPrice}</div>
            <div>Date Purchased: {productData.datePurchased}</div>
            <div>Room: {productData.productRoom}</div>
            <div>Serial Number: {productData.serialNumber}</div>
            <div>Model Number: {productData.modelNumber}</div>
            <div>Warranty Length: {productData.warrantyLength}</div>
            <div>Web Link: {productData.productLink}</div>
            <div>Additional Details: {productData.productDetails}</div>
        </div>
    );
}

export default ViewProducts;