import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { ADD_BUSINESS_CARD } from 'react-bootstrap';

//login mutation and Auth

import './BusinessCard.css'

function BusinessCard() {
    const [newBusinessCardFormData, setNewBusinessCardFormData] = useState({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        website: ''
    });

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewBusinessCard, { error }] = useMutation(ADD_BUSINESS_CARD);

    //reference Form.Control (bootstrap)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBusinessCardFormData({
            ...newBusinessCardFormData,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //won't require entire form to be complete,
        //so full validity check not needed,
        //maybe partial validity

        try {
            const { data } = await addNewBusinessCard({
                variables: { ...newBusinessCardFormData }
            });

            //Auth.login(data.login.token);
        }
        catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setNewBusinessCardFormData({
            //username: '',
            businessName: '',
            contactName: '',
            phone: '',
            email: '',
            website: ''
        });
    }

    return (
        <div>
            <h2>New Business Card</h2>
            <div className="new-business-card-details">
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="businessName">Business Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="businessName"
                            onChange={handleInputChange}
                            value={newBusinessCardFormData.businessName}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="contactName">Contact Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="contactName"
                            onChange={handleInputChange}
                            value={newBusinessCardFormData.contactName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="phone">Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            onChange={handleInputChange}
                            value={newBusinessCardFormData.phone}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            value={newBusinessCardFormData.email}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="website">Website</Form.Label>
                        <Form.Control
                            type="text"
                            name="website"
                            onChange={handleInputChange}
                            value={newBusinessCardFormData.website}
                        />
                    </Form.Group>
                    <Button
                        id="new-business-card-submit-btn"
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

export default BusinessCard;