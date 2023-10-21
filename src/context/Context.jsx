import { createContext, useState } from "react";

export const Context = createContext();

const initialState = {
  showDate: false,
  showAppsTB: false,
  showBrightness: false,
  showBatteryOpt: false,
  showPowerOpt: false,
};

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [allSize, setAllSize] = useState(false);
  const [username, setUsername] = useState("");
  const [apps, setApps] = useState([]);
  const [brightness, setBrightness] = useState(100);
  const [showOptTopBar, setShowOptTopBar] = useState(initialState);

  const handleCloseOptTB = () => {
    setShowOptTopBar(initialState);
  };

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        allSize,
        setAllSize,
        username,
        setUsername,
        apps,
        setApps,
        brightness,
        setBrightness,
        showOptTopBar,
        setShowOptTopBar,
        handleCloseOptTB,
      }}
    >
      {children}
    </Context.Provider>
  );
};
