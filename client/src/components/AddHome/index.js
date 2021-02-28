import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_HOME } from '../../utils/mutations';
import Auth from '../../utils/auth';

function AboutHome() {
    //set intial form state
    const [newHomeFormData, setNewHomeFormData] = useState({
        homeName: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        yearBought: '',
        yearBuilt: '',
        squareFootage: '',
        value: '',
        lotSize: ''
    });

    //set for validation
    const [validated] = useState(false);

    //state for alerts
    const [showAlert, setShowAlert] = useState(false);

    //toggle button/additional info inputs
    const [hidden, setHidden] = useState(false);

    //create const for useMutation(ADD_HOME)
    const [addNewHome, { error }] = useMutation(ADD_HOME);

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
        setNewHomeFormData({
            ...newHomeFormData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //react bootstrap validation - 
        //does it only work on <Form.Control required />?
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     // event.stopPropagation();
        // }
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        
        try {
            const { data } = await addNewHome({
                variables: { homeData: { ...newHomeFormData }}
            });

            window.location('/profile')
        }
        catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setNewHomeFormData({
            homeName: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            yearBought: '',
            yearBuilt: '',
            squareFootage: '',
            value: '',
            lotSize: ''
        });

        
    }

    return (
        <div className="addHome">
            <div className="new-home-details">
            <h2>New Home</h2>

                {/* for validation functionality stated above */}
                <Form noValidate validated={validated}>
                    
                    <div className="new-home-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="homeName">Home Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="homeName"
                                onChange={handleInputChange}
                                value={newHomeFormData.homeName}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="street">Street Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="street"
                                onChange={handleInputChange}
                                value={newHomeFormData.street}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="city">City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                onChange={handleInputChange}
                                value={newHomeFormData.city}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="state">State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                onChange={handleInputChange}
                                value={newHomeFormData.state}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="zip">Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                onChange={handleInputChange}
                                value={newHomeFormData.zip}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-home-additional">
                        {hidden === false ?
                            (
                                <div>
                                    <Button
                                        id="new-home-additional-btn"
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
                                        <Form.Label htmlFor="yearBought">Year Bought</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="yearBought"
                                            onChange={handleInputChange}
                                            value={newHomeFormData.yearBought}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="yearBuilt">Year Built</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="yearBuilt"
                                            onChange={handleInputChange}
                                            value={newHomeFormData.yearBuilt}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="squareFootage">Square Footage</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="squareFootage"
                                            onChange={handleInputChange}
                                            value={newHomeFormData.squareFootage}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="value">Value</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="value"
                                            onChange={handleInputChange}
                                            value={newHomeFormData.value}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="lotSize">Lot Size</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="lotSize"
                                            onChange={handleInputChange}
                                            value={newHomeFormData.lotSize}
                                        />
                                    </Form.Group>
                                    {/* picture input will go here when added */}
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
                        id="new-home-submit-btn"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Finish and Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AboutHome;