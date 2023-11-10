import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import './Contact.css';


import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Categrioes from './Pages/categrioes'
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/categrioes' element={<Categrioes/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
