import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

//import mutation(s)

//need login mutation and Auth?

import './Products.css'

function Products() {
    const [newProductFormData, setNewProductFormData] = useState({
        name: '',
        price: '',
        datePurchased: '',
        room: '',
        serialNumber: '',
        modelNumber: '',
        warrantyLength: '',
        webLink: '',
        purchaseLocation: '',
        additionalDetails: ''
    });

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewProduct, { error }] = useMutation(ADD_PRODUCT);

    //reference Form.Control (bootstrap)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProductFormData({
            ...newProductFormData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //won't require entire form to be complete,
        //so full validity check not needed,
        //maybe partial validity

        try {
            const { data } = await addNewProduct({
                variables: { ...newProductFormData }
            });

            console.log(data);
            //Auth.login(data.login.token)
        }
        catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setNewProductFormData({
            username: '',
            name: '',
            price: '',
            datePurchased: '',
            room: '',
            serialNumber: '',
            modelNumber: '',
            warrantyLength: '',
            webLink: '',
            purchaseLocation: '',
            additionalDetails: ''
        })
    }
}

export default Products;