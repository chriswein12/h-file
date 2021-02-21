//import dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import components
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

//import pages
import Splash from './pages/Splash';


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
    }
})

function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Splash></Splash>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
