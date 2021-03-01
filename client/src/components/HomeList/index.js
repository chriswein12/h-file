import React from 'react';
import { Link } from 'react-router-dom';

//check server connection for savedHomes
function HomeList({ username, savedHomes }) {
    if (!savedHomes.length) {
        return <h3>Homes that you have added will appear here</h3>;
    }

    return (
        <div>
            <h1>{username}'s Homes</h1>
            {savedHomes && savedHomes.map(home => (
                <div key={home._id}>
                    <Link
                        to={`/profile/${home._id}`}
                    >
                        {/* have Link contain card? */}
                        {/* build out card here */}
                        {/* savedHomes.image (when applicable) */}
                        <div className="row pb-5 mb-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <div className="card shadow-sm border-0 rounded">
                                    <div className="card-body p-0">
                                        <div className="p-4">
                                        <h5 className="mb-2">{home.homeName}</h5>
                                        <p className="small text-muted mt-1 address">{home.street}</p>
                                        <p className="small text-muted mt-1 cityState">{home.city}, {home.state} {home.zip}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div >
    );
}

export default HomeList;


