import React from "react";
import "./loginScreen.css";


function LoginScreen() {
//  const [signIn, setSignIn] = useState(false);



  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited films, Tv programmes and more.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <h3> Ready to watch ? Enter your Email to get create or restart your membership</h3>
          <div className="loginScreen_input">
            <form>
                <input type="email" placeholder="Email Address"/>
                <button className="loginScreen_getStarted">
                     GET STARTED
                </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
