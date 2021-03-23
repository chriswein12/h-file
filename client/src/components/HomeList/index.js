import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

//check server connection for savedHomes
function HomeList({ username, savedHomes }) {
    if (!savedHomes.length) {
        return <h3>Homes that you have added will appear here</h3>;
    }

    return (

        <div>
            <h1 className="col-8 d-flex ps-3">{username}'s Homes</h1>
            <div className="container">
                <div className="row">
                    {savedHomes && savedHomes.map(home => (

                        <div key={home._id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="card shadow-sm border-0 rounded mb-4">
                                <Link
                                    to={`/profile/${home._id}`} className="card-body home-card p-0 m-0"
                                >
                                    <div className="p-4">
                                        <div className="text-center">
                                            <FontAwesomeIcon icon={faHome} className="icon-home" />
                                        </div>
                                        <h5 className="mb-2 d-flex">{home.homeName}</h5>
                                        <p className="small text-muted mt-4">{home.street}</p>
                                        <p className="small text-muted">{home.city}, {home.state} {home.zip}</p>
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


