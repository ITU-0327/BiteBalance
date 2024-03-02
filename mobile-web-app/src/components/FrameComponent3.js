import FrameComponent4 from "./FrameComponent4";
import "./FrameComponent3.css";

const FrameComponent3 = ({ files, onDelete }) => {
  return (
    <section className="nested-frames">
      <div className="frames-collection1">
        <h3 className="files1">Files</h3>
        <div className="images-collection-wrapper">
          <div className="images-collection">
          {files.map((file, index) => (
            <FrameComponent4
              key={index}
              src={file.src}
              fileName={file.fileName}
              uploadDate={file.uploadDate}
              onDelete={onDelete} // Pass the onDelete function to FrameComponent4
            />
          ))}
          </div>
        </div>
        <img
          className="image-12-icon1"
          loading="lazy"
          alt="Background"
          src="/image-12@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
