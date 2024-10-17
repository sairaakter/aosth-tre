import suces from "../assets/images/success.png";
import classes from "../styles/summery.module.css";

export default function Summery() {
  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={classes.badge}>
          <img src={suces} alt="Success" />
        </div>
      </div>
    </>
  );
}
