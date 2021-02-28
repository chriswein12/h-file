//may need to bring useQuery on GET_ME for username
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_HOME } from '../utils/queries'
import HeaderLI from '../components/HeaderLoggedIn'
import HomeNav from '../components/HomeNav';
import ViewIndex from '../components/ViewIndex';
import image from '../Assets/blue_re-pict-house-base.png_128.png';
import '../App.css'

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

//mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VpZ2VhODQiLCJhIjoiY2tscGt1aHV2MTQwZTJzcXBkMWZma3J6YSJ9.F-QOC3X51-oHhPNrI7_IqQ';
//var map = new mapboxgl.Map({
//container: 'YOUR_CONTAINER_ELEMENT_ID',
//style: 'mapbox://styles/mapbox/streets-v11'
//});

import './css/Home.css'

function Home() {
    const { id: homeId } = useParams();

    const { loading, data } = useQuery(GET_HOME, {
        variables: { id: homeId }
    });

    const home = data?.home || {};
    console.log(home);

    //const street = 

    //const address = `1782%20Fordem%20Ave%2C%20Madison%2C%20WI%2053704`

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
                    </Col>
                    <Col>
                        <div>
                            <img src={image} />
                        </div>
                    </Col>
                </Row>
                <div className="nav-list-and-view">
                    <Row>
                        <Col>
                            <div>
                                {/* pass down props to component */}
                                <HomeNav
                                    views={views}
                                    currentView={currentView}
                                    setCurrentView={setCurrentView}
                                ></HomeNav>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="view-index-wrapper">
                                {/* pass down props to component */}
                                <ViewIndex
                                    currentView={currentView}
                                    home={home}
                                ></ViewIndex>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default Home;