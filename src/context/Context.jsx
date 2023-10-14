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
  const [showApps, setShowApps] = useState(false);
  const [showPowerOpt, setShowPowerOpt] = useState(false);
  const [showDate, setshowDate] = useState(false);
  const [showBatteryOpt, setShowBatteryOpt] = useState(false);
  const [showPercentage, setshowPercentage] = useState(false);
  const [showBrightness, setShowBrightness] = useState(false);
  const [brightness, setBrightness] = useState(100);

  const handleCloseOpt = () => {
    setShowApps(false);
    setShowPowerOpt(false);
    setshowDate(false);
    setShowBatteryOpt(false);
    setShowBrightness(false);
  };

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
        showApps,
        setShowApps,
        showPowerOpt,
        setShowPowerOpt,
        handleCloseOpt,
        showDate,
        setshowDate,
        showBatteryOpt,
        setShowBatteryOpt,
        showPercentage,
        setshowPercentage,
        showBrightness,
        setShowBrightness,
        brightness,
        setBrightness,
      }}
    >
      {children}
    </Context.Provider>
  );
};
