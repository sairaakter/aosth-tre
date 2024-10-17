import classes from "../../styles/signup.module.css";

import Loginillustration from "../loginillustration";

import LoginForm from "../loginForm";

export default function Login() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className={classes.ttl}>Login to your account</h1>
        </div>
      </div>
      <div className="row">
        <Loginillustration />
        <LoginForm />
      </div>
    </>
  );
}
