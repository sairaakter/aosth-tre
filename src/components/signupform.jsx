import { useState } from "react";
import classes from "../styles/signup.module.css";
import Form from "./Form";
import Button from "./button";
import Checkbox from "./checkbox";
import Textinput from "./textinput";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/authcontext";

export default function SignupForm() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [agree, setagree] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState("");
  const { signup } = useAuth();
  const history = useNavigate();

  async function handleclick(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmpassword) {
      return seterror("Password do not matched!");
    }

    try {
      seterror("");
      setloading(true);
      await signup(email, password, username);
      history("/");
    } catch (err) {
      console.log(err);
      setloading(false);
      seterror("failed to create an account");
    }
  }
  return (
    <Form className={`${classes.signup}`} onSubmit={handleclick}>
      <Textinput
        type="text"
        required
        placeholder="Enter name"
        aria-label="First name"
        icon="person"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <Textinput
        type="text"
        required
        placeholder="Enter email"
        aria-label="First name"
        icon="alternate_email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <Textinput
        type="text"
        required
        placeholder="Enter password"
        aria-label="First name"
        icon=" lock"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <Textinput
        type="text"
        required
        placeholder="Confirm password"
        aria-label="First name"
        icon="lock_clock "
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
      />
      <Checkbox
        required
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setagree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
