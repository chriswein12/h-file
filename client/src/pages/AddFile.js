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
                This is the add file page
               <div className="add-file" id="add-product">
                    <Link to={AddProducts}>
                        <button type="button">Add Product</button>
                    </Link>
                </div>
                <div className="add-file" id="add-service">
                    <Link to={AddServices}>
                        <button type="button">Add Service</button>
                    </Link>
                </div>
                <div className="add-file" id="add-remodel">
                    <Link to={AddRemodels}>
                        <button type="button">Add Remodel</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddFile;