//reference deep-thoughts Profile.js
import React from 'react';
import HeaderLI from '../components/HeaderLoggedIn'
import HomeList from '../components/HomeList';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useParams, Link } from 'react-router-dom';

//import Auth from '../../utils/auth';
import './css/profileStyle.css';


const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(GET_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || {};

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <HeaderLI />
            <div className="row">
                <div className='col-4'>
                    <Link to='/AddHome'>
                        <button type="button" className="btn btn-primary" id="addNew">
                            Add New Home
                        </button>
                    </Link>
                </div>
            </div>

            <div className="container py-5">
                <div className="row pb-5 mb-4">
                    <HomeList
                        username={user.username}
                        savedHomes={user.savedHomes}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;