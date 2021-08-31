import { useState } from "react";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";

import "./App.css";

function App() {
  const [showSignIn, setShowSingIn] = useState(false);
  const [showSignUp, setShowSingUp] = useState(false);
  return (
    <>
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
          <Footer backgroundDesignedBy="Designed by slidesgo / Freepik"/>
        </footer>
      </div>
      <UserPage />
    </>
  );
}

export default App;
