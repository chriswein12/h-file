import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../../utils/queries';

//require authorization?
//import Auth from '../utils/auth';

function ViewServices() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_HOME);

    //add option to delete service(s)?
    //useMutation REMOVE_SERVICE

    //ViewServices name def in queries/resolvers?
    const serviceData = data.home
    console.log(serviceData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Title: {serviceData.serviceTitle}</div>
            <div>Cost: {serviceData.serviceCost}</div>
            <div>Frequency: {serviceData.serviceFrequency}</div>
            <div>Date of Service: {serviceData.serviceDate}</div>
            <div>Description: {serviceData.serviceDescription}</div>
            <div>Service Provider: {serviceData.businessName}</div>
            <div>Contact Name: {serviceData.contactName}</div>
            <div>Phone: {serviceData.phone}</div>
            <div>Email: {serviceData.email}</div>
            <div>Website: {serviceData.website}</div>
        </div>
    );
}

export default ViewServices;