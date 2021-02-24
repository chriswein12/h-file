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

import './css/Home.css'

function Home({ username }) {
    const { id: homeId } = useParams();

    const { loading, data } = useQuery(GET_HOME, {
        variables: { id: homeId }
    });

    const home = data.home;

    //const to set names for views inside div to be rendered
    const [views] = useState([
        { name: 'About Home' },
        { name: 'Products' },
        { name: 'Remodels' },
        { name: 'Services' }
    ]);

    //const to set view about home as default rendered page
    const [currentView, setCurrentView] = useState(views[0]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-container">
            <HeaderLI />
            <Container>
                <Row>
                    <Col>
                        <button type="button" className="link-add-file-btn">
                            <Link to={AddFile}>
                                <h2>Add a New File</h2>
                            </Link>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <h1>{username}'s Home</h1>
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
                            ></ViewIndex>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;