import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (

        <header className="header">
            <a className="logo">House-It</a>
            <div className="header-right">
                <Link to="/profile">
                    <button className="btn btn-primary">Profile</button>
                </Link>
                
            </div>
        </header>

    )
}

export default Header;

