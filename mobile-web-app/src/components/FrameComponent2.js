import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="frame-section">
      <div className="frame-div">
        <div className="settings-btn-parent">
          <button className="settings-btn">
            <img
              className="settings-icon"
              loading="lazy"
              alt=""
              src="/settings.svg"
            />
          </button>
          <button className="low-calorie-wrapper">
            <b className="low-calorie">Low Calorie</b>
          </button>
          <button className="breakfast-wrapper">
            <b className="breakfast">Breakfast</b>
          </button>
        </div>
        <div className="frame-wrapper">
          <div className="image-17-parent">
            <img
              className="image-17-icon"
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <a
              className="chicken-curry-1-container"
              href="https://www.allrecipes.com/recipe/46822/indian-chicken-curry-ii/"
              target="_blank"
            >
              <p className="chicken-curry">Chicken Curry</p>
              <p className="hour-15-mins">1 hour 15 mins</p>
            </a>
          </div>
        </div>
      </div>
      <button className="frame-child" />
    </section>
  );
};

export default FrameComponent2;
