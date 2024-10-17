import imggg from "../assets/images/signup.svg";
import classes from "../styles/illustration.module.css";

export default function Illustration() {
  return (
    <div className="col-lg-6">
      <div className={classes.illustration}>
        <img src={imggg} alt="Signup" />
      </div>
    </div>
  );
}
