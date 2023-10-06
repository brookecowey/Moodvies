import {useState} from 'react';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

function App() {
 const [token, setToken] = useState("");
 const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Signin  setToken={setToken}/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
