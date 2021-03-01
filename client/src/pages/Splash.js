import React, { useState } from 'react';
import Header from '../components/HeaderSplash';
import Description from '../components/Description';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import Auth from '../utils/auth';
import './css/splashStyle.css'

const SplashPage = () => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (token) {
        window.location.assign('/profile');

    }

    const [currentForm, setCurrentForm] = useState('Description');
    

    const renderForm = () => {
        switch (currentForm) {
            case 'Description':
                return <Description signup={signupView} login={loginView} />;
            case 'Login':
                return <Login signup={signupView}  login={loginView}/>;
            case 'Signup':
                return <Signup signup={signupView}  login={loginView}/>;
            default:
                return <Description signup={signupView}  login={loginView}/>;
        }
    };

    const signupView = () => {
        setCurrentForm('Signup')
    };

    const loginView = () => {
        setCurrentForm('Login')
    };


    return (
        <div>
            <Header />
            
            <br />
            <br />
            {renderForm(currentForm)}

            
        </div>
        
    )
}

export default SplashPage;