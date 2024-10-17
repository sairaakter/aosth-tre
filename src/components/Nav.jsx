import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <>
      <header>
        <div className="container-fluid">
          {/* <!-- navbar start --> */}

          <nav className={`navbar navbar-expand-sm ${classes.c_nav}`}>
            <div className="container-fluid">
              {/* <!-- logo --> */}
              <Link className="navbar-brand" to="/">
                <img
                  className={`img-fluid ${classes.logo}`}
                  src={logo}
                  alt="tinyone"
                />
                <span className={classes.titl}>Learn with Sumit</span>
              </Link>
              {/* <!-- menu --> */}
              <Account />
            </div>
          </nav>
          {/* <!-- navbar end --> */}
        </div>
      </header>
    </>
  );
}
