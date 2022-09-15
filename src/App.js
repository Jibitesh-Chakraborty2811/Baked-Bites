import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Login from './Login'
import About from './About'
import Item from './Item'
import Logo from './logo.png'
import Admin  from './Admin';
import {auth,provider} from './firebase-config'
import {signInWithPopup} from "firebase/auth"
//import { MdShoppingCart } from "react-icons/md";

function App() {

  const signin = () => {
    signInWithPopup(auth,provider);
  }
  return (
    <div className="w-screen h-auto flex flex-col">
      <Router>
      <nav>
      <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-20 bg-blue-50">
        {/* Laptop */}
        <div className="hidden md:flex w-full h-full">
                <img src={Logo} className="w-12 object-cover" alt="logo"/>
            <div className="flex items-center gap-12 m-auto">
                <Link to="/" className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Home
                </Link>
                <Link to="/about" className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    About Us
                </Link>
                
                

                <Link to="/item" className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Items
                </Link>

                
            </div>
            <button className="text-xl bg-white w-20 h-10 rounded-xl hover:bg-yellow-100" onClick={signin}>
                Login</button>
            
           
        </div>
        {/* for mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
        
            <img src={Logo} className="w-12 object-cover" alt="logo"/>
            <div className="flex items-center gap-3 m-auto">
                <Link to="/" className="text-m hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Home
                </Link>
                <Link to="/about" className="text-m hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    About Us
                </Link>
                <Link to="/item" className="text-m hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Items
                </Link>
            </div>
            <button className="text-m bg-white w-10 h-5 rounded-xl hover:bg-yellow-100 mr-2" onClick={signin}>
                Login
            </button>
        
        </div>
    </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item" element={<Item className="mt-16 md:mt-20 py-8 md:py-2 w-full" />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
