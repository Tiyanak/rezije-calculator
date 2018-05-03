import React, { Component } from 'react';
import './App.css';
import { Button, HelpBlock } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import VodaComponent from "./components/voda-component/VodaComponent"
import PlinComponent from "./components/plin-component/PlinComponent"
import RezijeButtonsComponent from "./components/rezije-buttons-component/RezijeButtonsComponent"
import NazadComponent from "./components/nazad-button-component/NazadComponent"

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div className="App">

                        <header className="App-header">
                            <div className="d-inline-block">
                                {["/voda", "/plin"].map(path => <Route path={path} component={NazadComponent}/>)}
                                <h3 className="App-title">Izračun kućnih režija</h3>
                            </div>
                        </header>

                        <br/>

                        <Route exact path="/" component={RezijeButtonsComponent} />
                        <Route exact path="/voda" component={VodaComponent} />
                        <Route exact path="/plin" component={PlinComponent} />

                    </div>
                </MuiThemeProvider>

            </Router>
        );
    }
}

export default App;
