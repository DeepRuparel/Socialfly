import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
export class Socialfly extends Component {
    static displayName = Socialfly.name;

    render() {
        return (
            <div>
                <div style={{ float: 'left', width: '45%', height: '400px' }} >
                    <h5 style={{ fontSize: '80px' }}>Socialfly</h5>
                    <p style={{ fontSize: '30px', textAlign: 'justify' }}> Use your onboarding level, and your accumulated points, to
                        unlock and redeem more new ways to socialize, create strong
                        relationships with your colleagues, and interact on deeper
                        levels with others.
                    </p>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <p style={{ borderRadius: '25px', width: '400px', height: '90px', backgroundColor: 'darkseagreen', textAlign: 'center', padding: '10px' }}>
                        <div style={{ float: 'left' }}>
                            <FaIcons.FaHandshake size={40} />
                        </div>
                        FIND YOUR BUDDY<br />
                        Get to know your onboarding partner.
                    </p> 
                    <br>
                    </br>
                    <br></br>
                    <p style={{ borderRadius: '25px', width: '400px', height: '75px', backgroundColor: 'darkseagreen', textAlign: 'center', padding: '10px' }}>
                        WANT TO MENTOR LATER<br />
                        <div style={{ float: 'right' }}>
                            <AiIcons.AiFillLock size={35} />
                        </div>
                        Sign Up later.
                        

                    </p>
                </div>
                <div style={{ float: 'right', width: '55%', height: '300px', padding: '70px' }}>
                    <div style={{ width: '500px' }}>
                        <p style={{ fontSize: '60px'} }><BsIcons.BsGlobe2 size={50} />  Social Clubs</p>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <p style={{ fontSize: '20px', }}> <GiIcons.GiMagnifyingGlass size={30} />  Exploring your city <button style={{ backgroundColor: 'greenyellow', width: '130px', padding: '5px', borderRadius: '10px' }}> Join Now </button> </p>
                    <br></br>
                    <p style={{ fontSize: '20px', }}> <FcIcons.FcReading size={40} /> Reading/BOTM  <button style={{ backgroundColor: 'greenyellow', width: '130px', padding: '5px', borderRadius: '10px' }}> Join Now </button> </p>

                    </div>
                    <div style={{ width: '500px' }}>
                        <p style={{ fontSize: '60px' }}><GrIcons.GrGroup size={50} />  Fun Events </p>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <p style={{ fontSize: '20px', }}> <GiIcons.GiPartyFlags size={30} />  Ethnic Fridays  <button style={{ backgroundColor: 'greenyellow', width: '130px', padding: '5px', borderRadius: '10px' }}> Join Now </button> </p>
                        <br></br>
                        <p style={{ fontSize: '20px', }}> <GiIcons.GiCoffeeCup size={40} /> Coffee Chat <button style={{ backgroundColor: 'greenyellow', width: '130px', padding: '5px', borderRadius: '10px' }}> <AiIcons.AiFillLock /> </button> </p>

                    </div>
   
                </div>

            </div>
        );
    }
}