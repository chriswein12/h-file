//may need to bring useQuery on GET_ME for username
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../utils/queries'
import HeaderLI from '../components/HeaderLoggedIn'
import HomeNav from '../components/HomeNav';
import ViewIndex from '../components/ViewIndex';

import './css/Home.css'

function Home() {
    const { id: homeId } = useParams();

    const { loading, data } = useQuery(GET_HOME, {
        variables: { id: homeId }
    });

    const home = data?.home || {};

    //const to set names for views inside div to be rendered
    const [views] = useState([
        { name: 'About Home' },
        { name: 'Products' },
        { name: 'Remodels' },
        { name: 'Services' }
    ]);

    const [key, setKey] = useState('About Home');


    //const to set view about home as default rendered page
    const [currentView, setCurrentView] = useState('About Home');
 

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-container">
            <HeaderLI />

            <Container>
                <Row>
                    <Col>
                        <Link to={`/AddFile/${homeId}`}>
                            <button type="button" className="btn btn-primary" id="addNewFile">
                                Add New File
                            </button>
                        </Link>
                    </Col>
                </Row>
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
                    <div className="home-info-container">
                    <Tabs
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={(k) => {
                            setKey(k);
                            setCurrentView(k);
                            }}
                        >
                            {/* map over view names */}
                            {views.map(view => (
                                <Tab
                                    eventKey={view.name}
                                    title={view.name}
                                >
                                    <div className="list-container">
                                        {/* pass down props to component */}
                                        <ViewIndex
                                            currentView={currentView}
                                            home={home}
                                        ></ViewIndex>
                                    </div>
                                </Tab>
                            ))}
                    </Tabs>  
                    </div>  
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Home;