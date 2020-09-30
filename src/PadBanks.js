import React, { Component } from 'react';
import NumPad from './NumPad';
import './PadBanks.css';

export default class PadBanks extends Component {
    
    
    render() {
        let padBanks ;
        const padArray = [{
            keyTrigger:'Q',
            keyCode: 81,
            id: 'heater1',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyTrigger:'W',
            keyCode: 87,
            id: 'heater2',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyTrigger:'E',
            keyCode: 69,
            id: 'heater3',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyTrigger:'A',
            keyCode: 65,
            id: 'heater4',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyTrigger:'S',
            keyCode: 83,
            id: 'clap',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyTrigger:'D',
            keyCode: 68,
            id: 'pad6',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyTrigger:'Z',
            keyCode: 90,
            id: 'pad7',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyTrigger:'X',
            keyCode: 88,
            id: 'pad8',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyTrigger:'C',
            keyCode: 67,
            id: 'pad9',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }                  
    ]
    
        padBanks =  padArray.map(i => {
            return (
               <NumPad  clipId={i.id}
                        keyTrigger={i.keyTrigger}
                        keyCode={i.keyCode}
                        src={i.src}
                        updateDisplay={this.props.updateDisplay}
               />
            )
        })
        return (
            <div id='padbanks'>
                {padBanks}
            </div>
        )
        } 
        
    }

