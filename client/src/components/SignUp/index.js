import React from 'react';
import '../../pages/Splash/splashStyle.css';

const Signup = (props) => {
    return (
        <form id="signup-form">
        <h1 className="signupHeader">Sign Up</h1>
        <div className="form-floating mb-3">
            <input type="username" className="form-control" id="floatingUsername" placeholder="username"/>
            <label for="floatingUsername">Username</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email Address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control"  placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <br/>
        <div className="form-floating">
            <input type="password" className="form-control"  placeholder="Password"/>
            <label for="floatingPassword2">Confirm Password</label>
        </div>
        <div className="row">
            <div className=" col-4 submitSignupBtn">
                <button className="btn btn-danger">Submit</button>
            </div>
        </div>
        <div className="row signupButtons">
                <div className="col-4">
                    <button onClick={props.login} className="btn btn-primary">Already have an account?</button>
                </div>
            </div>
    </form>
    )
}

export default Signup;