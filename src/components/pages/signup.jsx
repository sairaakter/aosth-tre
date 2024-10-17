import classes from "../../styles/signup.module.css";

import Illustration from "../Illustration";

import SignupForm from "../signupform";

export default function Signup() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className={classes.ttl}>Create an account</h1>
        </div>
      </div>
      <div className="row">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
