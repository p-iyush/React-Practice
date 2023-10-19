import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  if (!user) return <div>Please Login!</div>;
  return (
    <div>
      Welcome, {user.username} {user.password}
    </div>
  );
};

export default Profile;
