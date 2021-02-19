//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import components
import Footer from './components/Footer';

//import pages

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
                    butts
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
