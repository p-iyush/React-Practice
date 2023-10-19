import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import store from "./../../002ReduxToolKitPractice/src/app/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Login />
      <Profile />
    </Provider>
  );
}

export default App;
