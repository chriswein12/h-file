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
            <button className="add-file-button" id="add-product-btn">
                <Link to={Products}>Add Product</Link>
            </button>
            <button className="add-file-button" id="add-service-btn">
                <Link to={Services}>Add Service</Link>
            </button>
            <button className="add-file-button" id="add-remodel-btn">
                <Link to={Remodels}>Add Remodel</Link>
            </button>
            <button className="add-file-button" id="add-house-btn">
                <Link to={AboutHome}>Add New Home</Link>
            </button>
        </div>
    );
}

export default AddFile;