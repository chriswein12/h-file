import React from 'react';

function ViewRemodels({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Remodel Title: {home.remodelTitle}</div>
            <div>Room: {home.remodelRoom}</div>
            <div>Start Date: {home.remodelStartDate}</div>
            <div>End Date: {home.remodelEndDate}</div>
            <div>Total Cost: {home.remodelCost}</div>
            <div>Remodel Details: {home.remodelDetails}</div>
        </div>
    );
}

export default ViewRemodels;