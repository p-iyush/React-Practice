import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  if (!user) return <div>Please Login</div>;
  return <div>Welcome, {user.username}</div>;
};

export default Profile;
