import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Home from './Home'

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <>
    <Home />
      <form 
        className='form'
        onSubmit={(e) => {
          e.preventDefault();

          axios.post(
            "database-1.cuxmae9izxek.us-east-2.rds.amazonaws.com", {

              name,
              email,
              password
            }
          )

          setName("");
          setEmail("");
          setPassword("")
          navigate("/");
        }}
      >
        <label className='label'>
          Name:
          <input type="text" className="input" onChange={(e) => setName(e.target.value)} value={name}/>
        </label>
        <label className='label'>
          Email:
          <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label className='label'>
          Password:
          <input type="password" className="input"onChange={(e) => setPassword(e.target.value)} value={password}/>
        </label>
        <input type="submit" className="submit" value="Signup!"/>
      </form>
    </>
  )
}

export default Signup;