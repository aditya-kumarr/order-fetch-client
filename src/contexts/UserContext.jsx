import { createContext, useState } from "react";

export const UserContext = createContext();

const UserState = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
