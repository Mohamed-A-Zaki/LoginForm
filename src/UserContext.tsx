import { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type userContextType = {
  user: User | null;
  HandleLogin: (e: React.FormEvent<HTMLFormElement>, user: User) => void;
  HandleLogout: () => void;
};

type User = {
  email: string;
  password: string;
};

export const userContext = createContext({} as userContextType);

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  function HandleLogin(e: React.FormEvent<HTMLFormElement>, user: User) {
    e.preventDefault();
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function HandleLogout() {
    setUser(null);
    localStorage.clear();
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as string));
  }, []);

  return (
    <userContext.Provider value={{ user, HandleLogin, HandleLogout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
