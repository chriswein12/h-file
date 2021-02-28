import React from 'react';
import AddFile from '../../pages/AddFile';

function AddFileNav(props) {
    //destructuring props passed in from Home.js
    const {
        fileTypes = [],
        currentType,
        setCurrentType
    } = props;

    return (
        <div className="add-file-nav-list-wrapper">
            <ul className="add-file-nav-list">
                {/* map over fileType names */}
                {fileTypes.map(Type => (
                    <li
                        className="add-file-nav-list-items"
                        key={Type.name}
                    >
                        <h3
                            className={`${
                                currentType.name === Type.name && "fileTypes"
                            }`}
                            onClick={() => setCurrentType(Type)}
                        >
                            {Type.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddFileNav;