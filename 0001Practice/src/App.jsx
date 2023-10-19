import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
  return (
    <UserContextProvider>
      {/* <Login />
      <Profile /> */}
      <Parent />
    </UserContextProvider>
  );
}

export default App;
