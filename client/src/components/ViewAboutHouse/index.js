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

    //ViewAboutHouse name def in queries?
    const houseData = data.viewAboutHouse
    console.log(houseData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div></div>
        </div>
    )
}

export default ViewAboutHouse;