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
            <div className="camera-text-frame">
              <b className="camera1">Camera</b>
            </div>
          </div>
        </div>
        <div className="shopping-list-frame1">
          <div className="chef-image">
            <img
              className="chart-btn-icon1"
              loading="lazy"
              alt=""
              src="/chart-btn@3x.png"
            />
            <b className="shopping-list1">
              <p className="shopping1">Shopping</p>
              <p className="list1">List</p>
            </b>
          </div>
        </div>
        <div className="shopping-list-frame2">
          <div className="recipe-btn1">
            <img
              className="image-5-icon1"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
          <b className="recipes1">Recipes</b>
        </div>
      </div>
    </section>
  );
};

export default RecipeAndChartFrame;
