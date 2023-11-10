import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Images/breakfast.webp'
import img2 from '../Images/fries.jpg'
import img3 from '../Images/pizza.jpg'
import img4 from '../Images/biryani.jpg'
import img5 from '../Images/jucies.jpg'
import img6 from '../Images/coffe.jpg'
import img7 from '../Images/burger.jpg'
import img8 from '../Images/cakes.jpg'





const categrioes = () => {
  return (
    
       <div >
      <div className='p1'>
      <h2>Logo</h2>
     <Link to='/Home'> <li>Home</li> </Link>
      <li>Categeries</li>
      <Link to='/Contact'><li>Contact us</li></Link>
     <Link to='/Navbar'> <button className='p2'>Login</button></Link>
      </div>
      <br/>

    <div>
    <h1 className='c1'>Categrioes</h1>
    <br/>
        <section className='c5'>
            
            <div className='c2'>
            <img src={img1} alt='' className='c3'/>
            <p className='c1'>Break Fast</p>
            </div>
            <div className='c2'>
            <img src={img2} alt='' className='c3'/>
            <p className='c1'>Fries</p>
            </div>
            <div className='c2'>
            <img src={img3} alt='' className='c3'/>
            <p className='c1'>Pizza</p>
            </div>
            <div className='c2'>
            <img src={img4} alt='' className='c3'/>
            <p className='c1'>Biryani's</p>
            </div>
        </section>
    </div>
    <br/>
    <br/>
    <div>
    <section className='c5'>
            
            <div className='c2'>
            <img src={img5} alt='' className='c3'/>
            <p className='c1'>Juices</p>
            </div>
            <div className='c2'>
            <img src={img6} alt='' className='c3'/>
            <p className='c1'>Coffee</p>
            </div>
            <div className='c2'>
            <img src={img7} alt='' className='c3'/>
            <p className='c1'>Burger</p>
            </div>
            <div className='c2'>
            <img src={img8} alt='' className='c3'/>
            <p className='c1'>Cakes</p>
            </div>
        </section>
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

export default categrioes
