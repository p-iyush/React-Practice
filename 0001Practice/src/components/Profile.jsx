import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useContext(UserContext);
  const userFromRedux  = useSelector((state) => state.user);

  if (!user) return <div>Please Login !!!</div>;
  return (
    <div>
      Welcome, {user.firstname} {userFromRedux.lastname}
    </div>
  );
};

export default Profile;
