import { Link } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import classes from "../styles/Account.module.css";
export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <>
      <div className={classes.menu} id="idchang">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {currentUser ? (
            <>
              <li className="nav-item">
                <a className="nav-link p-0 mt-1" href="#">
                  <span className="material-icons-outlined" title="Account">
                    account_circle
                  </span>
                  <span>{currentUser.displayName}</span>
                  <span
                    className="material-icons-outlined"
                    title="Logout"
                    onClick={logout}
                  >
                    logout
                  </span>
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
