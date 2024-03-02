import { Link } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import "./ShoppingList.css";

const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <section className="frame-eggs-onion-potatoes-toma">
        <div className="frame-dairy">
          <div className="wraps-label">
            <div className="basket">
              <h3 className="your-personalised-shopping-container">
                <p className="your-personalised">{`Your Personalised `}</p>
                <p className="shopping-list1">{`Shopping List `}</p>
              </h3>
              <img
                className="image-removebg-preview-2-icon"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-frame1" />
      </section>
      <section className="additional-options-frame">
        <FrameComponent7 />
        <div className="checkbox-group">
          <input className="checkbox" type="checkbox" />
          <input className="checkbox1" type="checkbox" />
          <input className="checkbox2" type="checkbox" />
          <input className="checkbox3" type="checkbox" />
          <input className="checkbox4" type="checkbox" />
          <input className="checkbox5" type="checkbox" />
          <input className="checkbox6" type="checkbox" />
          <input className="checkbox7" type="checkbox" />
          <input className="checkbox8" type="checkbox" />
          <input className="checkbox9" type="checkbox" />
          <input className="checkbox10" type="checkbox" />
          <input className="checkbox11" type="checkbox" />
          <input className="checkbox12" type="checkbox" />
        </div>
      </section>
      <Link className="image-111" to="/home-page" />
    </div>
  );
};

export default ShoppingList;
