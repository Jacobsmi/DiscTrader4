import "./Landing.css";
import disc from "../../imgs/FlyingDisc.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing-Body">
        <div className="Landing-Body-Main">Disc Trader</div>
        <div className="Landing-Body-Sub">
          The best place to exchange anything disc golf.
        </div>
      </div>
      <div className="Landing-Image">
        <img src={disc} alt="Flying Disc" className="Landing-Image-Src"/>
      </div>
      <div className="Landing-Header">
        <Link to="/signup" className="Landing-Header-Button">Get Started</Link>
        <Link to="/signin" className="Landing-Header-SignIn">Sign In</Link>
      </div>
    </div>
  );
};

export default Landing;
