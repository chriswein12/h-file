import React, { useState } from 'react';
import Profile from '../pages/Profile';
import Splash from '../pages/Splash';
import Header from '../components/Header';

const ProfilePage = () => {

    const [currentPage, setCurrentPage] = useState('Splash');

    const renderPage = () => {
        switch (currentPage) {            
            case 'Proflie':
                return <Profile profile={profileView}/>;
            default:
                return <Splash signup={signupView}  login={loginView} profile={profileView}/>;
        }
    };

    const signupView = () => {
        setCurrentPage('Signup')
    };

    const loginView = () => {
        setCurrentPage('Login')
    };

    const profileView = () => {
        setCurrentPage('Profile')
    };

    return (
        <div>
            {renderPage(currentPage)}
        </div>

    )

}

export default ProfilePage;