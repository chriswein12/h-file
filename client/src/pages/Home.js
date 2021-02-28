//may need to bring useQuery on GET_ME for username
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../utils/queries'
import HeaderLI from '../components/HeaderLoggedIn'
import HomeNav from '../components/HomeNav';
import ViewIndex from '../components/ViewIndex';
import AddFile from './AddFile';
import AddFileNav from '../components/AddFileNav';

import './css/Home.css'

function Home() {
    const { id: homeId } = useParams();

    const { loading, data } = useQuery(GET_HOME, {
        variables: { id: homeId }
    });

    const [hidden, setHidden] = useState(true);

    const home = data?.home || {};
    console.log(home);

    //const to set names for views inside div to be rendered
    const [views] = useState([
        { name: 'About Home' },
        { name: 'Products' },
        { name: 'Remodels' },
        { name: 'Services' }
    ]);

    const [fileTypes] = useState([
        {name: 'Add a Product'},
        {name: 'Add a Remodel'},
        {name: 'Add a Service'}
    ]);

    //const to set view about home as default rendered page
    const [currentView, setCurrentView] = useState(views[0]);
    const [currentType, setCurrentType] = useState(fileTypes[0]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-container">
            <HeaderLI />
            {hidden === false ?
                (
                    <div>
                        <AddFileNav
                            fileTypes={fileTypes}
                            currentType={currentType}
                            setCurrentType={setCurrentType}
                        />
                        <AddFile 
                            currentType={currentType}
                        />
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setHidden(true)}
                        >
                            Return to Home
                        </button>
                    </div>
                ) :
                (
                    <Container>
                        <Row>
                            <Col>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    id="addNewFile"
                                    onClick={() => setHidden(false)}
                                >
                                    Add New File
                                </button>
                            </Col >
                        </Row >
                        <Row>
                            <Col>
                                <div>
                                    <h1>{home.homeName}</h1>
                                </div>
                                <div>
                                    {/* image? will need another query */}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    {/* pass down props to component */}
                                    <HomeNav
                                        views={views}
                                        currentView={currentView}
                                        setCurrentView={setCurrentView}
                                    ></HomeNav>
                                </div>
                                <div>
                                    {/* pass down props to component */}
                                    <ViewIndex
                                        currentView={currentView}
                                        home={home}
                                    ></ViewIndex>
                                </div>
                            </Col>
                        </Row>
                    </Container >
                )
            }
        </div >
    );
}

export default Home;