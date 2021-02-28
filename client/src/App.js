//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//import components
import AddHome from './components/AddHome';

//import pages good habit to have matching names
import SplashPage from './pages/Splash.js';
import Profile from './pages/Profile.js';
import Home from './pages/Home';
import AddFile from './pages/AddFile';
import AddRemodels from './components/AddRemodels';
import AddProducts from './components/AddProducts';
import AddServices from './components/AddServices';

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
                    <Route exact path="/AddServices" component={AddServices} />
                    <Route exact path="/AddRemodels" component={AddRemodels} />
                    <Route exact path="/AddProducts" component={AddProducts} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/:id" component={Home} />
                    <Route exact path="/AddHome" component={AddHome} />
                    <Route exact path="/AddFile/:id" component={AddFile} />
                    <Route exact path="/" component={SplashPage} /> 
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
