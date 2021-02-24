//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import components


//import pages
import SplashPage from './pages/Splash/index.js';
import Profile from './pages/Profile/index.js';
import Home from './pages/Home';

//import css
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});


function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route excact path="/profile">
                        <Profile />
                    </Route>
                    {/* <Route exact path="/whatever">
                        <WhateverPage />
                    </Route> */}
                    <Route exact path="/">
                        <SplashPage />
                    </Route>
                    <Route exact path="/profile/:id" component={Home} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
