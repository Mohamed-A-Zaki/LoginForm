import { useContext } from "react";
import { userContext } from "../UserContext";

const Logout = () => {
  const { user, dispatch } = useContext(userContext);

  function HandleLogout() {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
  }

  return (
    <div>
      <span>{user?.email}</span>
      <button className="btn btn-danger btn-sm ms-2" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
