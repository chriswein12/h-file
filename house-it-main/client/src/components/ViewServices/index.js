import React, { useState } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_SERVICE } from '../../utils/mutations';
import Auth from '../../utils/auth';

function ViewServices({ home }) {
    const [hidden, setHidden] = useState(false);
    const [removeService, { error }] = useMutation(REMOVE_SERVICE);

    const homeId = home._id;

    const handleDeleteService = async (serviceId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeService({
                variables: { homeId, serviceId }
            });

            console.log(data);
            setHidden(false);
        }
        catch (err) {
            console.error(err);
        }
    }

    if (!home) {
        return <h4>Loading...</h4>
    }

    if (!home.homeServices.length) {
        return <h4>No services have been added</h4>
    }

    return (
        <div>
            <span className="pl-3">Select item for more details.</span>
            <Accordion variant="flush">
                {home.homeServices && home.homeServices.map(service => (
                    <Card key={service._id} >
                        <div>
                            <Accordion.Toggle className="accordian-item" as={Card.Header} eventKey={`${service._id}`}>{service.serviceTitle} <span className="date-item float-right">{service.serviceDate}</span></Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${service._id}`}>
                                <Card.Body>
                                    <div>Title: {service.serviceTitle}</div>
                                    <div>Cost: {service.serviceCost}</div>
                                    <div>Frequency: {service.serviceFrequency}</div>
                                    <div>Date of Service: {service.serviceDate}</div>
                                    <div>Description: {service.serviceDescription}</div>
                                    {hidden === false ?
                                        (
                                            <div>
                                                <Button
                                                    variant="danger"
                                                    type="button"
                                                    onClick={() => setHidden(true)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        ) :
                                        (
                                            <div>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    onClick={() => setHidden(false)}
                                                >
                                                    Cancel Delete
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    type="button"
                                                    onClick={() => handleDeleteService(service._id)}
                                                >
                                                    Confirm Delete
                                                </Button>
                                            </div>
                                        )
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </div>
                    </Card>
                ))}
            </Accordion>
        </div>
    );
}

export default ViewServices;