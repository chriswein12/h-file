import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (

        <header className="header">
            <Link to="/" className="logo">House-It</Link>
            <div className="header-right">
                <Link to="/profile">
                    <button className="btn btn-primary">Profile</button>
                </Link>
                
            </div>
        </header>

    )
}

export default Header;

