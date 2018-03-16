import React, { Component } from 'react';
import './PlinComponent.css';

class PlinComponent extends Component {

    render() {
        return (
            <div className="PlinComponent">

                <label>Potrošnja plina: </label><input className="Potrosnjam2" type="number" step="0.01"></input>

            </div>
        );
    }
}

export default PlinComponent;
