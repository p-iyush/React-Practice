import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ username, password }));
  };

  return (
    <>
      <div>Login</div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Login;
