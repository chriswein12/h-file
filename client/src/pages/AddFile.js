import React from 'react';
import { Link } from 'react-router-dom';

import AboutHome from '../components/AboutHome';
import Products from '../components/Products';
import Remodels from '../components/Remodels';
import Services from '../components/Services';

import './css/AddFile.css';

function AddFile() {
    return (
        <div className="add-file-container">
            <ul>
                <li className="add-file" id="add-product">
                    <Link to={Products}>Add Product</Link>
                </li>
                <li className="add-file" id="add-service">
                    <Link to={Services}>Add Service</Link>
                </li>
                <li className="add-file" id="add-remodel">
                    <Link to={Remodels}>Add Remodel</Link>
                </li>
                <li className="add-file" id="add-house">
                    <Link to={AboutHome}>Add New Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default AddFile;