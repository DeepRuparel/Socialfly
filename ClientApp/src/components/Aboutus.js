import React from 'react';
import './style.css';
import logo from './imgs/jd.jpg'
import logo2 from './imgs/jd2.jpg'
import logo3 from './imgs/mr.jpg'

export default function Aboutus() {
    return (
       <>
       <div class="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          
        </div>
        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div class="row">
          <div class="column">
            <div class="card">
               <img src={logo} width='100%' alt='jd' />
              <div class="container">
                <h2>Jane Doe</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
                <img src={logo3} width='100%' alt='jd' />
              <div class="container">
                <h2>Mike Ross</h2>
                <p class="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={logo2} width='100%' alt='jd' />
              <div class="container">
                <h2>John Doe</h2>
                <p class="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        </>
    )

}