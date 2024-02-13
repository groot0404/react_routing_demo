import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='text-center bg-light'>
      <ul className="nav justify-content-center">
        <li className='nav-item'>
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>Register</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>Login</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/technologies'>Technologies</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar