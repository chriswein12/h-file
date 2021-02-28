import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../../utils/queries';

//require authorization?
//import Auth from '../utils/auth';

function ViewRemodels() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_HOME);

    //add option to delete remodel(s)?
    //useMutation REMOVE_REMODEL

    //ViewRemodels name def in queries/resolvers?
    const remodelData = data?.home || {};

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Remodel Title: {remodelData.remodelTitle}</div>
            <div>Room: {remodelData.remodelRoom}</div>
            <div>Start Date: {remodelData.remodelStartDate}</div>
            <div>End Date: {remodelData.remodelEndDate}</div>
            <div>Total Cost: {remodelData.remodelCost}</div>
            <div>Remodel Details: {remodelData.remodelDetails}</div>
            <div>Company: {remodelData.businessName}</div>
            <div>Contact Name: {remodelData.contactName}</div>
            <div>Phone: {remodelData.phone}</div>
            <div>Email: {remodelData.email}</div>
            <div>Website: {remodelData.website}</div>
        </div>
    );
}

export default ViewRemodels;