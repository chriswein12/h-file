import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SERVICE } from '../../utils/mutations';

//need login mutation and Auth?
function Services() {
    const [newServiceFormData, setNewServiceFormData] = useState({
        serviceTitle: '',
        serviceCost: '',
        serviceFrequency: '',
        serviceDate: '',
        serviceDescription: '',
        serviceContact: ''
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
            serviceTitle: '',
            serviceCost: '',
            serviceFrequency: '',
            serviceDate: '',
            serviceDescription: '',
            serviceContact: ''
        });
    }

    //default add details button renders, onclick hides button
    //and renders the additional details section
    const state = {
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
                            <Form.Label htmlFor="serviceTitle">Service Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="serviceTitle"
                                onChange={handleInputChange}
                                value={newServiceFormData.serviceTitle}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="serviceCost">Service Cost</Form.Label>
                            <Form.Control
                                type="text"
                                name="serviceCost"
                                onChange={handleInputChange}
                                value={newServiceFormData.serviceCost}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="serviceFrequency">Service Frequency</Form.Label>
                            <Form.Control
                                type="select"
                                name="serviceFrequency"
                                onChange={handleInputChange}
                                value={newServiceFormData.serviceFrequency}
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
                            <Form.Label htmlFor="serviceDate">Date of Service</Form.Label>
                            <Form.Control
                                type="text"
                                name="serviceDate"
                                onChange={handleInputChange}
                                value={newServiceFormData.serviceDate}
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
                                        <Form.Label htmlFor="serviceDescription">Service Description</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            rows={5}
                                            name="serviceDescription"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.serviceDescription}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="serviceContact">Service Contact</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="serviceContact"
                                            onChange={handleInputChange}
                                            value={newServiceFormData.serviceContact}
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