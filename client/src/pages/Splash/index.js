import React, { useState } from 'react';
import Header from '../../components/Header';
import Description from '../../components/Description';
import Profile from '../Profile';
import Login from '../../components/Login';
import Signup from '../../components/SignUp';
import '../Splash/splashStyle.css';

const SplashPage = () => {

    const [currentForm, setCurrentForm] = useState();

    const renderForm = () => {
        switch (currentForm) {
            case 'Description':
                return <Description signup={signupView} />;
            case 'Login':
                return <Login signup={signupView}  login={loginView}/>;
            case 'Signup':
                return <Signup signup={signupView}  login={loginView}/>;
            case 'Proflie':
                return <Profile profile={profileView}/>;
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

    const profileView = () => {
        setCurrentForm('Profile')
    };

    return (
        <div>
            <Header/>
            {renderForm(currentForm)}

        </div>
        
    )
}

export default SplashPage;