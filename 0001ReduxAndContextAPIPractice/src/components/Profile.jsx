import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useContext(UserContext);
  const user1 = useSelector((state) => state.user);

  if (!user) return <div>Please Login</div>;
  return (
    <div>
      Welcome, {user.firstname} {user1.lastname}
    </div>
  );
};

export default Profile;
