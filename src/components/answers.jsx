import classes from "../styles/answers.module.css";
import Checkbox from "./checkbox";

export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <div className="row ">
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox
              className={`${classes.answer} ${classes.correct}`}
              text="A New hope"
            />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox
              className={`${classes.answer} ${classes.wrong}`}
              text="A New hope"
            />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
          <div className="col-lg-6">
            <Checkbox className={classes.answer} text="A New hope" />
          </div>
        </div>
      </div>
    </>
  );
}
