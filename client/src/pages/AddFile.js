import React from 'react';
import AddProducts from '../components/AddProducts';
import AddRemodels from '../components/AddRemodels';
import AddServices from '../components/AddServices';
import AddFileContent from '../components/AddFileContent';
import FileType from '../components/FileType';

//pass in currentView from Home.js
function AddFile({ currentType, homeId }) {

    //switch statement to provide clicked view to render
    function renderType() {
        switch (currentType.name) {
            case 'Add a Product':
                return <AddProducts homeId={homeId} />;
            case 'Add a Remodel':
                return <AddRemodels homeId={homeId} />;
            case 'Add a Service':
                return <AddServices homeId={homeId} />;
            default:
                return <FileType />;
        }
    }

    return (
        <div>
            <AddFileContent>{renderType()}</AddFileContent>
        </div>
    );
}

export default AddFile;