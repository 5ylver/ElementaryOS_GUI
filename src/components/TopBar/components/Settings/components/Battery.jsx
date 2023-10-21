import { useContext, useEffect, useState } from "react";

import { battery, batteryCharging, batteryLarge } from "@/assets";
import { Context } from "@/context/Context";

function Battery() {
  const { setShowOptTopBar, showOptTopBar, isLogged } = useContext(Context);
  const [canUseAPI, setCanUseAPI] = useState(false);
  const [charging, setCharging] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showPercentage, setshowPercentage] = useState(false);

  const { showBatteryOpt } = showOptTopBar;

  useEffect(() => {
    if ("getBattery" in navigator) {
      setCanUseAPI(true);

      navigator.getBattery().then((battery) => {
        setPercentage(battery.level * 100);
        setCharging(battery.charging);

        battery.addEventListener("levelchange", () => {
          setPercentage(battery.level * 100);
        });

        battery.addEventListener("chargingchange", () => {
          setCharging(battery.charging);
        });
      });
    } else {
      setCanUseAPI(false);
    }
  }, []);

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-1"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptTopBar({
            ...showOptTopBar,
            showBatteryOpt: !showOptTopBar.showBatteryOpt,
          });
        }}
      >
        {canUseAPI ? (
          charging ? (
            <img
              src={batteryCharging}
              className="w-5 h-5"
              alt="batteryCharging"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-[22px] h-[22px]"
            >
              <rect
                x={3}
                y={10}
                width={16 * (percentage / 100)}
                height={5}
                rx={0}
                ry={0}
                fill="white"
              />

              {/* Percentage */}
              <path
                fillRule="evenodd"
                d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
                clipRule="evenodd"
              />
            </svg>
          )
        ) : (
          <img
            src={battery}
            className="w-[22px] h-[22px]"
            draggable="false"
            alt="battery"
          />
        )}

        {showPercentage && (
          <span className="text-sm font-bold">{percentage}%</span>
        )}
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute ${
          isLogged ? "top-6 right-14" : "top-6 right-24"
        } translate-x-1/2 transition-all duration-500 ${
          showBatteryOpt
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <BatteryOpt setshowPercentage={setshowPercentage} />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const BatteryOpt = ({ setshowPercentage }) => {
  const { isLogged } = useContext(Context);

  const handleShowPercentage = () => {
    setshowPercentage(document.getElementById("toggle").checked);
  };

  return (
    <div className="w-[270px] h-[250px] flex flex-col">
      <div
        className={`triangle self-end ${isLogged ? "mr-[4.8rem]" : "mr-9"}`}
      />
      <div className="text-black bg-white rounded h-full">
        <div className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-200 rounded">
          <label htmlFor="toggle" className="text-sm font-medium select-none">
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
            <img src={batteryLarge} className="w-16" alt="" />
            <div>
              <span className="text-sm font-semibold select-none">Battery</span>
              <p className="text-xs select-none">
                89% charged - 14 minutes until full
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Battery;
