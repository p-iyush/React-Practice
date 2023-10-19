import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleClickEvent = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div>Login</div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleClickEvent}>
        Login
      </button>
    </>
  );
};

export default Login;
