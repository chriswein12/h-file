import React, { useState } from 'react';
import '../../pages/css/splashStyle.css';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {

        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: "",
            password: ""
        })
    };


    return (
        <form className="container" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-lg-6"></div>

                <div className="col-lg-6 splash-container bg-white p-3 splashF">
                    <h1 className="loginHeader">Login</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={formState.email}
                            onChange={handleChange} />
                        <label htmlFor="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formState.password}
                            onChange={handleChange} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="row">
                        <div className="col-4 loginSubmitButton">
                            <button type="button" type='submit' className="btn btn-primary">login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 loginCreateButton">
                            <button type="button" onClick={props.signup} className="btn btn-danger">Create an account</button>
                        </div>
                    </div>
                </div>
            </div>




        </form>
    )
}

export default Login;