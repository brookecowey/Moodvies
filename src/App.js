import {useState} from 'react';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Happy from './Components/Happy'
import Sad from './Components/Sad'
import Nostalgic from './Components/Nostalgic'
import Comedy from './Components/Comedy'
import Romance from './Components/Romance'
import Documentary from './Components/Documentary'
import Family from './Components/Family'


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
      <Route path="/home" element={<Home />}/>
      <Route path="/genre/1" element={<Happy />}/>
      <Route path="/genre/2" element={<Sad />}/>
      <Route path="/genre/3" element={<Nostalgic />}/>
      <Route path="/genre/5" element={<Comedy />}/>
      <Route path="/genre/4" element={<Romance />}/>
      <Route path="/genre/6" element={<Documentary />}/>
      <Route path="/genre/7" element={<Family />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
