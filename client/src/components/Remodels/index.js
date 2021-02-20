import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

//import mutation(s)

//need login mutation and Auth?

import './Remodels.css'

function Remodels() {
    const [newRemodelFormData, setNewRemodelFormData] = useState({
        title: '',
        //room as type=select
        room: '',
        startDate: '',
        endDate: '',
        //custom FormCheck rendering for company & their info
        company: '',
        companyPhone: '',
        companyEmail: '',
        companyWebsite: '',
        //build out as array
        products: '',
        totalCost: ''
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

        setNewHouseFormData({
            username: '',
            title: '',
            room: '',
            startDate: '',
            endDate: '',
            company: '',
            companyPhone: '',
            companyEmail: '',
            companyWebsite: '',
            products: '',
            totalCost: ''
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
            <h2>New Remodel</h2>
            <div className="new-remodel-details">
                <Form>
                    <div className="new-remodel-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="title">Remodel Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                onChange={handleInputChange}
                                value={newRemodelFormData.title}
                                required
                            />
                        </Form.Group>
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
                            <Form.Label htmlFor="title">Remodel Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                onChange={handleInputChange}
                                value={newRemodelFormData.title}
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
                                        <Form.Label htmlFor="company">Company</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="company"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.company}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyPhone">Company Phone</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="companyPhone"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.companyPhone}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyEmail">Company Email</Form.Label>
                                        <Form.Control 
                                            type="email"
                                            name="companyEmail"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.companyEmail}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="companyWebsite">Company Website</Form.Label>
                                        <Form.Control 
                                            type="url"
                                            name="companyWebsite"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.companyWebsite}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="products">Products Used</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="products"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.products}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="totalCost">Total Cost</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="totalCost"
                                            onChange={handleInputChange}
                                            value={newRemodelFormData.totalCost}
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