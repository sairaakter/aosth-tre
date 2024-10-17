import classes from "../../styles/signup.module.css";
import Answers from "../answers";
import Miniplayer from "../miniplayer";
import Progressbar from "../progressbar";
export default function Quiz() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h1 className={classes.ttl}>
            Pick three of your favorite Star Wars Flims
          </h1>
          <h4 className="ttltwo">Question can have multiple answers</h4>
        </div>
      </div>

      <Answers />
      <Progressbar />
      <Miniplayer />
    </>
  );
}
