import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

  const textStyle = {color:'red',fontSize:'3rem'}
  
  let navigate=useNavigate()
  let navi=useNavigate()

  let gotoAngular=()=>{
    //verify user credentails
    //if they are valid, navigate to inbox component
    navigate('/technologies/angular')
  }

  const gotoLogin=()=>{
    navi('/login/manasa     ')
  }

  return (
    <div className='text-center'>
      <h1 className='dispaly-1 text-info'>Home</h1>
      <p className='lead'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
       fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
       deserunt mollit anim id est laborum. 
      </p>
      <h2 style={textStyle}>Test element</h2>
      <button className='btn btn-success' onClick={gotoAngular}>navigate</button>
      <br/>
      <button className='btn btn-warning' onClick={gotoLogin}>URL parameter</button>
    </div>
  )
}

export default Home