import TitleBiteBalance from "../components/TitleBiteBalance";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <main className="input-label-parent">
        <section className="input-label">
          <h3 className="welcome-to-bitebalance">Welcome to BiteBalance!</h3>
        </section>
        <TitleBiteBalance />
      </main>
      <div className="secondary-frame">
        <div className="already-have-an-account-sign-parent">
          <div className="already-have-an-container">
            <b>{`Already have an account? `}</b>
            <i className="sign-in">Sign in</i>
          </div>
          <img
            className="image-11-icon"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
      
        </div>
      </div>
      <div className="login-page-child" />
    </div>
  );
};

export default LoginPage;
