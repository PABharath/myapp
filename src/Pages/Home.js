import React from 'react'


import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <div className='p1'>
      <h2>Logo</h2>
      <li>Home</li>
     <Link to='/Categrioes'> <li>Categeries</li></Link>
      
      <Link to='/Contact'><li>Contact us</li></Link>
      <Link to='/Navbar'><button className='p2'>Login</button></Link>
      </div>
      <br/>
    
   

  <div className='p3'>
    <i className='p4'>Our Products</i>
    <p className='p5'>Vitae turpis massa sed elementum tempus egestas sed sed.<br/> Blandit massa enim nec dui nunc mattis enim.</p>
    <br/>
    
    <Link to='/Categrioes'><button className='p7'>Check Out</button></Link>
    
    </div>
   <br/>
   <br/>
   <br/>
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

export default Home
