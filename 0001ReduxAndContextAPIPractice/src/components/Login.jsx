import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useDispatch } from "react-redux";
import { addUser } from "../features/UserSlice";

const Login = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const { setUser } = useContext(UserContext);

  const dispatcher = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ firstname, lastname });
    dispatcher(addUser({ firstname, lastname }));
  };
  return (
    <>
      <div>Login</div>
      <input
        type="text"
        placeholder="firstname"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={(e) => setLastname(e.target.value)}
        value={lastname}
      />

      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
};

export default Login;
