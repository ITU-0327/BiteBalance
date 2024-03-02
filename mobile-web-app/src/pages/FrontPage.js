import { Link } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="front-page">
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <b className="bitebalance-balanced-living-container">
        <p className="bitebalance">BiteBalance</p>
        <p className="blank-line">&nbsp;</p>
        <p className="balanced-living-bite">Balanced Living, Bite by Bite</p>
      </b>
      <Link className="background-image-wrapper" to="/login-page">
        <div className="background-image">
          <img className="image-24-icon" alt="" src="/image-24@2x.png" />
        </div>
      </Link>
    </div>
  );
};

export default FrontPage;
