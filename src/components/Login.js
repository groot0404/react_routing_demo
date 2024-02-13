import React from 'react'
import { useParams } from "react-router-dom";

function Login() {

  const data = useParams()

  return (
    <div className='text-center'>
      <p className='display-1 text-info'>Login</p>
      <h2>{data.username}</h2>
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto mt-3'>
          <form>
            {/* Username */}
            <div className='mb-3'>
              <label htmlFor='username'>Username</label>
              <input type="text" name='username' id='username' className='form-control'/>
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input type="password" name='password' id='password' className='form-control' />
            </div>
            {/* submit button */}
            <button className='btn btn-success' type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login