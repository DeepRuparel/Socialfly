import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const navigateDefault = () =>{
        navigate('/')
    }
  return (
    <div className='navbar-container'>
        <img src="./images/logo.jpeg" alt='logo' onClick={navigateDefault} />
        <p className='sitename'>
            Socialfly
            </p>
        <ul>
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/home">HOME</Link>
            </li>
            <li>
                <Link to="/yourAvatar">Your Avatar </Link>
            </li>
            <li>
                <Link to="/progress">Progress</Link>
            </li>
            <li>
                <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
                <Link to="/socialfly">Socialfly</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar

