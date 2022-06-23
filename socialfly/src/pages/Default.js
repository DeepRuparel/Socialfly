import React from 'react'
import { useNavigate } from 'react-router-dom';


const Default = () => {
    const navigate = useNavigate();
    const navigateHome = () =>{
    navigate('/home')
    }
  return (
    <div className='default'>
        <h3>socialfly</h3>
        <p>
        An application designed to support your onboarding experience while providing you the resources to socialize and strengthen relationships with your peers.
        </p>
        <button type='button' onClick={navigateHome}>Home</button>
        <img src="" alt="default-image" />
    </div>
  )
}

export default Default