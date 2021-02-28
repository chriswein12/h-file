import React from 'react';

function ViewRemodels({ home }) {
    if (!home) {
        return <h4>Loading...</h4>
    }

    if (!home.homeRemodels.length) {
        return <h4>No remodels have been added</h4>
    }

    return (
        <div>
            {home.homeRemodels && home.homeRemodels.map(remodel => (
                <div key={remodel._id}>
                    <div>Remodel Title: {remodel.remodelTitle}</div>
                    <div>Room: {remodel.remodelRoom}</div>
                    <div>Start Date: {remodel.remodelStartDate}</div>
                    <div>End Date: {remodel.remodelEndDate}</div>
                    <div>Total Cost: {remodel.remodelCost}</div>
                    <div>Remodel Details: {remodel.remodelDetails}</div>
                </div>
            ))}
        </div>
    );
}

export default ViewRemodels;