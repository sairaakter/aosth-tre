import { Link } from "react-router-dom";
import imgg from "../assets/images/3.jpg";
import classes from "../styles/video.module.css";

export default function Video() {
  return (
    <div className="col-md-6 col-lg-6 col-xxl-3 col-xl-4">
      <div className={classes.videos}>
        <Link to="/quiz">
          <div className={classes.video}>
            <img src={imgg} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={classes.qmeta}>
              <p>10 Questions</p>
              <p>Score : Not taken yet</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
