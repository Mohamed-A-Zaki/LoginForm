import "./App.scss";
import { useContext } from "react";
import { userContext } from "./UserContext";

import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";

const App = () => {
  const { user } = useContext(userContext);
  return (
    <div className="app">
      <Navbar />
      {user ? <HomePage /> : <Login />}
    </div>
  );
};

export default App;
