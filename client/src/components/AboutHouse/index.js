import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

//import mutation(s)

//need login mutation and Auth?

import './AboutHouse.css'

function AboutHouse() {
    const [newHouseFormData, setNewHouseFormData] = useState({
        homeName: '',
        //expand out address info?
        address: '',
        yearBought: '',
        yearBuilt: '',
        squareFootage: '',
        value: '',
        lotSize: ''
    });

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewHouse, { error }] = useMutation(ADD_HOUSE);

    //reference Form.Control (bootstrap)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewHouseFormData({
            ...newHouseFormData,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //won't require entire form to be complete,
        //so full validity check not needed,
        //maybe partial validity

        try {
            const { data } = await addNewHouse({
                variables: { ...newHouseFormData }
            });

            console.log(data);
            //Auth.login(data.login.token);
        }
        catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setNewHouseFormData({
            username: '',
            homeName: '',
            address: '',
            yearBought: '',
            yearBuilt: '',
            squareFootage: '',
            value: '',
            lotSize: ''
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
            <h2>New House</h2>
            <div className="new-house-details">
                <Form>
                    <div className="new-house-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="homeName">Home Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="homeName"
                                onChange={handleInputChange}
                                value={newHouseFormData.homeName}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="address">Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                onChange={handleInputChange}
                                value={newHouseFormData.address}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-house-additional">
                        {this.state.isActive ?
                            (
                                <Button
                                    id="new-house-additional-btn"
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
                                        <Form.Label htmlFor="yearBought">Year Bought</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="yearBought"
                                            onChange={handleInputChange}
                                            value={newHouseFormData.yearBought}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="yearBuilt">Year Built</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="yearBuilt"
                                            onChange={handleInputChange}
                                            value={newHouseFormData.yearBuilt}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="squareFootage">Square Footage</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="squareFootage"
                                            onChange={handleInputChange}
                                            value={newHouseFormData.squareFootage}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="value">Value</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="value"
                                            onChange={handleInputChange}
                                            value={newHouseFormData.value}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="lotSize">Lot Size</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lotSize"
                                            onChange={handleInputChange}
                                            value={newHouseFormData.lotSize}
                                        />
                                    </Form.Group>
                                    {/* picture input will go here when added */}
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
    );
}

export default AboutHouse;