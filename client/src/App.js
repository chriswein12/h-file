//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import HouseItContainer from './components/HouseItContainer';

//import components
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

//import pages
import SplashPage from './pages/Splash';
import Profile from './pages/Profile';


//import css
import './App.css';


const client = new ApolloClient({
    request: (operation) => {
        const token = localStorage.getItem('id_token')
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    uri: '/graphql'
})


function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    {/* <Route exact path="/whatever">
                        <WhateverPage />
                    </Route> */}
                    <Route exact path="/">
                        <SplashPage />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
