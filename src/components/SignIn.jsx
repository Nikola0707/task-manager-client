import { useState } from "react";
import Cookies from "js-cookie";

import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import avatar from "../assets/user-avatar.png";

const SignIn = ({ isVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logginError, setLogginError] = useState(false);
  const [logginErrorMessage, setLogginErrorMessage] = useState("");

  const [pending, setPending] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    setPending(true);
    fetch("https://nikola-task-manager-app.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { token, user } = data;
        Cookies.set("token", token);
        Cookies.set("id", user._id);
        Cookies.set("user", user.name);
        window.location.replace("/dashboard");
        setEmail("");
        setPassword("");
        setPending("false");
      })
      .catch((e) => {
        setLogginError(true);
        setLogginErrorMessage("Check your Email or Password!");
      });
  };

  return (
    <div className="signIn-container">
      <div className="close-signIn-model" style={{ textAlign: "right" }}>
        <AiFillCloseCircle
          style={{
            margin: "0.5rem 1.5rem",
            fontSize: "1.4rem",
            color: "#385a64",
          }}
          onClick={() => isVisible(false)}
        />
      </div>
      {pending ? (
        <div class="lds-circle">
          <div></div>
        </div>
      ) : (
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>
      )}
      <h1>Welcome back!</h1>

      <form action="">
        <div className="inputBox">
          <span>
            <MdEmail style={{ color: "#385a64", fontSize: "20px" }} />
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLogginError(false);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLogginError(false);
            }}
          />
        </div>
        {logginError && <p className="errorMessage">{logginErrorMessage}</p>}
        <input type="submit" value="Log In" onClick={signIn} />
      </form>
    </div>
  );
};

export default SignIn;
