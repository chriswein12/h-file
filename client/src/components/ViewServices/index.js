import React from 'react';
import { useQuery } from '@apollo/react-hooks';

//anticipating query, will have to update
//import { GET_SERVICES } from '../utils/mutations';

//require authorization?
//import Auth from '../utils/auth';

function ViewServices() {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(GET_SERVICES);

    //add option to delete service(s)?
    //useMutation REMOVE_SERVICE

    //ViewServices name def in queries?
    const serviceData = data.viewServices
    console.log(serviceData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div>Title: {serviceData.title}</div>
            <div>Cost: {serviceData.cost}</div>
            <div>Frequency: {serviceData.frequency}</div>
            <div>Date of Service: {serviceData.date}</div>
            <div>Description: {serviceData.description}</div>
            <div>Service Provider: {serviceData.serviceProvider}</div>
            <div>Contact Name: {serviceData.companyContact}</div>
            <div>Phone: {serviceData.companyPhone}</div>
            <div>Email: {serviceData.companyEmail}</div>
            <div>Website: {serviceData.companyWebsite}</div>
            <div>Product(s): {serviceData.products}</div>
        </div>
    )
}