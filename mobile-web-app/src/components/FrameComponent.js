import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="recipie-inner1">
      <div className="search-recipe-text-parent">
        <div className="search-recipe-text">
          <div className="low-calorie-breakfast-frame">
            <img
              className="image-19-icon"
              loading="lazy"
              alt=""
              src="/image-19@2x.png"
            />
            <a
              className="mapo-tofu-40-container"
              href="https://thewoksoflife.com/ma-po-tofu-real-deal/"
              target="_blank"
            >
              <p className="mapo-tofu">Mapo Tofu</p>
              <p className="mins1">40 mins</p>
            </a>
          </div>
        </div>
        <div className="frame-fried-rice" />
      </div>
    </section>
  );
};

export default FrameComponent;
