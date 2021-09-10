import { useState } from "react";
import Cookies from 'js-cookie'

import { FaUser,FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const axios = require("axios");

const SignUp = ({ isVisible }) => {
  const [errorMessage, setErrorMessage] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`, {
        name: name,
        email: email,
        age: age,
        password: password,
      })
      .then((response) => {
        const {token} = response.data
        Cookies.set("token", token)
        Cookies.set("id", response.data.user._id);
        window.location.replace('/dashboard');
        setName('')
        setEmail('')
        setPassword('')
        setAge('')
      })
      .catch((e) => setErrorMessage(true));
  };

  return (
    <div className="signUp-container">
      <div className="close-SignUp-model" style={{ textAlign: "right" }}>
        <AiFillCloseCircle
          style={{
            margin: "0.5rem 1.5rem",
            fontSize: "1.4rem",
            color: "#385a64",
          }}
          onClick={() => isVisible(false)}
        />
      </div>
      <div className="avatar-container">
        
        <img src={avatar} alt="avatar" />
      </div>
      {errorMessage ? <p>Wrong email or short password (min 7 chars)!</p> : <h1>Welcome!</h1>}
      <form action="">
        <div className="inputBox">
          <span>
            <FaUser style={{ color: "#385a64", fontSize: "20px" }} />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="inputBox">
          <span>
            <FaBirthdayCake style={{ color: "#385a64", fontSize: "20px" }} />
          </span>
          <input
            type="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>

        <div className="inputBox">
          <span>
            <MdEmail style={{ color: "#385a64", fontSize: "20px" }} />
          </span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="inputBox">
          <span>
            <RiLockPasswordFill
              style={{ color: "#385a64", fontSize: "20px" }}
            />
          </span>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <input type="submit" value="Create Account" onClick={signUp} />
      </form>
    </div>
  );
};

export default SignUp;
