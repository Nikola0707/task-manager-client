import { useState } from 'react';
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import "./App.css";

function App() {
  const [showSignIn, setShowSingIn] = useState(false)
  const [showSignUp, setShowSingUp] = useState(false)
  return (
    <div className="container">
      <div className="sign-in-modal" style={{display:showSignIn}}>
            {showSignIn ? <SignIn /> : ''}
        </div>
      <section>
        <div><h1>TASK MANAGEMENT AND TODO LIST</h1></div>
        <div>
          <p>
            Good things happen when you set your priorities straight!
          </p>
        </div>
        <div className="button-div">
          <button className="sign-in-btn" onClick={()=> setShowSingIn(!showSignIn)}>SIGN IN</button>
          <button className="sign-up-btn">SIGN UP</button>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
