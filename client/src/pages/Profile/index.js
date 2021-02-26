//reference deep-thoughts Profile.js
import React from 'react';
import Header from '../../components/Header';
import HomeList from '../../components/HomeList';
import { GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';

//import Auth from '../../utils/auth';

import './profileStyle.css';

const Profile = () => {
    const { loading, data } = useQuery(GET_ME);
    const user = data.me;

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <Header />
            <div className="row">
                <div className='col-4'>
                    <button className="btn btn-primary" id="addNew">
                        Add a New File
                    </button>
                </div>
            </div>

            <div className="container py-5">
                <HomeList
                    username={user.username}
                    savedHomes={user.savedHomes}
                />
            </div>
        </div>
    )
}

export default Profile;