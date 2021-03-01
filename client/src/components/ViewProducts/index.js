import React from 'react';
import { Card, Accordion } from 'react-bootstrap'

function ViewProducts({ home }) {
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
                <div key={product._id}>
                    <Accordion.Toggle className="accordian-item" as={Card.Header} eventKey={`${product._id}`}>{product.productName} <span className="date-item float-right">{product.datePurchased}</span></Accordion.Toggle>
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