import { createContext, useState } from "react";

import { w1 } from "@/assets";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [allSize, setAllSize] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [wallpaper, setWallpaper] = useState(w1);
  const [apps, setApps] = useState([]);

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
        wallpaper,
        setWallpaper,
        apps,
        setApps,
      }}
    >
      {children}
    </Context.Provider>
  );
};
