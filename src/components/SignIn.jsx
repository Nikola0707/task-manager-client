import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const SignIn = () => {
  return (
    <div className="signIn-container">
        <div className="avatar-container">
            <img src={avatar} alt="avatar" />
        </div>
      <h1>Welcome back!</h1>
      <form action="">
        <div className="inputBox">
          <span>
            <FaUser style={{color:"#385a64", fontSize:"20px"}}/>
          </span>
          <input type="email" placeholder="Email" />
        </div>

        <div className="inputBox">
          <span>
            <RiLockPasswordFill style={{color:"#385a64", fontSize:"20px"}} />
          </span>
          <input type="email" placeholder="Password" />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default SignIn;
