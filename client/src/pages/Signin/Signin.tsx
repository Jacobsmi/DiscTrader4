import "./Signin.css";
import disc from "../../imgs/FlyingDisc.svg";
import { Link } from "react-router-dom";
import postSignin from "../../api/auth/postSignin";
import { useState } from "react";

const Signin = () => {
  const [signinErrors, setSigninErrors] = useState<string>('');

  const processSignin = async () => {
    // Everytime a sign in is attempted reset the errors field
    setSigninErrors('');
    // call the Post function which makes the API call and processes the result
    const result = await postSignin();
    // Display based off of the error recieved
    if (result === false){
      setSigninErrors('Some error occurred while processing sign in. Please try again later');
    }
  }

  return (
    <div className="Signin">
      <div className="Signin-img">
        <img src={disc} alt="Flying Disc" style={{maxWidth: "80%"}}/>
      </div>
      <div className="Signin-Form-Container">
        <div className="Signin-Form">
          <div className="Signin-Form-Header">Sign In</div>
          <input
            className="Signin-Form-Input"
            placeholder="E-Mail"
            type="email"
          ></input>
          <input
            className="Signin-Form-Input"
            placeholder="Password"
            type="password"
          ></input>
          <div className="Signin-Form-Errors" style={signinErrors? {display: "block"}: {display: "none"}}>
            {signinErrors}
          </div>
        </div>
      </div>
      <div className="Signin-Button-Container">
        <button className="Signin-Button" onClick={processSignin}>Sign In</button>
        <span>Not a member yet? <Link className="Signin-Link" to="/signup">Sign Up Now</Link></span>
      </div>
    </div>
  );
};

export default Signin;
