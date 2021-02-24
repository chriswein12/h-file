import React from 'react';

function ViewIndexContent(props) {
    return (
        <div>
            <div className="vic-wrapper">
                {/* use props to render selected views */}
                {props.children}
            </div>
        </div>
    );
}

export default ViewIndexContent;