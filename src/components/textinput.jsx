import classes from "../styles/textinput.module.css";

// eslint-disable-next-line react/prop-types
export default function Textinput({ icon, ...rest }) {
  return (
    <>
      <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
}
