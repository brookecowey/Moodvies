import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email, password);

  const register = (e) => {
    e.preventDefault();

    axios.post("https://moodvies-backend.onrender.com/register", {
      email,
      password,
    }).then((res) => {
        console.log(res)
        navigate("/");
    })

    // setEmail("");
    // setPassword("");
    
  };

  return (
    <>
      <form className="form" onSubmit={register}>
        <label className="label">
          Email:
          <input
            type="email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="label">
          Password:
          <input
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input type="submit" className="submit" value="Signup!" />
      </form>
    </>
  );
};

export default Signup;
