import "./TitleBiteBalance.css";

const TitleBiteBalance = () => {
  return (
    <section className="title-bite-balance">
      <b className="create-your-bitebalance">
        Create your BiteBalance account and embark on a journey to balanced
        living, tailored just for you
      </b>
      <b className="name-">
        <p className="name1">Name: __________</p>
      </b>
      <b className="age-">
        <p className="age1">Age: __________</p>
      </b>
      <b className="email-">
        <p className="email1">Email: __________</p>
      </b>
      <b className="gender-">
        <p className="gender1">Gender: __________</p>
      </b>
      <b className="password-">
        <p className="password">Password: __________</p>
      </b>
      <a className="form-terms" href='/home-page'>
        <b className="create-your-account">Create your Account</b>
      </a>
      <div className="creating-an-account-container">
        <b>{`Creating an account means you agree to our `}</b>
        <i className="terms-and-conditions">Terms and Conditions</i>
      </div>
    </section>
  );
};

export default TitleBiteBalance;
