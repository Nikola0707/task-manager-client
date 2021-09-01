import { useState } from "react";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const HomePage = () => {
  const [showSignIn, setShowSingIn] = useState(false);  
  const [showSignUp, setShowSingUp] = useState(false);

  return (
    <div className="home-container">
      <div className="sign-in-modal">
        {showSignIn && <SignIn isVisible={setShowSingIn} />}
      </div>
      <div className="sign-up-modal">
        {showSignUp && <SignUp isVisible={setShowSingUp} />}
      </div>
      <section>
        <div>
          <h1>TASK MANAGEMENT AND TODO LIST</h1>
        </div>
        <div>
          <p>Good things happen when you set your priorities straight!</p>
        </div>
        <div className="button-div">
          <button
            className="sign-in-btn"
            onClick={() => {
              setShowSingIn(true);
              setShowSingUp(false);
            }}
          >
            SIGN IN
          </button>
          <button
            className="sign-up-btn"
            onClick={() => {
              setShowSingUp(true);
              setShowSingIn(false);
            }}
          >
            SIGN UP
          </button>
        </div>
      </section>
      <footer>
        <Footer backgroundDesignedBy="Designed by slidesgo / Freepik" />
      </footer>
    </div>
  );
};

export default HomePage;
