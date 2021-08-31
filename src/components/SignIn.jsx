import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const SignIn = ({ isVisible }) => {
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
          <input type="email" placeholder="Email" />
        </div>

        <div className="inputBox">
          <span>
            <RiLockPasswordFill
              style={{ color: "#385a64", fontSize: "20px" }}
            />
          </span>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default SignIn;
