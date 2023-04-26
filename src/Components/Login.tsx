import { useState, useContext } from "react";
import { userContext } from "../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(userContext);

  function HandleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = { email, password };
    dispatch({ type: "LOGIN", payload: user });
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <form className="container mt-3" onSubmit={HandleLogin}>
      <h3>Login</h3>
      <input
        className="form-control my-2 shadow-none"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="form-control my-2 shadow-none"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
