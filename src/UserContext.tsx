import { createContext, useEffect, useReducer, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type userContextType = {
  user: User | null;
  dispatch: React.Dispatch<Action>;
};

type User = {
  email: string;
  password: string;
};

type Action =
  | {
      type: "LOGIN";
      payload: User;
    }
  | {
      type: "LOGOUT";
    };

function userReducer(state: User | null, action: Action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

export const userContext = createContext({} as userContextType);

const UserContextProvider = ({ children }: Props) => {
  // const [user, setUser] = useState<User | null>(null);

  // function HandleLogin(e: React.FormEvent<HTMLFormElement>, user: User) {
  //   e.preventDefault();
  //   setUser(user);
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  // function HandleLogout() {
  //   setUser(null);
  //   localStorage.clear();
  // }

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("user") as string));
  // }, []);

  const [user, dispatch] = useReducer(userReducer, null);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("user") as string),
    });
  }, []);

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
