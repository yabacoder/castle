import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./assets/css/bootstrap.min.css"
import "./assets/css/w3.css"
import "./assets/css/style.css"
import Login from "./components/auth/login";
import { Routes } from './routes';
import {Token} from "./config";
import ErrorPage from "./components/error";
import Register from "./components/auth/register";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/register"} exact strict component={Register}/>
                    {Routes.map((route, index) => (
                        <Route path={route.path} key={index} exact strict component={Token?route.component:Login}/>
                    ))}
                    <Route path={"*"} exact strict component={Token?ErrorPage:Login}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
