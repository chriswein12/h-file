import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { ADD_PRODUCT } from '../../utils/mutations';

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
        });
    }

    //default add details button renders, onclick hides button
    //and renders the additional details section
    state = {
        isActive: true
    }

    const toggleShow = () => {
        this.setState({
            isActive: false
        });
    }

    return (
        <div>
            <h2>New Product</h2>
            <div className="new-product-details">
                <Form>
                    <div className="new-product-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="name">Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                value={newProductFormData.name}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                onChange={handleInputChange}
                                value={newProductFormData.price}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="datePurchased">Date Purchased</Form.Label>
                            <Form.Control
                                type="text"
                                name="datePurchased"
                                onChange={handleInputChange}
                                value={newProductFormData.datePurchased}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-product-additional">
                        {this.state.isActive ?
                            (
                                <Button
                                    id="new-product-additional-btn"
                                    type="button"
                                    onClick={toggleShow}
                                >
                                    Add More Details?
                                </Button>
                            ) :
                            (
                                <div>
                                    <h3>Additional Details</h3>
                                    <Form.Group>
                                        <Form.Label htmlFor="room">Room</Form.Label>
                                        <Form.Control
                                            type="select"
                                            name="room"
                                            onChange={handleInputChange}
                                            value={newProductFormData.room}
                                        >
                                            <option>Living Room</option>
                                            <option>Kitchen</option>
                                            <option>Basement</option>
                                            <option>Master Bedroom</option>
                                            <option>Bedroom</option>
                                            <option>Outside</option>
                                            <option>Other/Add</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="serialNumber">Serial Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="serialNumber"
                                            onChange={handleInputChange}
                                            value={newProductFormData.serialNumber}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="modelNumber">Model Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="modelNumber"
                                            onChange={handleInputChange}
                                            value={newProductFormData.modelNumber}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="warrantyLength">Warranty Length</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="warrantyLength"
                                            onChange={handleInputChange}
                                            value={newProductFormData.warrantyLength}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="webLink">Web Link</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="webLink"
                                            onChange={handleInputChange}
                                            value={newProductFormData.webLink}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="purchaseLocation">Purchase Location</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="purchaseLocation"
                                            onChange={handleInputChange}
                                            value={newProductFormData.purchaseLocation}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="additionalDetails">Additional Details</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            rows={5}
                                            name="additionalDetails"
                                            onChange={handleInputChange}
                                            value={newProductFormData.additionalDetails}
                                        />
                                    </Form.Group>
                                    {/* upload goes here when added */}
                                </div>
                            )
                        }
                    </div>
                    <Button
                        id="new-house-submit-btn"
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

export default Products;