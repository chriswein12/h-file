import React from 'react';
import '../../App.css'

function ViewIndexContent(props) {
    return (
        <div>
            <div className="vic-wrapper">
                <div className="vic-views">
                    {/* use props to render selected views */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ViewIndexContent;