import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './style.css';
import logo from './imgs/meeting.jpg'
export class Default extends Component {
    static displayName = Default.name;
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange=()=> {
        let path = '/home';
        this.props.history.push(path);
    }
    
    

    render() {
        return (
            <>
            <div id="container">
                <div style={{ float: 'left', height: '30%', width:'200px' }} id='top_div'>
                        <h3 style={{ fontSize: '120px' }}>Socialfly</h3>
                        
                    </div>


                    <div style={{ float: 'right', width: '60%' }}>
                        <img src={logo} width='900' height='550' borderRadius='30' />
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <div style={{}} id='bottom_div'>
                    <p style={{ width:'35%', fontSize:'20px'} }>
                        An application designed to support your onboarding experience while providing you the resources to socialize and strengthen relationships with your peers.
                        
                        <div style={{ padding: '10px' }} />
                        <button type='button' style={{ padding: '10px', borderRadius: '10px', width: '170px', backgroundColor: 'grey', color:'white' }} onClick={this.routeChange}>Home</button>
                    </p>
                </div>
                
                
                </div>
                
            </>
        );
    }
};
