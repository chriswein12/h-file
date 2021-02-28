import React from 'react';
import { Link } from 'react-router-dom';

import AddProducts from '../components/AddProducts';
import AddRemodels from '../components/AddRemodels';
import AddServices from '../components/AddServices';

import './css/AddFile.css';

function AddFile() {
    return (
        <div className="add-file-container">
            <div>
                <div className="add-file" id="add-product">
                    <Link to={AddProducts}>Add Product</Link>
                </div>
                <div className="add-file" id="add-service">
                    <Link to={AddServices}>Add Service</Link>
                </div>
                <div className="add-file" id="add-remodel">
                    <Link to={AddRemodels}>Add Remodel</Link>
                </div>
            </div>
        </div>
    );
}

export default AddFile;