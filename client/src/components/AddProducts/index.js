import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PRODUCT } from '../../utils/mutations';
import Auth from '../../utils/auth';

function AddProducts({ homeId }) {
    //set initial form state
    const [productData, setproductData] = useState({
        productName: '',
        productPrice: '',
        datePurchased: '',
        productRoom: '',
        serialNumber: '',
        modelNumber: '',
        warrantyLength: '',
        productLink: '',
        productDetails: ''
    });

    //set for validation
    const [validated] = useState(false);

    //state for alerts
    const [showAlert, setShowAlert] = useState(false);

    //toggle button/additional info inputs
    const [hidden, setHidden] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewProduct, { error }] = useMutation(ADD_PRODUCT);

    //set up alert effect
    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setproductData({
            ...productData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //react bootstrap validation - 
        //does it only work on <Form.Control required />?
        //const form = event.currentTarget;
        //if (form.checkValidity() === false) {
        //    event.preventDefault();
        //    event.stopPropagation();
        //}

        //get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const {data} = await addNewProduct({
                variables: { productData, homeId }
            });
            console.log(data);

            window.location.assign(`/profile/${homeId}`);
        }
        catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setproductData({
            productName: '',
            productPrice: '',
            datePurchased: '',
            productRoom: '',
            serialNumber: '',
            modelNumber: '',
            warrantyLength: '',
            productLink: '',
            productDetails: ''
        });
    }

    return (
        <div className="addHome">
            <div className="new-product-details">
                <h2>New Product</h2>

                <Form noValidate validated={validated}>

                    <div className="new-product-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="productName">Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="productName"
                                onChange={handleInputChange}
                                value={productData.productName}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="productPrice">Product Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="productPrice"
                                onChange={handleInputChange}
                                value={productData.productPrice}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="datePurchased">Date Purchased</Form.Label>
                            <Form.Control
                                type="date"
                                name="datePurchased"
                                onChange={handleInputChange}
                                value={productData.datePurchased}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-product-additional">
                        {hidden === false ?
                            (
                                <div>
                                    <Button
                                        id="new-product-additional-btn"
                                        type="button"
                                        onClick={() => setHidden(true)}
                                    >
                                        Add More Details?
                                    </Button>
                                </div>
                            ) :
                            (
                                <div>
                                    <h3>Additional Details</h3>
                                    <Form.Group>
                                        <Form.Label htmlFor="productRoom">Room</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="productRoom"
                                            onChange={handleInputChange}
                                            value={productData.productRoom}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="serialNumber">Serial Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="serialNumber"
                                            onChange={handleInputChange}
                                            value={productData.serialNumber}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="modelNumber">Model Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="modelNumber"
                                            onChange={handleInputChange}
                                            value={productData.modelNumber}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="warrantyLength">Warranty Length</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="warrantyLength"
                                            onChange={handleInputChange}
                                            value={productData.warrantyLength}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="productLink">Product Link</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="productLink"
                                            onChange={handleInputChange}
                                            value={productData.productLink}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="productDetails">Additional Details</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            rows={5}
                                            name="productDetails"
                                            onChange={handleInputChange}
                                            value={productData.productDetails}
                                        />
                                    </Form.Group>
                                    {/* upload goes here when added */}
                                </div>
                            )
                        }
                        <Alert
                            dismissible
                            onClose={() => setShowAlert(false)}
                            show={showAlert}
                            variant='danger'
                        >
                            Something went wrong!
                    </Alert>
                    </div>
                    <Button
                        id="new-product-submit-btn"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Finish and Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddProducts;