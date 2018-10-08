import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import "./App.css"
 

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLink to="/Home" activeClassName="on-page" className="link">Accueil</NavLink>
                    <NavLink to="/History" activeClassName="on-page" className="link">Notre Histoire</NavLink>
                    <Switch>
                        <Route path="/Home" component={Home} />
                        <Route path="/History" component={History} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;