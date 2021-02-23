import React from 'react';
import { useQuery } from '@apollo/react-hooks';

//anticipating query, will have to update
//import { GET_USER_HOUSE } from '../utils/mutations';

//require authorization?
//import Auth from '../utils/auth';

function ViewAboutHouse() {
    //use useQuery hook to make query request
    const {loading, data} = useQuery(GET_USER_HOUSE);
    
    //add option to delete house?
    //useMutation REMOVE_HOUSE

    //viewAboutHouse name def in queries?
    const houseData = data.viewAboutHouse
    console.log(houseData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Address: {houseData.address}</div>
            <div>Year Bought: {houseData.yearBought}</div>
            <div>Year Built: {houseData.yearBuilt}</div>
            <div>Square Footage: {houseData.squareFootage} sq ft</div>
            <div>Value: {houseData.value}</div>
            <div>Lot Size: {houseData.lotSize} acres</div>
        </div>
    )
}

export default ViewAboutHouse;