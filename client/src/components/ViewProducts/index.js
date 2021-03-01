import React, { useState } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_PRODUCT } from '../../utils/mutations';
import Auth from '../../utils/auth';

function ViewProducts({ home }) {
    const [hidden, setHidden] = useState(false);
    const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT);

    const homeId = home._id;

    const handleDeleteProduct = async (productId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeProduct({
                variables: { homeId, productId }
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

    if (!home.homeProducts.length) {
        return <h4>No products have been added</h4>
    }

    // const [modalState, setModalState] = useState();

    // const handleShowModal = () => {
    //     setModalState()
    // }

    return (
        <div>
            <span className="pl-3">Select item for more details.</span>
            <Accordion variant="flush">
                {home.homeProducts && home.homeProducts.map(product => (
                    <Card>
                        <div>
                            <Accordion.Toggle className="accordian-item" as={Card.Header} key={product._id} eventKey={`${product._id}`}>{product.productName} <span className="date-item float-right">{product.datePurchased}</span></Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${product._id}`}>
                                <Card.Body>
                                    <div>Product Name: {product.productName}</div>
                                    <div>Price: {product.productPrice}</div>
                                    <div>Date Purchased: {product.datePurchased}</div>
                                    <div>Room: {product.productRoom}</div>
                                    <div>Serial Number: {product.serialNumber}</div>
                                    <div>Model Number: {product.modelNumber}</div>
                                    <div>Warranty Length: {product.warrantyLength}</div>
                                    <div>Web Link: {product.productLink}</div>
                                    <div>Additional Details: {product.productDetails}</div>
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
                                                    onClick={() => handleDeleteProduct(product._id)}
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

export default ViewProducts;