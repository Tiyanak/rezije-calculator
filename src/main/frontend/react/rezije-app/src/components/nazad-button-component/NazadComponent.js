import React, { Component } from 'react';
import './NazadComponent.css';
import { Link } from 'react-router-dom';

class NazadComponent extends Component {

    render() {
        return (
            <div className="PlinComponent">
                <Link to="/"><button className="Nazad-btn btn btn-default nazad-btn pull-left">
                    <span className="Nazad-icon glyphicon glyphicon-arrow-left pull-left"></span> Nazad
                </button></Link>
            </div>
        );
    }
}

export default NazadComponent;
