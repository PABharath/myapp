import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import './Contact.css';


// import Home from './Pages/Home'
// import Navbar from './Pages/Navbar'
// import Categrioes from './Pages/categrioes'
// import Contact from './Pages/Contact';
 import Searchdate from './Assign/Searchdate';
 import Searchbar from './Assign/Searchbar';
 import Searchrange from './Assign/Searchrange';
 import Searchrangedate from './Assign/Searchrangedate';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Searchdate/>}/>  
        <Route path='/Searchbar' element={<Searchbar/>}/>
        <Route path='/Searchrange' element={<Searchrange/>}/>
        <Route path='/Searchrangedate' element={<Searchrangedate/>}/>

        {/* <Route path='/Home' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/categrioes' element={<Categrioes/>}/>
        <Route path='/Contact' element={<Contact/>}/> */}
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
