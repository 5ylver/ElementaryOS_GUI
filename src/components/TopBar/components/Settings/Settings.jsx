import { useContext } from "react";

import { Context } from "@/context";
import {
  Battery,
  Bluetooth,
  Brightness,
  Notifications,
  Power,
  SpeakerWave,
  Wifi,
} from "./components";

function Settings() {
  const { isLogged } = useContext(Context);

  return (
    <>
      <div className="flex justify-end items-center w-full space-x-5 select-none z-20">
        {isLogged && <SpeakerWave />}
        <Brightness />
        <Wifi />
        <Bluetooth />
        <Battery />
        {isLogged && <Notifications />}
        <Power />
      </div>
    </>
  );
}

export default Settings;
