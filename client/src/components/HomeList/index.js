import React from 'react';
import { Link } from 'react-router-dom';

//check server connection for savedHomes
function HomeList({ username, savedHomes }) {
    if (!savedHomes.length) {
        return <h3>Homes that you have added will appear here</h3>;
    }

    return (

        <div className="profileName">
            <div className="row p-0 mb-4 ">
                <div className="col-2 d-flex"></div>
                <h1 className="col-8 d-flex">{username}'s Homes</h1>
                <div className="col-2 d-flex"></div>
            </div>
            <div className="container">
                <div className="row">
                    {savedHomes && savedHomes.map(home => (

                        <div key={home._id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="card shadow-sm border-0 rounded mb-4">
                                <Link
                                    to={`/profile/${home._id}`} className="card-body p-0 m-0"
                                >
                                    <div className="p-4">
                                        <h5 className="mb-2 d-flex">{home.homeName}</h5>
                                        <p className="small text-muted mt-1 address">{home.street}</p>
                                        <p className="small text-muted mt-1 cityState">{home.city}, {home.state} {home.zip}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default HomeList;


