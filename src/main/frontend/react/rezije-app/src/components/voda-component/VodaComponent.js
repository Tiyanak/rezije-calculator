import React, { Component } from 'react';
import './VodaComponent.css';

class VodaComponent extends Component {

    render() {
        return (
            <div className="VodaComponent">

                <label>Potrošnja vode: </label><input className="Potrosnjam2" type="number" step="0.01"></input>

            </div>
        );
    }
}

export default VodaComponent;
