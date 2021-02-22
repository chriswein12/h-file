import React from 'react';
import '../../pages/Splash/splashStyle.css';

const Login = (props) => {
    return (
        <form id="login-form">
        <h1 class="loginHeader">Login</h1>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email Address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <div className="row">
            <div className="col-4 loginSubmitButton">
                    <button className="btn btn-primary">login</button>
                </div>
            </div>
            <div class="row">
                <div className="col-4 loginCreateButton">
                    <button onClick={props.signup} className="btn btn-danger">Create an account</button>
                </div>
            </div>
            
    </form>
    )
}

export default Login;