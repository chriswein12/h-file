import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_REMODEL } from '../../utils/mutations';

//need login mutation and Auth?

import './Remodels.css'

function Remodels() {
    const [newRemodelFormData, setNewRemodelFormData] = useState({
        remodelTitle: '',
        remodelRoom: '',
        remodelStartDate: '',
        remodelEndDate: '',
        remodelCost: '',
        remodelDetails: '',
        remodelContacts: ''
    });

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewRemodel, { error }] = useMutation(ADD_REMODEL);

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
            const { data } = await addNewRemodel({
                variables: { ...newRemodelFormData }
            });

            console.log(data);
            //Auth.login(data.login.token);
        }
        catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setNewRemodelFormData({
            //username: '',
            remodelTitle: '',
            remodelRoom: '',
            remodelStartDate: '',
            remodelEndDate: '',
            remodelCost: '',
            remodelDetails: '',
            remodelContacts: ''
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
            <h2>New Remodel</h2>
            <div className="new-remodel-details">
                <Form>
                    <div className="new-remodel-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="remodelTitle">Remodel Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="remodelTitle"
                                onChange={handleInputChange}
                                value={newRemodelFormData.remodelTitle}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="remodelRoom">Remodel Room</Form.Label>
                            <Form.Control
                                type="select"
                                name="remodelRoom"
                                onChange={handleInputChange}
                                value={newRemodelFormData.remodelRoom}
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
                            <Form.Label htmlFor="remodelStartDate">Remodel Start Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="remodelStartDate"
                                onChange={handleInputChange}
                                value={newRemodelFormData.remodelStartDate}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="remodelEndDate">Remodel End Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="remodelEndDate"
                                onChange={handleInputChange}
                                value={newRemodelFormData.remodelEndDate}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-remodel-additional">
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
                                    <h3>Additional Details</h3>
                                    <Form.Group>
                                        <Form.Label htmlFor="remodelCost">Remodel Cost</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="remodelCost"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.remodelCost}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="remodelDetails">Remodel Details</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="remodelDetails"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.remodelDetails}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="remodelContacts">Remodel Contacts</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="remodelContacts"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.remodelContacts}
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

export default Remodels;