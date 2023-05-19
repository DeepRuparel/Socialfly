import React, { Component } from 'react';
import Scheduler from './Scheduler';
import { useState } from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './style.css';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as FcIcons from 'react-icons/fc';
import team from './imgs/team.png';
import leader from './imgs/leaders.png';
import mentor from './imgs/mentors.png';
export class Home extends Component {
  static displayName = Home.name;
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange = () => {
        let path = '/home';
        this.props.history.push(path);
    }
    
  render () {
      return (
          <>
          <div className="quodrant">
                  <div className="qtop" >
                      
                      <div className="quodrant1">
                         
                             <div><Document /></div>
                              <div><Progress /></div>
                          
                  </div>
                  <div className="quodrant3">
                      <Widgets />
                  </div>
              </div>
              
           
              </div>
              <div className="quodrant2">
                  <Scheduler />
              </div>



          <div className="quodrant4">
                  <HomeCarousel />
          </div>
          </>
    );
  }
}
function handleFlightClick() {
    window.location.assign('https://www.google.com/flights/')
}
function handleSlackClick() {
    window.location.assign('https://slack.com/')
}
function handleHotelClick() {
    window.location.assign('https://www.hotels.com/')
}
function Widgets() {
    return (
        <div>
            <button type="button" style={{ width: '100%', margin: '10px', height: '70px', borderRadius: '20px', fontSize: '20px', backgroundColor: '#1c4657', color: 'white' }}
             onClick={() => window.location.assign('/progress')}> ----> All Pinned Tasks </button>
           
            
            <div className='widget2'>
                <button type='button'> Tech & HR Support </button>
                <button onClick={handleSlackClick} type='button' > Slack </button>
            </div>
            <div className = 'widget3'>
                <button onClick={handleFlightClick} type='button' ><MdIcons.MdFlight size={40} /> FLights</button>
                <button onClick={handleHotelClick} type='button'> <BiIcons.BiBed size={40} /> Hotels </button>
            </div>
            <div className = 'widget4'>
                <button type='button' > <GrIcons.GrCalendar size={30} />  Relocation Schedule </button>
            </div>
            
         </div>

     );
}
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
function HomeCarousel() {
    
    return (
        <div className='carousel'>
            <Carousel breakPoints={breakPoints}>
                <Item onClick={() => window.location.assign('/mentors')}>
                   

                    <div style={{ padding: '20px', }}> <img src={mentor} width='300' height='450' borderRadius='30' /> </div>
                </Item>
                <Item onClick={() => window.location.assign('/teammembers')}>
                    <div style={{ padding: '20px', }}> <img src={team} width='300' height='450' borderRadius='30' /> </div>
                    
                    
                </Item>
                <Item onClick={() => window.location.assign('/orgleaders')}>
                    <div style={{ padding: '20px', }}> <img src={leader} width='300' height='450' borderRadius='30' /> </div>
                </Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
                <Item>Nine</Item>
            </Carousel>

        </div>
        );
}

function Document() {
    return (
        <div style={{}} onClick={() => window.location.assign('/documents')}>
            Documents
        </div>
        )
}

function Progress() {
    return (
        <div style={{}} onClick={() => window.location.assign('/progress')}>
            Progress
        </div>
        )
}