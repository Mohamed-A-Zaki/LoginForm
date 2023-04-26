import { userContext } from "../UserContext";
import { useContext } from "react";
import Logout from "./Logout";

const Navbar = () => {
  const { user } = useContext(userContext);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <span className="navbar-brand mb-0 h1">React Hooks</span>
        {user ? <Logout /> : <div>You Need To Login</div>}
      </div>
    </nav>
  );
};

export default Navbar;
