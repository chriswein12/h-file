import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ViewAboutHouse from '../components/ViewAboutHouse';
import ViewProducts from '../components/ViewProducts';
import ViewRemodels from '../components/ViewRemodels';
import ViewServices from '../components/ViewServices';

import AddFile from './AddFile';

import './css/House.css'

function House() {
    //const to set names for pages inside div to be rendered
    const [pages] = useState([
        { name: 'view about house' },
        { name: 'view products' },
        { name: 'view remodels' },
        { name: 'view services' }
    ])

    //const to set view about house as default rendered page
    const [currentPage, setCurrentPage] = useState(pages[0]);

    //function with switch to provide clicked page to conditionally render
    function renderPage() {
        switch (pages.name) {
            case 'view about house':
                return <ViewAboutHouse />;
            case 'view products':
                return <ViewProducts />;
            case 'view remodels':
                return <ViewRemodels />;
            case 'view services':
                return <ViewServices />;
            default:
                return <ViewAboutHouse />;
        }
    }

    return (
        <div>
            <div>
                <button>
                    <Link to={AddFile}>Add a New File</Link>
                </button>
            </div>
            <div>
                <h1>
                    //user's name// Home
                </h1>
            </div>
            <div>
                {/* not sure about images yet, this div may get tossed */}
                <img src="" alt="" />
            </div>
            <div className="view-list-wrapper">
                <ul className="view-list">
                    {pages.map((Page) => (
                        <li
                            className="view-list-items"
                            key={Page.name}
                        >
                            <div
                                className={`${page.name === Page.name && "pages"
                                    }`}
                                onClick={() => 
                                    setCurrentPage(Page),
                                    renderPage()
                                }
                            >
                                {currentPage}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default House;