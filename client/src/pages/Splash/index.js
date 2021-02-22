import React, { useState } from 'react';
import Header from '../../components/Header';
import Description from '../../components/Description';
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
            <Header></Header>
            {renderForm(currentForm)}
        </div>
        
    )
}

export default SplashPage;