import React from 'react';
import '../../pages/Splash/splashStyle.css';

const Description = (props) => {
    return (
        <form id="splashPage-form">
            <div>
                <h1>House-it going?<p>font change</p></h1>
                <p>At House-it we realize how stressful staying organized as a homeowner can be.
                Files and documents for your home get thrown in that cluttered box in the basement,
                never to be seen again...
            </p>
                <br />
                <p>
                    With House-it you can access all of your homeowner filed and information with the click of a button!
            </p>
            </div>
            <div className="row">
                <div className="col-5 splashButtons">
                    <button onClick={props.signup} className="btn btn-danger">Sign Up Now</button>
                </div>
                <div className="col-5 splashButtons">
                    <button onClick={props.login} className="btn btn-primary">login</button>
                </div>
            </div>
        </form>
    )
}

export default Description;