import { Link } from "react-router-dom";
import "./RecipeAndChartFrame.css";

const RecipeAndChartFrame = () => {
  return (
    <section className="recipe-and-chart-frame">
      <div className="recipe-button-frame">
        <div className="camera-text1">
          <div className="camera-frame">
            <Link className="camera-btn1" to="/scan-your-pantry">
              <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
            </Link>
            <div className="camera-container">
              <b className="camera1">Camera</b>
            </div>
          </div>
        </div>
        <div className="shopping-list-frame1">
          <div className="chef-image">
            <Link className="chart-btn" to="/shopping-list" />
            <b className="shopping-list3">
              <p className="shopping1">Shopping</p>
              <p className="list1">List</p>
            </b>
          </div>
        </div>
        <div className="shopping-list-frame2">
          <a className="recipe-btn1" href="/recipe">
            <img
              className="image-5-icon1"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </a>
          <b className="recipes1">Recipes</b>
        </div>
      </div>
    </section>
  );
};

export default RecipeAndChartFrame;
