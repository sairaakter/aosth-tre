import imggg from "../assets/images/login.svg";
import classes from "../styles/illustration.module.css";

export default function Loginillustration() {
  return (
    <div className="col-lg-6">
      <div className={classes.illustration}>
        <img src={imggg} alt="Signup" />
      </div>
    </div>
  );
}
