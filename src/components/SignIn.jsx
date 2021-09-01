import {useState} from 'react'
import Cookies from 'js-cookie'

import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const axios = require('axios')

const SignIn = ({ isVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // SIGN IN
  const signIn = (e) => {
    e.preventDefault()
    axios.post('https://nikola-task-manager-app.herokuapp.com/users/login',{
      email,
      password
    }).then(response => {
      console.log(response)
      const {token} = response.data
      Cookies.set("token", token)
      window.location.replace('/dashboard');
      setEmail('')
      setPassword('')
    }).catch(e => console.log(e))
  }
   
  return (
    <div className="signIn-container">
      <div className="close-signIn-model" style={{textAlign:"right"}}>
          <AiFillCloseCircle  style={{margin:"0.5rem 1.5rem", fontSize:"1.4rem",color:"#385a64"}} onClick={() => isVisible(false)} />
      </div>
      <div className="avatar-container">
        <img src={avatar} alt="avatar" />
      </div>
      <h1>Welcome back!</h1>
      <form action="">
        <div className="inputBox">
          <span>
            <MdEmail style={{ color: "#385a64", fontSize: "20px" }} />
          </span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="inputBox">
          <span>
            <RiLockPasswordFill
              style={{ color: "#385a64", fontSize: "20px" }}
            />
          </span>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Log In" onClick={signIn}/>
      </form>
    </div>
  );
};

export default SignIn;
