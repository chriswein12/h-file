import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import HomeNav from '../components/HomeNav';
import ViewIndex from '../components/ViewIndex';

import AddFile from './AddFile';

import './css/Home.css'

function Home() {
    //use useQuery hook to make query request
    const {loading, data} = useQuery(GET_ME);

    //me name def in queries
    const userData = data.me
    console.log(userData);

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    //const to set names for views inside div to be rendered
    const [views] = useState([
        { name: 'About Home' },
        { name: 'Products' },
        { name: 'Remodels' },
        { name: 'Services' }
    ])

    //const to set view about home as default rendered page
    const [currentView, setCurrentView] = useState(views[0]);

    return (
        <div className="home-container">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <button className="link-add-file-btn">
                            <Link to={AddFile}>
                                <h2>Add a New File</h2>
                            </Link>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <h1>{userData.username}'s Home</h1>
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