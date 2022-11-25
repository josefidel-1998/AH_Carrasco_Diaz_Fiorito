import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import Login from '../auth/Login'
import Register from '../auth/Register'
import Home from '../views/Home';
import Fish from '../views/Fish';
import Logo from '../assests/logo.png';

export default function ReactRouter() {
  return (
      <BrowserRouter>
          <header className="w-full bg-gray-900 text-white py-4 flex md:flex-row justify-around items-center flex-wrap ">
            <h1 className="font-bold flex flex-row items-center gap-x-4 text-xl">
              <img className="w-10 rounded-full" src={Logo} alt="logo" />Biufort</h1>
            <ul className="flex flex-row gap-x-6">
                <li className="text-blue-300 hover:text-sky-700 ease-in-out duration-300"><NavLink to="/" >Inicio</NavLink></li>
                <li className="text-blue-300 hover:text-sky-700 ease-in-out duration-300"><NavLink to="/fish" >Peces</NavLink></li>
                <li className="text-blue-300 hover:text-sky-700 ease-in-out duration-300"><NavLink to="/login" >Login</NavLink></li>
                <li className="text-blue-300 hover:text-sky-700 ease-in-out duration-300"><NavLink to="/registrar" >Registrar</NavLink></li>
            </ul>
          </header>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/registrar" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/fish" element={<Fish/>}/>
          </Routes>
      </BrowserRouter>
    
  )
}