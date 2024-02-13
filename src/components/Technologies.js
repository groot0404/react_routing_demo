import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div className='text-center'>
      <ul className="nav justify-content-center">
        <li className='nav-item'>
          <Link className='nav-link' to='react'>React</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='angular'>Angular</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='vue'>Vue</Link>
        </li>
      </ul>
      {/* placeholder */}
      <Outlet className="mx-auto"/>
    </div>
  )
}

export default Technologies