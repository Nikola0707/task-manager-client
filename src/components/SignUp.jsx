import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const SignUp = ({ isVisible }) => {
  return (
    <div className="signUp-container">
      <div className="close-SignUp-model" style={{textAlign:"right"}}>
          <AiFillCloseCircle  style={{margin:"0.5rem 1.5rem", fontSize:"1.4rem",color:"#385a64"}} onClick={() => isVisible(false)} />
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
          <input type="text" placeholder="Full Name" />
        </div>

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
          <input type="email" placeholder="Password" />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default SignUp;
