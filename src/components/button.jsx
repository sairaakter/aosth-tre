import classes from "../styles/button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({ className, children }) {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}
