import React, { Component } from 'react';
import Board from './Board'
import './style.css'

export class Leaderboard extends Component {
    static displayName = Leaderboard.name;

    render() {
        return (
            <div id='main'>
                
                    <Board /> 
                
            </div>
        );
    }
}