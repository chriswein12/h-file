import React from 'react';
import Header from '../../components/Header';
import './profileStyle.css';

const Profile = () => {

    return (
        <div>
            <Header />
            <div className="row">
                <div className='col-4'>
                    <button className="btn btn-primary" id="addNew">
                        Add a New File
            </button>
                </div>
            </div>

            <div className="container py-5">
                <div className="row pb-5 mb-4">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0"><img src="../../../Assets/splashPage02.jpg" alt="" class="w-100 card-img-top" />
                                <div className="p-4">
                                    <h5 className="mb-2">Home</h5>
                                    <p className="small text-muted mt-1 address">address</p>
                                    <p className="small text-muted mt-1 cityState">milwaukee wi</p>
                                    <p className="small text-muted mt-1 zip">55555</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0"><img src="../../../Assets/splashPage02.jpg" alt="" class="w-100 card-img-top" />
                                <div className="p-4">
                                    <h5 className="mb-2">Home</h5>
                                    <p className="small text-muted mt-1 address">address</p>
                                    <p className="small text-muted mt-1 cityState">madison wi</p>
                                    <p className="small text-muted mt-1 zip">77777</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;