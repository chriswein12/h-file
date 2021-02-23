import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../../utils/queries';

//require authorization?
//import Auth from '../../utils/auth';

function ViewAboutHome() {
    //use useQuery hook to make query request
    const {loading, data} = useQuery(GET_HOME);
    
    //add option to delete home?
    //useMutation REMOVE_HOME

    //ViewAboutHome name def in queries/resolvers?
    const homeData = data.viewAboutHome
    console.log(homeData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Address: {homeData.address}</div>
            <div>Year Bought: {homeData.yearBought}</div>
            <div>Year Built: {homeData.yearBuilt}</div>
            <div>Square Footage: {homeData.squareFootage} sq ft</div>
            <div>Value: {homeData.value}</div>
            <div>Lot Size: {homeData.lotSize} acres</div>
        </div>
    );
}

export default ViewAboutHome;