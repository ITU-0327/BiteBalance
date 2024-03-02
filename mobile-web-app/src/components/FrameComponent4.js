import "./FrameComponent4.css";

const FrameComponent4 = ({ src, fileName, uploadDate, onDelete }) => {
  return (
    <div className="frame-parent1">
      <div className="image-30-group">
        <img
          className="image-30-icon1"
          loading="lazy"
          alt={fileName}
          src={src}
        />
        <div className="fridge-vegjpg-parent">
          <b className="fridge-vegjpg1">{fileName}</b>
          <div className="st-march-20241">{uploadDate}</div>
        </div>
      </div>
      <img
        className="image-32-icon"
        loading="lazy"
        alt="Delete icon"
        src="/image-321@2x.png"
        onClick={() => onDelete(fileName)} // Call onDelete with the fileName when the icon is clicked
      />
    </div>
  );
};


export default FrameComponent4;
