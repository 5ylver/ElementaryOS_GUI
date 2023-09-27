import { createContext, useState } from "react";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [allSize, setAllSize] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        allSize,
        setAllSize,
        password,
        setPassword,
        username,
        setUsername,
      }}
    >
      {children}
    </Context.Provider>
  );
};
