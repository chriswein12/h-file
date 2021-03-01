//may need to bring useQuery on GET_ME for username
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_HOME } from '../utils/queries'
import { REMOVE_HOME } from '../utils/mutations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Auth from '../utils/auth';
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

function Home() {

    const { id: homeId } = useParams();

    const [hidden, setHidden] = useState(true);

    const { loading, data } = useQuery(GET_HOME, {
        variables: { id: homeId }
    });

    const [removeHome, { error }] = useMutation(REMOVE_HOME);

    const home = data?.home || {};

    const handleRemoveHome = async (homeId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeHome({
                variables: { homeId }
            });

            console.log(data);
            window.location.assign('/profile');
        }
        catch (err) {
            console.error(err);
        }
    }

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

            <Container className="home-container">
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
                        {hidden === true ?
                            (
                                <div>
                                    <div className="home-title">
                                        <span className="h1 home-name">{home.homeName}</span>
                                        <span>
                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={() => setHidden(false)}
                                            >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        </span>
                                    </div>
                                   
                                </div>
                            ) :
                            (
                                <div>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="homeName"
                                                placeholder="Enter updated home name"
                                                //onChange={handleInputChange}
                                                //value={newHomeFormData.homeName}
                                                required
                                            />
                                        </Form.Group>
                                        <div>
                                            <Button
                                                variant="success"
                                                type="button"
                                            >
                                                Update Title
                                            </Button>
                                        </div>
                                    </Form>
                                    <div>
                                        <div>
                                            <Button
                                                variant="danger"
                                                type="button"
                                                onClick={handleRemoveHome}
                                            >
                                                Delete Home
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                variant="primary"
                                                type="button"
                                                onClick={() => setHidden(true)}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                    {/* <Col>
                    <div>
                            <img src={image} />
                        </div>
                    </Col> */}
                    </Row>
                    <Row>
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