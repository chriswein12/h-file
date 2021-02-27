import React from 'react';
import '../../pages/css/splashStyle.css';

const Description = (props) => {
    return (
        <form className="container" >

            <div className="row ">

                <div className="col-lg-6"></div>

                <div className="col-lg-6 col-sm-12 bg-white p-3 splashF">
                    <h2>House-it going!</h2>
                    <p>At House-it we realize how stressful staying organized as a homeowner can be.
                    Files and documents for your home get thrown in that cluttered box in the basement,
                    never to be seen again...
            </p>
                    <br />
                    <p>
                        With House-it you can access all of your homeowner filed and information with the click of a button!
            </p>
                    <div className="row">
                        <div className="col-2 p-1 offset-3">
                            <button type="button" onClick={props.signup} className="btn btn-danger">Sign Up Now</button>
                        </div>
                        <div className="col-2 p-1 offset-3">
                            <button type="button" onClick={props.login} className="btn btn-primary">login</button>
                        </div>
                    </div>
                </div>


            </div>
        </form>

    )
}

export default Description;