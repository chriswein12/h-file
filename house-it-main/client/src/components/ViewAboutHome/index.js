import React from 'react';

function ViewAboutHome({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Address: {home.street}</div>
            <div>City: {home.city}</div>
            <div>State: {home.state}</div>
            <div>Zip Code: {home.zip}</div>
            <div>Year Bought: {home.yearBought}</div>
            <div>Year Built: {home.yearBuilt}</div>
            <div>Square Footage: {home.squareFootage}</div>
            <div>Value: {home.value}</div>
            <div>Lot Size: {home.lotSize}</div>
        </div>
    );
}

export default ViewAboutHome;