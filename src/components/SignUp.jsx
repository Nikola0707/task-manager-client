import { useState } from "react";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const axios = require("axios");

const SignUp = ({ isVisible }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault()
    axios
      .post("https://nikola-task-manager-app.herokuapp.com/users", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response)
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch((error) => console.log(error));
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
      <h1>Welcome!</h1>
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
