import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleValidation = () => {
    email === ""
      ? inputEmail.current.classList.add("validation-error")
      : inputEmail.current.classList.remove("validation-error");
    password === ""
      ? inputPassword.current.classList.add("validation-error")
      : inputPassword.current.classList.remove("validation-error");
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <input
        type="text"
        ref={inputEmail}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        ref={inputPassword}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        I don't have account <Link to="/register">Register</Link>{" "}
      </p>
      <button onClick={handleValidation}>Login</button>
      <p>
        <Link to="/">Continue without registration </Link>
      </p>
    </div>
  );
}

export default Login;
