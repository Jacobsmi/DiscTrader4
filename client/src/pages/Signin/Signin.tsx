import "./Signin.css";
import disc from "../../imgs/FlyingDisc.svg";
import { Link } from "react-router-dom";

const Signin = () => {

  const processSignin = () => {
    console.log("Processing Sign in");
    // Needs the database
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
