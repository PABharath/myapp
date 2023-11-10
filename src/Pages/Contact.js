import React from 'react'
import img9 from '../Images/contact.jpg'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
       <div className='p1'>
      <h2>Logo</h2>
      <Link to='/Home'> <li>Home</li></Link>
     <Link to='/Categrioes'> <li>Categeries</li></Link>
      
      <li>Contact us</li>
      <Link to='/Navbar'><button className='p2'>Login</button></Link>
      </div>
      <br/>

        <div className='f3'>
        <div className='f2'>
         <h1>Contact us</h1>
         <fieldset>
            <legend>Contact us</legend>
            
           <form className='f1'>
           <label for="name">Name:</label> 
            <input type="text" id="name" name="name" required/> 
            <label for="email">Email:</label> 
            <input type="email" id="email" name="email" required/> 
            <label for="message">Message:</label> 
            <textarea id="message" name="message" required></textarea> 
            <input className='f5' type="submit" value="Submit"/>
           </form>
            
         </fieldset>
         <br/>
         
        </div>
        <div >
            < img  className='f4' src={img9} alt=''/>
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

export default Contact
