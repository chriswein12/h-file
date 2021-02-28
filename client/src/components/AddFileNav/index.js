import React from 'react';

function AddFileNav(props) {
    //destructuring props passed in from Home.js
    const {
        fileTypes = [],
        setCurrentType
    } = props;

    return (
        <div className="add-file-nav-list-wrapper">
            <div className="add-file-nav-list">
                {/* map over fileType names */}
                {fileTypes.map(type => (
                    <button
                        className="add-file-nav-list-items"
                        key={type.name}
                    >
                        <h3

                            onClick={() => setCurrentType(type)}
                        >
                            {type.name}
                        </h3>
                    </button>
                ))}
            </div>
        </div>
    )
}

//                            className={`${
//     currentType.name === type.name && "fileTypes"
// }`}

export default AddFileNav;