import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLI() {

    return (

        <header className="header">
            <a className="logo">House-it</a>
            <div className="header-right">
                <Link to="/profile" className="profileIcon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg></Link>
                <Link to="/">
                    <button className="btn btn-primary">Log Out</button>
                </Link>
            </div>
        </header>

    )
}

export default HeaderLI;
