import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  milk1Litre,
  mushrooms250g,
  chickenBreast500g,
  propPadding,
  propWidth,
  propWidth1,
  propAlignSelf,
  propAlignSelf1,
  propWidth2,
}) => {
  const milkLitreMushroomsGChickenStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const milk1LitreContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mushrooms250gStyle = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const chickenBreast500gContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
    };
  }, [propAlignSelf1, propWidth2]);

  return (
    <div
      className="milk-litre-mushrooms-g-chicken"
      style={milkLitreMushroomsGChickenStyle}
    >
      <div className="milk-1-litre-container" style={milk1LitreContainerStyle}>
        <ul className="milk-1-litre">
          <li>{milk1Litre}</li>
        </ul>
      </div>
      <div className="mushrooms-250g" style={mushrooms250gStyle}>
        <ul className="mushrooms-250g1">
          <li>{mushrooms250g}</li>
        </ul>
      </div>
      <div
        className="chicken-breast-500g-container"
        style={chickenBreast500gContainerStyle}
      >
        <ul className="chicken-breast-500g">
          <li>{chickenBreast500g}</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent8;
