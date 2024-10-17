import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import classes from "../styles/signup.module.css";
import Form from "./Form";
import Button from "./button";
import Textinput from "./textinput";

export default function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState("");
  const { login } = useAuth();
  const history = useNavigate();

  async function handleclick(e) {
    e.preventDefault();

    try {
      seterror("");
      setloading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      console.log(err);
      setloading(false);
      seterror("failed to login");
    }
  }
  return (
    <>
      <Form className={`${classes.signup}`} onSubmit={handleclick}>
        <Textinput
          type="text"
          placeholder="Enter email"
          aria-label="First name"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Textinput
          type="text"
          placeholder="Enter password"
          aria-label="First name"
          icon=" lock"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          <span>Submit Now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Do not have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}
