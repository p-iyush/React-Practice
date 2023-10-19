import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UserSlice";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatcher = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(addUser({ username, password }));
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

      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
};

export default Login;
