import React from 'react'

import { Link } from 'react-router-dom'


const Navbar = () => {
  // let data="Bharath is a good boy"
  // function apple(){
  //   alert(data)
  // }

  return (
    <div >
      <div className='p1'>
      <h2>Logo</h2>
     <Link to='/Home'> <li>Home</li> </Link>
      <Link to='/Categrioes'><li>Categeries</li></Link>
      
      <Link to='/Contact'><li>Contact us</li></Link>
      <button className='p2'>Login</button>
      
      </div>
      <br/>




      <div className='s2'>
      <div className='s1'>
        
        <h1>Login</h1>
        <br/>
        <label for='Name'>User Name:</label> <br/>
        <input placeholder='Username' name='Name' id='Name' type='text' required/>
        <br/>
        <br/>
        <label for='password'>Passsword:</label> <br/>
        <input placeholder='password' id='password' name='password' type='text' required/>
        <p className='s4'>Forgot password?</p>
        
        
        <button  className='s3'>Login</button>
        <br/>
        
      </div>
      </div>


      <div>
      <footer className='p6'>
        <p>
        ©Copy Rights 2006-2023 Wix.com, Inc, All rights Reserved.
        </p>
      </footer>
    </div>
    
     
    </div>


  )
}

export default Navbar
