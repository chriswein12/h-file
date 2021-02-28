import React from 'react';

function AddFileContent(props) {
    return (
        <div>
            <div className="afc-wrapper">
                {/* use props to render selected views */}
                {props.children}
            </div>
        </div>
    );
}

export default AddFileContent;