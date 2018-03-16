import React, { Component } from 'react';
import './App.css';
import { Button, HelpBlock } from 'react-bootstrap';
import VodaComponent from "./components/voda-component/VodaComponent"
import PlinComponent from "./components/plin-component/PlinComponent"

class App extends Component {

    constructor() {
        super();

        this.state = {
            vodaClicked: false,
            plinClicked: false
        };

        this.handleVodaClick = this.handleVodaClick.bind(this);
        this.handlePlinClick = this.handlePlinClick.bind(this);
        this.handleNazadClick = this.handleNazadClick.bind(this);

    }

    handleVodaClick() {
        this.setState({
            vodaClicked: true
        });
    }

    handlePlinClick() {
        this.setState({
            plinClicked: true
        });
    }

    handleNazadClick() {
        this.setState({
            plinClicked: false,
            vodaClicked: false
        })
    }

    render() {
        return (
          <div className="App">

              <header className="App-header">
                  <div className="d-inline-block">
                      {this.state.vodaClicked || this.state.plinClicked ?
                          <button className="Nazad-btn btn btn-default nazad-btn pull-left"
                                  onClick={this.handleNazadClick}>
                              <span className="Nazad-icon glyphicon glyphicon-arrow-left pull-left"></span> Nazad
                          </button>
                          : null
                      }
                      <h3 className="App-title">Izračun kućnih režija</h3>
                  </div>
              </header>

              <br/>

              {(this.state.vodaClicked == false && this.state.plinClicked == false) ?
                  <div className="Rezije-btn">
                      <button className="Voda-btn btn btn-primary voda-btn" onClick={this.handleVodaClick}>Voda</button>
                      <button className="Plin-btn btn btn-secundary plin-btn" onClick={this.handlePlinClick}>Plin</button>
                  </div>
                  : null
              }

              {this.state.vodaClicked ? <VodaComponent /> : null}
              {this.state.plinClicked ? <PlinComponent /> : null}

          </div>
        );
    }
}

export default App;
