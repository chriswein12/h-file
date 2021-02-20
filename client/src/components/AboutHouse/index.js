import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

//need login mutation and Auth?

function AboutHouse() {
    const [newHouseFormData, setNewHouseFormData] = useState({
        homeName: '',
        address: '',
        yearBought: '',
        yearBuilt: '',
        squareFootage: '',
        value: '',
        lotSize: '',
        picture: ''
    });

    //add front end validation?
    //const [validated] = useState(false);

    //add alert for auth issues?
    //const [showAlert, setShowAlert] = useState(false);

    //create const for anticipated mutation (will need to update)
    const [addNewHouse, { error }] = useMutation(ADD_HOUSE);

    //reference Form.Control
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
            lotSize: '',
            picture: ''
        });
    }

    const unhideAdditional = () => {
        const additional = document.querySelector('.new-house-additional');
        additional.removeAttribute('className');
    }

    return (
        <div>
            <h2>New House</h2>
            <Form>
                <div className="new-house-details">
                    <div className="new-house-required">
                        <Form.Group>
                            <Form.Label htmlFor=""></Form.Label>

                        </Form.Group>
                    </div>
                    <div className="new-house-additional">

                    </div>
                </div>
            </Form>
        </div>
    );
}

export default AboutHouse;