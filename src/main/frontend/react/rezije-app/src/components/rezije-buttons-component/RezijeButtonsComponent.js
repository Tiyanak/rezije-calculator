import React, { Component } from 'react';
import './RezijeButtonsComponent.css';
import { Link } from 'react-router-dom';

class RezijeButtonsComponent extends Component {

    render() {
        return (
            <div className="Rezije-btn">
                <Link to="/voda"><button className="Voda-btn btn btn-primary voda-btn">Voda</button></Link>
                <Link to="/plin"><button className="Plin-btn btn btn-secundary plin-btn">Plin</button></Link>
            </div>
        );
    }
}

export default RezijeButtonsComponent;
