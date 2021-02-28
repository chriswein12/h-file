import React from 'react';

function ViewServices({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }


    return (
        <div>
            <div>Title: {home.serviceTitle}</div>
            <div>Cost: {home.serviceCost}</div>
            <div>Frequency: {home.serviceFrequency}</div>
            <div>Date of Service: {home.serviceDate}</div>
            <div>Description: {home.serviceDescription}</div>
        </div>
    );
}

export default ViewServices;