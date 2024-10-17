import classes from "../styles/prgsbutn.module.css";
// eslint-disable-next-line react/prop-types
export default function Progressbutton({ className, children }) {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}
