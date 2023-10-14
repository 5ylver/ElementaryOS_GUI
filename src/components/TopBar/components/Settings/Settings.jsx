import { useContext } from "react";

import { bell, bluetooth, power, speakerWave, sun, wifi } from "@/assets";
import { Context } from "@/context";
import Battery from "./components/Battery";

function Settings() {
  const {
    showPowerOpt,
    setShowPowerOpt,
    isLogged,
    showBatteryOpt,
    setshowPercentage,
  } = useContext(Context);

  const handleShowPercentage = () => {
    setshowPercentage(document.getElementById("toggle").checked);
  };

  return (
    <>
      <div className="flex justify-end items-center w-full space-x-5 select-none z-20">
        {isLogged && (
          <img src={speakerWave} className="w-5 h-5" draggable="false" alt="" />
        )}
        <img src={sun} className="w-5 h-5" draggable="false" alt="" />
        <img src={wifi} className="w-5 h-5" draggable="false" alt="" />
        <img src={bluetooth} className="w-4 h-4" draggable="false" alt="" />
        <Battery />
        {isLogged && (
          <img src={bell} className="w-5 h-5" draggable="false" alt="" />
        )}
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

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-7 right-3 transition-all duration-500 ${
          showBatteryOpt
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="w-[270px] h-[250px] flex flex-col">
          <div className="triangle self-end mr-[4.8rem]" />
          <div className="text-black bg-white rounded h-full">
            <div className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-200 rounded">
              <label
                htmlFor="toggle"
                className="text-sm font-medium select-none"
              >
                Show Percentage
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  onChange={handleShowPercentage}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            <div className="border-t border-gray-300"></div>
          </div>
        </div>
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
