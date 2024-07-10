import { useState, useRef } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useRef(null);
  const inputName = useRef(null);
  const inputPassword = useRef(null);

  const handleValidation = (e) => {
    email === "" ? inputEmail.current.classList.add("validation-error") : inputEmail.current.classList.remove("validation-error");
    name === "" ? inputName.current.classList.add("validation-error") : inputName.current.classList.remove("validation-error");
    password === "" ? inputPassword.current.classList.add("validation-error") : inputPassword.current.classList.remove("validation-error");
  };
  return (
    <div className="register-box">
      <h1>Register</h1>
      <input
        type="text"
        ref={inputName}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
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
        Do you already have account?<Link to="/login"> Login </Link>
      </p>
      <button onClick={handleValidation}>Register</button>
      <p>
        <Link to="/">Continue without registration </Link>
      </p>
    </div>
  );
}

export default Register;
