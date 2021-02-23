import React from 'react';
import '../../pages/Splash/splashStyle.css';

const Login = (props) => {
    return (
        <form id="login-form">
        <h1 className="loginHeader">Login</h1>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email Address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <div className="row">
            <div className="col-4 loginSubmitButton">
                    <button className="btn btn-primary">login</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 loginCreateButton">
                    <button onClick={props.signup} className="btn btn-danger">Create an account</button>
                </div>
            </div>
            
    </form>
    )
}

export default Login;