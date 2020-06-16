import React from 'react';
import '../css/Die.css';

class Die extends React.Component {
    render() {
        return (
        <i className={`Die fas fa-dice-${this.props.face}`}/> 
            )
        
    }
}

export default Die