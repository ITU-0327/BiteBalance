import FrameComponent8 from "./FrameComponent8";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  return (
    <nav className="food-item-list">
      <div className="eggs-1-dozen-container">
        <ul className="eggs-1-dozen">
          <li>{`Eggs   (1 dozen) `}</li>
        </ul>
      </div>
      <div className="onion-1-kg-container">
        <ul className="onion-1-kg">
          <li>{`Onion   (1 kg) `}</li>
        </ul>
      </div>
      <div className="potatoes-1-kg-container">
        <ul className="potatoes-1-kg">
          <li>{`Potatoes   (1 kg) `}</li>
        </ul>
      </div>
      <div className="tomatoes-4-pieces-container">
        <ul className="tomatoes-4-pieces">
          <li>{`Tomatoes  (4 pieces) `}</li>
        </ul>
      </div>
      <FrameComponent8
        milk1Litre="Milk  (1 litre) "
        mushrooms250g="Mushrooms   (250g) "
        chickenBreast500g="Chicken breast  (500g) "
      />
      <div className="frame-empty">
        <div className="wraps-1-packet-container">
          <ul className="wraps-1-packet">
            <li>{`Wraps   (1 packet) `}</li>
          </ul>
        </div>
        <div className="frame-add-ons">
          <div className="bacon-250g">
            <ul className="bacon-250g1">
              <li>{`Bacon   (250g)                     `}</li>
            </ul>
          </div>
          <div className="carrots-label">
            <div className="carrots-500g">
              <ul className="carrots-500g1">
                <li>{`Carrots   (500g) `}</li>
              </ul>
            </div>
            <FrameComponent8
              milk1Litre="Spinach   (120g) "
              mushrooms250g="Bananas  (3 pieces) "
              chickenBreast500g="Juice  (1 litre)"
              propPadding="unset"
              propWidth="187px"
              propWidth1="unset"
              propAlignSelf="stretch"
              propAlignSelf1="unset"
              propWidth2="163px"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FrameComponent7;
