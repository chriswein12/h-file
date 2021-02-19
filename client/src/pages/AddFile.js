//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//components
import AboutHouse from '../components/AboutHouse';
import Products from '../components/Products';
import Remodels from '../components/Remodels';
import Services from '../components/Services';

//css
import './css/AddFile.css';

function AddFile() {
    return (
        <div className="add-file-container">
            <button className="add-file-button" id="add-product-btn">
                <Link to={Products}>Product</Link>
            </button>
            <button className="add-file-button" id="add-service-btn">
                <Link to={Services}>Service</Link>
            </button>
            <button className="add-file-button" id="add-remodel-btn">
                <Link to={Remodels}>Remodel</Link>
            </button>
        </div>
    );
}

export default AddFile;