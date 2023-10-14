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
    brightness,
    setBrightness,
    showBrightness,
    setShowBrightness,
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
        <img
          src={sun}
          className="w-5 h-5"
          onClick={(e) => {
            e.stopPropagation();
            setShowBrightness(!showBrightness);
          }}
          draggable="false"
          alt=""
        />
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
            <div className="border-t border-gray-300">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  className="w-16"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Battery20"></g> <g id="Battery19"></g>
                    <g id="Battery18"></g> <g id="Battery17"></g>
                    <g id="Battery16"></g> <g id="Battery15"></g>
                    <g id="Battery14"></g> <g id="Battery13"></g>
                    <g id="Battery12"></g> <g id="Battery11"></g>
                    <g id="Battery10"></g> <g id="Battery09"></g>
                    <g id="Battery08"></g> <g id="Battery07"></g>
                    <g id="Battery06">
                      <g>
                        <g>
                          <path
                            d="M15,3v3c0,0.55-0.45,1-1,1h-4C9.45,7,9,6.55,9,6V3c0-0.55,0.45-1,1-1h4C14.55,2,15,2.45,15,3z"
                            fill="#1777BA"
                          ></path>
                        </g>
                        <g>
                          <path
                            d="M18,6v15c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1V6c0-0.55,0.45-1,1-1h10C17.55,5,18,5.45,18,6z"
                            fill="#2FA3D5"
                          ></path>
                        </g>
                      </g>
                      <polygon
                        fill="#1777BA"
                        points="13,9 9,13 11,13 11,18 15,12 13,12 "
                      ></polygon>
                    </g>
                    <g id="Battery05"></g> <g id="Battery04"></g>
                    <g id="Battery03"></g> <g id="Battery02"></g>
                    <g id="Battery01"></g>
                  </g>
                </svg>
                <div>
                  <span className="text-sm font-semibold select-none">
                    Battery
                  </span>
                  <p className="text-xs select-none">
                    89% charged - 14 minutes until full
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-7 right-[7.9rem] transition-all duration-500 ${
          showBrightness
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="w-[200px] h-[80px] flex flex-col">
          <div className="triangle self-end mr-[4.8rem]" />
          <div className="text-black bg-white rounded h-full flex items-center space-x-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>

            <input
              type="range"
              min="40"
              max="150"
              value={brightness}
              step="1"
              className="outline-none"
              onChange={(e) => setBrightness(e.target.value)}
            />
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
