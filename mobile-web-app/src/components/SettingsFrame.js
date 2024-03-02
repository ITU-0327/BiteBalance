import "./SettingsFrame.css";

const SettingsFrame = () => {
  return (
    <section className="settings-frame">
      <div className="chatbot-frame">
        <div className="recommended-text-parent">
          <div className="recommended-text1">
            <b className="recommended-for-you1">{`Recommended for you `}</b>
            <b className="top1">Top</b>
          </div>
          <div className="micro-wave">
            <div className="microwave1">
              <img
                className="image-26-icon1"
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
              <div className="healthy-meals-in-container1">
                <p className="blank-line4">&nbsp;</p>
                <p className="p9">{` `}</p>
                <p className="healthy2">
                  <b className="healthy3">Healthy</b>
                  <span>{` `}</span>
                </p>
                <p className="meals-in-10-mins1">
                  <span>{`Meals in `}</span>
                  <b>10 mins</b>
                </p>
                <p className="blank-line5">
                  <b>&nbsp;</b>
                </p>
              </div>
            </div>
            <div className="tiktok-recipes1">
              <div className="cheap-and-easy-tiktok-recipes">
                <div className="cheap-and-easy-container2">
                  <span className="cheap-and-easy-container3">
                    <p className="blank-line6">&nbsp;</p>
                    <p className="blank-line7">&nbsp;</p>
                    <p className="cheap-and-easy-tiktok-recipies1">
                      <span>{`Cheap AND easy `}</span>
                      <b className="tiktok-recipies1">TIKTOK RECIPIES</b>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended-text-frame">
          <button className="chatbot1">
            <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsFrame;
