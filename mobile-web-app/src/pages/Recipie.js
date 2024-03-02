import { Link } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FriedRiceFrame from "../components/FriedRiceFrame";
import "./Recipie.css";

const Recipie = () => {
  return (
    <div className="recipie">
      <FrameComponent9 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <FriedRiceFrame />
      <div className="empty-frame">
        <div className="fried-rice-frame" />
      </div>
      <section className="image-frames-stack">
        <div className="image-frames-stack1">
          <div className="time-input-field">
            <img
              className="image-25-icon"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <a
              className="fried-rice-15-container"
              href="https://www.recipetineats.com/egg-fried-rice/"
              target="_blank"
            >
              <p className="fried-rice">Fried Rice</p>
              <p className="mins">15 mins</p>
            </a>
          </div>
          <div className="dish-name-and-time-fields" />
        </div>
      </section>
      <Link className="image-12" to="/home-page" />
    </div>
  );
};

export default Recipie;
