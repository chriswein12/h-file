//reference deep-thoughts Profile.js
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import HeaderLI from '../components/HeaderLoggedIn'
import HomeList from '../components/HomeList';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import { useParams, Link } from 'react-router-dom';


const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(GET_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || {};

    //message if data hasn't yet arrived
    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <HeaderLI
                username={user.username}
            />
            <br />
            <Container className="home-container home-info-container">
                <Row className="bottom-border">
                    <Col >
                        <Link to='/AddHome' className="d-grid gap-2 col-6 mx-auto">
                            <button type="button" className="btn-lg btn-primary add-home-btn" >
                               Add New Home
                            </button>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <HomeList
                        username={user.username}
                        savedHomes={user.savedHomes}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Profile;