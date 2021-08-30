import Footer from './components/Footer'
import SignIn from './components/SignIn'
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <header>
        <div>Logo</div>
        <div>
          <button>SIGN IN</button>
        </div>
      </header> */}
      <section>
        <div><h1>TASK MANAGEMENT AND TODO LIST</h1></div>
        <div>
          <p>
            Good things happen when you set your priorities straight!
          </p>
        </div>
        <div className="button-div">
          <button className="sign-in-btn">SIGN IN</button>
          <button className="sign-up-btn">SIGN UP</button>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
      <div className="sign-in-modal">
            <SignIn />
        </div>
    </div>
  );
}

export default App;
