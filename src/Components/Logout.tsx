import { useContext } from "react";
import { userContext } from "../UserContext";

const Logout = () => {
  const { user, setUser } = useContext(userContext);

  function handleLogout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <div>
      <span>{user?.email}</span>
      <button className="btn btn-danger btn-sm ms-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
