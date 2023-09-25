import { createContext, useState } from "react";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Context.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </Context.Provider>
  );
};
