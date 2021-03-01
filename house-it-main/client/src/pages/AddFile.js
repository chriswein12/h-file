import React, { useState } from 'react';
import AddProducts from '../components/AddProducts';
import AddRemodels from '../components/AddRemodels';
import AddServices from '../components/AddServices';
import AddFileContent from '../components/AddFileContent';
import FileType from '../components/FileType';
import AddFileNav from '../components/AddFileNav';
import { useParams } from 'react-router-dom';

//pass in currentView from Home.js
function AddFile() {

    const { id: homeId } = useParams();


    const [fileTypes] = useState([
        { name: 'Product' },
        { name: 'Remodel' },
        { name: 'Service' }
    ]);

    const [currentType, setCurrentType] = useState(fileTypes);

    //switch statement to provide clicked view to render
    function renderType() {

        switch (currentType.name) {
            case 'Product':
                return <AddProducts homeId={homeId} />;
            case 'Remodel':
                return <AddRemodels homeId={homeId} />;
            case 'Service':
                return <AddServices homeId={homeId} />;
            default: 
                return <FileType />;
        }
    }

    return (
       <>
       <div>
            <AddFileNav
                fileTypes={fileTypes}
                currentType={currentType}
                setCurrentType={setCurrentType}
            />
        </div>
        <div>
            {renderType()}
        </div>
        </>
    );
}

export default AddFile;