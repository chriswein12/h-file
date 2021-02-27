import React from 'react';
import { Link } from 'react-router-dom';

import AddHome from '../components/AddHome';
import AddProducts from '../components/AddProducts';
import AddRemodels from '../components/AddRemodels';
import AddServices from '../components/AddServices';

import './css/AddFile.css';

function AddFile() {
    return (
        <div className="add-file-container">
            <ul>
                <li className="add-file" id="add-product">
                    <Link to={AddProducts}>Add Product</Link>
                </li>
                <li className="add-file" id="add-service">
                    <Link to={AddServices}>Add Service</Link>
                </li>
                <li className="add-file" id="add-remodel">
                    <Link to={AddRemodels}>Add Remodel</Link>
                </li>
                <li className="add-file" id="add-house">
                    <Link to={AddHome}>Add New Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default AddFile;