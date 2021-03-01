import React, { useState } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_REMODEL } from '../../utils/mutations';
import Auth from '../../utils/auth';

function ViewRemodels({ home }) {
    const [hidden, setHidden] = useState(false);
    const [removeRemodel, { error }] = useMutation(REMOVE_REMODEL);

    const homeId = home._id;

    const handleDeleteRemodel = async (remodelId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeRemodel({
                variables: { homeId, remodelId }
            });

            console.log(data);
        }
        catch (err) {
            console.error(err);
        }
    }
    if (!home) {
        return <h4>Loading...</h4>
    }

    if (!home.homeRemodels.length) {
        return <h4>No remodels have been added</h4>
    }

    return (
        <div>
            <span className="pl-3">Select item for more details.</span>
            <Accordion variant="flush">
            {home.homeRemodels && home.homeRemodels.map(remodel => (
                <Card key={remodel._id} >
                <div>
                    <Accordion.Toggle className="accordian-item" as={Card.Header} eventKey={`${remodel._id}`}>{remodel.remodelTitle} <span className="date-item float-right">{remodel.remodelStartDate}</span></Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${remodel._id}`}>
                        <Card.Body>
                    <div>Remodel Title: {remodel.remodelTitle}</div>
                    <div>Room: {remodel.remodelRoom}</div>
                    <div>Start Date: {remodel.remodelStartDate}</div>
                    <div>End Date: {remodel.remodelEndDate}</div>
                    <div>Total Cost: {remodel.remodelCost}</div>
                    <div>Remodel Details: {remodel.remodelDetails}</div>
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
                                                    onClick={() => handleDeleteRemodel(remodel._id)}
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

export default ViewRemodels;