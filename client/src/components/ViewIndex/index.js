import React from 'react';
import ViewAboutHome from '../ViewAboutHome';
import ViewProducts from '../ViewProducts';
import ViewRemodels from '../ViewRemodels';
import ViewServices from '../ViewServices';
import ViewIndexContent from '../ViewIndexContent'

//pass in currentView from Home.js
function ViewIndex({ currentView }) {
    //switch statement to provide clicked view to render
    function renderView() {
        switch (currentView.name) {
            case 'About Home':
                return <ViewAboutHome />;
            case 'Products':
                return <ViewProducts />;
            case 'Remodels':
                return <ViewRemodels />;
            case 'Services':
                return <ViewServices />;
            default:
                return <ViewAboutHome />;
        }
    }

    return (
        <div>
            <ViewIndexContent>{renderView()}</ViewIndexContent>
        </div>
    );
}

export default ViewIndex;