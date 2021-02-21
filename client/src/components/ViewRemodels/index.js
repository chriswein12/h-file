import React from 'react';
import { useQuery } from '@apollo/react-hooks';

//anticipating query, will have to update
//import { GET_REMODELS } from '../utils/mutations';

//require authorization?
//import Auth from '../utils/auth';

function ViewRemodels() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_REMODELS);

    //add option to delete remodel(s)?
    //useMutation REMOVE_REMODEL

    //ViewRemodels name def in queries?
    const remodelData = data.viewRemodels
    console.log(remodelData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Remodel Title: {remodelData.title}</div>
            <div>Room: {remodelData.room}</div>
            <div>Start Date: {remodelData.startDate}</div>
            <div>End Date: {remodelData.endDate}</div>
            <div>Company: {remodelData.company}</div>
            <div>Company Phone: {remodelData.companyPhone}</div>
            <div>Company Email: {remodelData.companyEmail}</div>
            <div>Company Website: {remodelData.companyWebsite}</div>
            <div>Products Used: {remodelData.products}</div>
            <div>Total Cost: {remodelData.totalCost}</div>
        </div>
    )
}