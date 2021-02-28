import React from 'react';

function ViewServices({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    if (!home.homeServices.length) {
        return <h4>No services have been added</h4>
    }

    return (
        <div>
            {home.homeServices && home.homeServices.map(service => (
                <div key={service._id}>
                    <div>Title: {service.serviceTitle}</div>
                    <div>Cost: {service.serviceCost}</div>
                    <div>Frequency: {service.serviceFrequency}</div>
                    <div>Date of Service: {service.serviceDate}</div>
                    <div>Description: {service.serviceDescription}</div>
                </div>
            ))}
        </div>
    );
}

export default ViewServices;