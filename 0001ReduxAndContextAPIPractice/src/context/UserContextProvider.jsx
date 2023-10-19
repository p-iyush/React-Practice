import { useState } from "react";
import UserContext from "./UserContext";
import { Provider } from "react-redux";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
