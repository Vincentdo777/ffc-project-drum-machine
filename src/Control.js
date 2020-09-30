import React, { Component } from 'react';
import './Control.css';

export default class Control extends Component {
    render() {
        return (
            <div id='control'>
               <p id="display">{this.props.display}</p> 
            </div>
        )
    }
}
