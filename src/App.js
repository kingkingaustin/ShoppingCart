
import { BrowserRouter as Router ,Routes ,Route  } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer'





function App() {
  return (
    <div className='page-container'>
      <div className='contant wrap'>
      </div>
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router> 
    </div>
    <Footer/>
    </div>
  );  
}

export default App;
