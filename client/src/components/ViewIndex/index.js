import React from 'react';
import ViewAboutHome from '../ViewAboutHome';
import ViewProducts from '../ViewProducts';
import ViewRemodels from '../ViewRemodels';
import ViewServices from '../ViewServices';
import ViewIndexContent from '../ViewIndexContent'

//pass in currentView from Home.js
function ViewIndex(props) {
    const {
        currentView,
        home
    } = props;

    //switch statement to provide clicked view to render
    function renderView() {
        switch (currentView) {
            case 'About Home':
                return <ViewAboutHome home={home} />;
            case 'Products':
                return <ViewProducts home={home} />;
            case 'Remodels':
                return <ViewRemodels home={home} />;
            case 'Services':
                return <ViewServices home={home} />;
            default:
                return <ViewAboutHome home={home} />;
        }
    }

    return (
        <div>
            <ViewIndexContent>{renderView()}</ViewIndexContent>
        </div>
    );
}

export default ViewIndex;