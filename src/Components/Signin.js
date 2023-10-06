import {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Home from './Home'
import styles from "./Home.module.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Home />
      <form 
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();

          axios.post(
            "database-1.cuxmae9izxek.us-east-2.rds.amazonaws.com", {
              email,
              password
            }
          ).then((response) => {
            props.setToken(response.data.token)
          })

          setEmail("");
          setPassword("");
          navigate("/dashboard");
        }}
      >
        <label className='label'>
          Email:
          <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label className='label'>
          Password:
          <input type="password" className="input"onChange={(e) => setPassword(e.target.value)} value={password}/>
        </label>
        <input type="submit" className={styles.submit} />
        <p>New here? <Link to="/signup">Sign up now!</Link></p>
      </form>
      <div className={styles.tag}>
        <p>
          <strong>Moodvies</strong> helps you keep pick a movie based on your current mood.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Signin;