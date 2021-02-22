import React from 'react';

import './profileStyle.css';

const ProfilePage = () => {

    return (
        <div>
            <Header />
            <div class="row">
                <div class='col-4'>
                    <button type="button" class="btn btn-primary" id="addNew">
                        Add a New File
            </button>
                </div>
            </div>

            <div class="container py-5">
                <div class="row pb-5 mb-4">
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div class="card shadow-sm border-0 rounded">
                            <div class="card-body p-0"><img src="../../Assets/splashPage02.jpg" alt="" class="w-100 card-img-top" />
                                <div class="p-4">
                                    <h5 class="mb-0">Home</h5>
                                    <p class="small text-muted">address address, milwaukee wi 55555</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;