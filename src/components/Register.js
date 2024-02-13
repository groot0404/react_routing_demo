import React from 'react'

function Register() {
  return (
    <div className='text-center'>
      <p className='display-1 text-info'>Register</p>
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto mt-3'>
          <form>
            {/* Username */}
            <div className='mb-3'>
              <label htmlFor='username'>Username</label>
              <input type="text" name='username' id='username' className='form-control'/>
            </div>
            {/* email */}
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input type="email" name='email' id='email' className='form-control'/>
            </div>
            {/* Date of birth */}
            <div className='mb-3'>
              <label htmlFor='dob'>Date of birth</label>
              <input type="date" name='dob' id='dob' className='form-control'/>
            </div>
            {/* submit button */}
            <button className='btn btn-success' type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register