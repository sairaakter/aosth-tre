import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={`container-fluid ${classes.cnotr}`}>{children}</div>
      </main>
    </>
  );
}
