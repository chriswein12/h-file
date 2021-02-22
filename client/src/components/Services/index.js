import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { ADD_SERVICE } from '../../utils/mutations';

//need login mutation and Auth?

import './Services.css'

function Services() {
    const [newServiceFormData, setNewServiceFormData] = useState({
        title: '',
        cost: '',
        //type = select
        frequency: '',
        date: '',
        //textarea, rows
        description: '',
        serviceProvider: '',
        companyContact: '',
        companyPhone: '',
        //type = email
        companyEmail: '',
        companyWebsite: '',
        products: ''
    })

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewService, { error }] = useMutation(ADD_SERVICE);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewServiceFormData({
            ...newServiceFormData,
            [name]: value
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewRemodelFormData({
            ...newRemodelFormData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //won't require entire form to be complete,
        //so full validity check not needed,
        //maybe partial validity

        try {
            const { data } = await addNewService({
                variables: { ...newServiceFormData }
            });

            console.log(data);
            //Auth.login(data.login.token);
        }
        catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setNewServiceFormData({
            //username: '',
            title: '',
            cost: '',
            frequency: '',
            date: '',
            description: '',
            serviceProvider: '',
            companyContact: '',
            companyPhone: '',
            companyEmail: '',
            companyWebsite: '',
            products: ''
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
            <h2>New Service</h2>
            <div className="new-service-details">
                <Form>
                    <div className="new-service-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="title">Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={handleInputChange}
                                value={newServiceFormData.title}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="cost">Cost</Form.Label>
                            <Form.Control
                                type="text"
                                name="cost"
                                onChange={handleInputChange}
                                value={newServiceFormData.cost}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="frequency">Frequency</Form.Label>
                            <Form.Control
                                type="select"
                                name="frequency"
                                onChange={handleInputChange}
                                value={newProductFormData.frequency}
                                required
                            >
                                <option>One-time</option>
                                <option>Monthly</option>
                                <option>Every 3 Months</option>
                                <option>Every 6 Months</option>
                                <option>Yearly</option>
                                <option>Other/Add</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="date">Date of Service</Form.Label>
                            <Form.Control
                                type="text"
                                name="date"
                                onChange={handleInputChange}
                                value={newServiceFormData.date}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-service-additional">
                        {this.state.isActive ?
                            (
                                <Button
                                    id="new-remodel-additional-btn"
                                    type="button"
                                    onClick={toggleShow}
                                >
                                    Add More Details?
                                </Button>
                            ) :
                            (
                                <div>
                                    <Form.Group>
                                        <Form.Label htmlFor="description">Description</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            rows={5}
                                            name="description"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.description}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="serviceProvider">Service Provider</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="serviceProvider"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.serviceProvider}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyContact">Contact Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyContact"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.companyContact}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyPhone">Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyPhone"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.companyPhone}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyEmail">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="companyEmail"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.companyEmail}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyWebsite">Website</Form.Label>
                                        <Form.Control
                                            type="url"
                                            name="companyWebsite"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.companyWebsite}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="products">Product(s)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="products"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.products}
                                            required
                                        />
                                    </Form.Group>
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

export default Services;