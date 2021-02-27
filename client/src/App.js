//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import components
import AboutHome from './components/AddHome';

//import pages good habit to have matching names
import SplashPage from './pages/Splash.js';
import Profile from './pages/Profile.js';
import Home from './pages/Home';

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
    uri: '/graphql',
})


function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/:id" component={Home} />
                    <Route exact path="/AboutHome" component={AboutHome} />
                    <Route exact path="/" component={SplashPage} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
