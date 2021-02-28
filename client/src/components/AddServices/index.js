import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SERVICE } from '../../utils/mutations';
import Auth from '../../utils/auth';

function AddServices({ homeId }) {
    //set initial form state
    const [serviceData, setserviceData] = useState({
        serviceTitle: '',
        serviceCost: '',
        serviceFrequency: '',
        serviceDate: '',
        serviceDescription: ''
    });

    //set for validation
    const [validated] = useState(false);

    //state for alerts
    const [showAlert, setShowAlert] = useState(false);

    //toggle button/additional info inputs
    const [hidden, setHidden] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewService, { error }] = useMutation(ADD_SERVICE);

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
        setserviceData({
            ...serviceData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //react bootstrap validation - 
        //does it only work on <Form.Control required />?
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        //get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await addNewService({
                variables: { serviceData, homeId }
            });
            console.log(data);

            window.location.assign(`/profile/${homeId}`);
        }
        catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setserviceData({
            serviceTitle: '',
            serviceCost: '',
            serviceFrequency: '',
            serviceDate: '',
            serviceDescription: ''
        });
    }

    return (
        <div className="addHome">
            <div className="new-service-details">
                <h2>New Service</h2>

                <Form noValidate validated={validated}>

                    <div className="new-service-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="serviceTitle">Service Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="serviceTitle"
                                onChange={handleInputChange}
                                value={serviceData.serviceTitle}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="serviceCost">Service Cost</Form.Label>
                            <Form.Control
                                type="number"
                                name="serviceCost"
                                onChange={handleInputChange}
                                value={serviceData.serviceCost}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="serviceFrequency">Service Frequency</Form.Label>
                            <Form.Control
                                type="text"
                                name="serviceFrequency"
                                onChange={handleInputChange}
                                value={serviceData.serviceFrequency}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="serviceDate">Date of Service</Form.Label>
                            <Form.Control
                                type="date"
                                name="serviceDate"
                                onChange={handleInputChange}
                                value={serviceData.serviceDate}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-service-additional">
                        {hidden === false ?
                            (
                                <Button
                                    id="new-remodel-additional-btn"
                                    type="button"
                                    onClick={() => setHidden(true)}
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
                                            value={serviceData.serviceDescription}

                                        />
                                    </Form.Group>
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
                        id="new-service-submit-btn"
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

export default AddServices;