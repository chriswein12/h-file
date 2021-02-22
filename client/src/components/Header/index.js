import React from 'react';

function Header(props) {

    return (

        <header class="header">
            <a href="#" class="logo">House-it...font change</a>
            <div class="header-right">
                {/* <a onClick={props.signup} className="active" href="#">Login</a> */}
                <button onClick={props.login} className="btn btn-primary" href="#">Login</button>
                {/* <a href="#">Sign Up</a> */}
                <a class="profileIcon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg></a>
            </div>
        </header>

    )
}

export default Header;