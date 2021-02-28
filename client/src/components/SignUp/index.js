import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';
import { Redirect, useParams, Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import '../../pages/css/splashStyle.css';


const Signup = (props) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [addNewUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addNewUser({
                variables: { ...userInfo }
            });

            Auth.login(data.addUser.token);
        }
        catch (err) {
            console.log(err);
        }

        setUserInfo({
            username: '',
            email: '',
            password: '',

        });
    }

    return (
        <form className="container" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-lg-6"></div>

                <div className="col-lg-6 splash-container bg-white p-3 splashF">


                    <h1 className="signupHeader">Sign Up</h1>
                    <div className="form-floating mb-3">
                        <input onChange={handleInputChange} name="username" type="username" className="form-control" id="floatingUsername" placeholder="username" />
                        <label htmlFor="floatingUsername">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleInputChange} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleInputChange} name="password" type="password" className="form-control" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <br />
                    <div className="form-floating">
                        <input onChange={handleInputChange} name="confirmPassword" type="password" className="form-control" placeholder="Password" />
                        <label htmlFor="floatingPassword2">Confirm Password</label>
                    </div>

                    <div className="row">
                        <div className="col-4 submitSignupBtn">
                            <button type="submit" className="btn btn-danger">
                                Submit
                    </button>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-4 signupButtons">
                            <button type="button" onClick={props.login} className="btn btn-primary">Already have an account?</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signup;