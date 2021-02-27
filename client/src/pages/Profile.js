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

    console.log(data);
    const user = data?.me || {};
    console.log(user);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <HeaderLI />
            <div className="row">
                <div className='col-4'>
                    <Link to='/AboutHome'>
                        <button type="button" className="btn btn-primary" id="addNew">
                            Add New Home
                        </button>
                    </Link>
                </div>
            </div>

            <div className="container py-5">
                <div className="row pb-5 mb-4">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0"><img src="../../Assets/splashPage02.jpg" alt="" className="w-100 card-img-top" />
                                <div className="p-4">
                                    <h5 className="mb-2">Home</h5>
                                    <p className="small text-muted mt-1 address">address</p>
                                    <p className="small text-muted mt-1 cityState">milwaukee wi</p>
                                    <p className="small text-muted mt-1 zip">55555</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeList
                    username={user.username}
                    savedHomes={user.savedHomes}
                />
            </div>
        </div>
    )
}

export default Profile;