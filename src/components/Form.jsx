//import Textinput from "./textinput"
import classes from "../styles/form.module.css";
// eslint-disable-next-line react/prop-types
export default function Form({ children, className, ...rest }) {
  return (
    <div className="col-lg-6">
      <form className={`${classes.signup} ${className}`} action="#" {...rest}>
        <div className="row g-3">
          <div className="col">{children}</div>
        </div>
      </form>
    </div>
  );
}
