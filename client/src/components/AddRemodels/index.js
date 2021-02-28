import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_REMODEL } from '../../utils/mutations';
import Auth from '../../utils/auth';

function AddRemodels({ homeId }) {
    //set initial form state
    const [remodelData, setremodelData] = useState({
        remodelTitle: '',
        remodelRoom: '',
        remodelStartDate: '',
        remodelEndDate: '',
        remodelCost: '',
        remodelDetails: ''
    });

    //set for validation
    const [validated] = useState(false);

    //state for alerts
    const [showAlert, setShowAlert] = useState(false);

    //toggle button/additional info inputs
    const [hidden, setHidden] = useState(false);

    //create const for useMutation(ADD_REMODEL)
    const [addNewRemodel, { error }] = useMutation(ADD_REMODEL);

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
        setremodelData({
            ...remodelData,
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
            const {data} = await addNewRemodel({
                variables: { remodelData, homeId }
            });
            console.log(data);

            window.location.assign(`/profile/${homeId}`);
        }
        catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setremodelData({
            remodelTitle: '',
            remodelRoom: '',
            remodelStartDate: '',
            remodelEndDate: '',
            remodelCost: '',
            remodelDetails: ''
        });
    }

    return (
        <div className="addHome">
            <div className="new-remodel-details">
                <h2>New Remodel</h2>

                <Form noValidate validated={validated}>

                    <div className="new-remodel-required">
                        <h3>Required Details</h3>
                        <Form.Group>
                            <Form.Label htmlFor="remodelTitle">Remodel Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="remodelTitle"
                                onChange={handleInputChange}
                                value={remodelData.remodelTitle}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="remodelRoom">Remodel Room</Form.Label>
                            <Form.Control
                                type="text"
                                name="remodelRoom"
                                onChange={handleInputChange}
                                value={remodelData.remodelRoom}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="remodelStartDate">Remodel Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="remodelStartDate"
                                onChange={handleInputChange}
                                value={remodelData.remodelStartDate}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="remodelEndDate">Remodel End Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="remodelEndDate"
                                onChange={handleInputChange}
                                value={remodelData.remodelEndDate}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="new-remodel-additional">
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
                                    <h3>Additional Details</h3>
                                    <Form.Group>
                                        <Form.Label htmlFor="remodelCost">Remodel Cost</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="remodelCost"
                                            onChange={handleInputChange}
                                            value={remodelData.remodelCost}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="remodelDetails">Remodel Details</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="remodelDetails"
                                            onChange={handleInputChange}
                                            value={remodelData.remodelDetails}
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
                        id="new-remodel-submit-btn"
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

export default AddRemodels;