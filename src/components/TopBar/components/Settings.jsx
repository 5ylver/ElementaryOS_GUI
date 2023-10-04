import { useContext } from "react";

import { Context } from "@/context";
import {
  battery,
  bell,
  bluetooth,
  power,
  speakerWave,
  sun,
  wifi,
} from "@/assets";

function Settings() {
  const { showPowerOpt, setShowPowerOpt } = useContext(Context);

  return (
    <>
      <div className="flex justify-end items-center w-full space-x-4 select-none z-20">
        <img src={speakerWave} className="w-5 h-5" draggable="false" alt="" />
        <img src={sun} className="w-5 h-5" draggable="false" alt="" />
        <img src={wifi} className="w-5 h-5" draggable="false" alt="" />
        <img src={bluetooth} className="w-4 h-4" draggable="false" alt="" />
        <img src={battery} className="w-5 h-5" draggable="false" alt="" />
        <img src={bell} className="w-5 h-5" draggable="false" alt="" />
        <img
          src={power}
          className="w-5 h-5"
          draggable="false"
          onClick={(e) => {
            e.stopPropagation();
            setShowPowerOpt(!showPowerOpt);
          }}
          alt="power"
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-7 right-3 transition-all duration-500 ${
          showPowerOpt
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <PowerOpt />
      </div>
    </>
  );
}

const PowerOpt = () => {
  const { setIsLogged, username, setShowPowerOpt } = useContext(Context);

  return (
    <>
      <div className="w-[12vw] h-[20vh] flex flex-col">
        <div className="triangle2 self-end mr-3"></div>
        <div className="bg-white rounded text-black select-none">
          <div className="flex items-center p-3">
            <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center">
              <span className="text-orange-700 font-medium text-2xl">
                {username[0]}
              </span>
            </div>
            <div className="text-sm ml-2">
              <p className="font-medium">{username}</p>
              <p>Logged in</p>
            </div>
          </div>

          <div className="border-t mt-2 text-sm font-light hover:bg-gray-300 px-2 py-1">
            <p
              onClick={() => {
                setIsLogged(false);
                setShowPowerOpt(false);
              }}
            >
              Log Out...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
