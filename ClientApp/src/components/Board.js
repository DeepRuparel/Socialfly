import React, { Component } from 'react';
import { useState } from 'react';
import Profile from './Profile'
import {Leaderboard } from './database'

export default function  Board () {
    //static displayName = Board.name
    const [period, setPeriod] = useState(0);
    //e is the event that is passed on clicking the buttons.
    const handleClick = (e) => {
        //console.log(e.target)
        setPeriod(e.target.dataset.id)
    }
    return (
        <div className="board">
            <h1 className='leaderboard'></h1>
            <div className='duration'>
                <button data-id='7' onClick={handleClick}>7 Days</button>
                <button data-id='30' onClick={handleClick}>30 Days</button>
                <button data-id='0' onClick={handleClick}>All Time</button>

            </div>
            <Profile Leaderboard={between(Leaderboard,period)} />
        </div>
    );
    
}
//data is the Leaderboard and between is the time duration we want to sort out on.
function between(data, between) {
    //gettting the current dates
    const today = new Date();
    // intializong prev with today's date.
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));
    // the idea is to filter out the score based on date so we get todays date and subtract the between
    //from it because it allows us to get data of the past week for example if between is set to 7.
    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) {
            return val;
        }
        return previous <= userDate && today >= userDate;
    })
    //sort with ascending order
    return filter.sort((a, b) => {
        if (a.score === b.score) {
            return b.score - a.score;
        }
        else {
            return b.score - a.score;
        }
    })
}